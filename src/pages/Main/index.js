import React, { useState, useEffect } from 'react';
import { BookList, StyledLink, Container, Form, SubmitButton  } from './styles';
import { FaPlus } from "react-icons/fa";

function Main() {

  const [book, setBook] = useState([]);

  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');

  function handleAdd (e) {

    if (newName){

    e.preventDefault()

    setBook([ ...book,
      {
      newName,
      newAuthor,
      newUrl,
      newNotes
    }]);

    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');
  } else
    alert('Book name is Required!');

  };

  useEffect(() => {
    const data = localStorage.getItem('book-list');
    if(data){
      setBook(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('book-list', JSON.stringify(book));
  }, [book]);

  return (
    <>
      <Container >
        <h1>Add Book to the Shelf</h1>
          <Form onSubmit={() => {}}>
            <input
              type="text"
              placeholder="Book Name"
              value={newName}
              name="name"
              required
              onChange={e => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              value={newAuthor}
              name="author"
              onChange={e => setNewAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL image"
              value={newUrl}
              name="url"
              onChange={e => setNewUrl(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Notes"
              value={newNotes}
              name="notes"
              onChange={e => setNewNotes(e.target.value)}
            />
            <SubmitButton onClick={handleAdd}  >
              <FaPlus color='#fff' size={22} />
              <span>Add Book</span>
            </SubmitButton>
          </Form>
      </Container>

      <BookList>
          {
            book.map( book => (
              <li key={book}>
                {
                  book.newUrl ?
                  <a href={`/details/${book.newName}`}>
                    <img src={book.newUrl} alt="book"/>
                  </a>
                  :
                  <>
                    <img style={ { marginTop:'auto', marginLeft:'25px', width: '150px',height: '150px'}}
                          alt="book"
                          src='https://static.thenounproject.com/png/111370-200.png'
                    />
                    <strong
                     >{book.newName}</strong>
                  </>
                }
                  <button type="button">
                    <StyledLink to={`/details/${book.newName}`}>
                    <span>Details</span>
                    </StyledLink>
                  </button>
              </li>
            ))
          }
      </BookList>
    </>
  );
}

export default Main;
