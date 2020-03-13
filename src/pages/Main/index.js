import React, { useState, useEffect } from 'react';

import { BookList, StyledLink, Container, Form, SubmitButton  } from './styles';

import { FaPlus } from "react-icons/fa";

function Main() {

  const [book, setBook] = useState([
    {
      name: 'WHEN',
      author: 'Dan Pink',
      url: 'data:image/webp;base64,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',
      notes: 'bem loco'
    } ,
    {
      name: 'Sapiens',
      author: 'Yuval Noah Harari',
      url: 'https://images-na.ssl-images-amazon.com/images/I/41ac-LPtnQL._SX324_BO1,204,203,200_.jpg',
      notes: 'craycray'
    }

  ]);

  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');


  function handleAdd () {
    setBook([ ...book,
      {
      newName,
      newAuthor,
      newUrl,
      newNotes
    }
    ]);

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
                <img src={book.url} alt="book"/>
                <strong>{book.name}</strong>
                <button type="button">
                  <StyledLink to="/details" >
                  <span>Details</span>
                  </StyledLink>
                </button>
              </a>
            </li>
          ))
        }

        <li>
          <a href="details">
            <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
            alt="book"/>
          </a>
          <strong>a real good chinese book</strong>
          <button type="button">
          <StyledLink to="/details" >
          <span>Details</span>
          </StyledLink>
          </button>
        </li>
        <li>
          <a href="details">
            <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
            alt="book"/>
          </a>
          <strong>a real good chinese book</strong>
          <button type="button">
          <StyledLink to="/details" >
          <span>Details</span>
          </StyledLink>
          </button>
        </li>
        <li>
          <a href="details">
            <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
            alt="book"/>
          </a>
          <strong>a real good chinese book</strong>
          <button type="button">
          <StyledLink to="/details" >
          <span>Details</span>
          </StyledLink>
          </button>
        </li>
        <li>
          <a href="details">
            <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
            alt="book"/>
          </a>
          <strong>a real good chinese book</strong>
          <button type="button">
          <StyledLink to="/details" >
          <span>Details</span>
          </StyledLink>
          </button>
        </li>
        <li>
          <a href="details">
            <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
            alt="book"/>
          </a>
          <strong>a real good chinese book</strong>
          <button type="button">
          <StyledLink to="/details" >
          <span>Details</span>
          </StyledLink>
          </button>
        </li>
        <li>
          <a href="details">
            <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
            alt="book"/>
          </a>
          <strong>a real good chinese book</strong>
          <button type="button">
          <StyledLink to="/details" >
          <span>Details</span>
          </StyledLink>
          </button>
        </li>

      </BookList>

      </>

  );
}

export default Main;
