import React, { useState, useEffect } from 'react';

import { BookList, StyledLink, Container, Form, SubmitButton  } from './styles';

import { FaPlus } from "react-icons/fa";

function Main() {

  const [book, setBook] = useState([]);

  const [newBook, setNewBook] = useState([]);

  function handleAdd () {
    setBook([ ...[...book], [newBook] ]);
    setNewBook([]);
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
          value={newBook.name}
          name="name"
          onChange={e => setNewBook(e.target.value)}

        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          name="author"
          onChange={e => setNewBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL image"
          value={newBook.url}
          name="url"
          onChange={e => setNewBook(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Notes"
          value={newBook.notes}
          name="notes"
          onChange={e => setNewBook(e.target.value)}
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
