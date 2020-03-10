import React from 'react';

import { BookList, StyledLink, Container, Form, SubmitButton  } from './styles';

import { FaPlus } from "react-icons/fa";

function Main() {
  return (
    <>

<Container >
      <h1>Add Book to the Shelf</h1>
      <Form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Book Name"
        />
        <input
          type="text"
          placeholder="Author"
        />
        <input
          type="text"
          placeholder="URL image"
        />
        <textarea
          type="text"
          placeholder="Notes"
        />
        <SubmitButton disabled  >
          <FaPlus color='#fff' size={22} />

          <span>Add Book</span>
        </SubmitButton>
      </Form>
    </Container>



    <BookList>
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
