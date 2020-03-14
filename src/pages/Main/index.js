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
                <a href="details">
                  <img src={book.newUrl} alt="book"/>
                </a>
                  <button type="button">
                    <StyledLink to="/details" >
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
