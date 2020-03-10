import React from 'react';

import { BookList, AddButton, StyledLink } from './styles';

import { FaPlus } from "react-icons/fa";

function Main() {
  return (
    <>

    <AddButton >
      <StyledLink to="/add"
      style={{ textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: '#fff'
               }}>
        <FaPlus color='#fff' size={22} />
          <span>Add Book</span>
      </StyledLink>
    </AddButton>

    <BookList>
      <li>
        <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
        alt="book"/>
        <strong>a real good chinese book</strong>
        <button type="button">
        <StyledLink to="/details" >
        <span>Details</span>
        </StyledLink>
        </button>
      </li>
      <li>
        <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
        alt="book"/>
        <strong>a real good chinese book</strong>
        <button type="button">
        <StyledLink to="/details" >
        <span>Details</span>
        </StyledLink>
        </button>
      </li>
      <li>
        <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
        alt="book"/>
        <strong>a real good chinese book</strong>
        <button type="button">
        <StyledLink to="/details" >
        <span>Details</span>
        </StyledLink>
        </button>
      </li>
      <li>
        <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
        alt="book"/>
        <strong>a real good chinese book</strong>
        <button type="button">
        <StyledLink to="/details" >
        <span>Details</span>
        </StyledLink>
        </button>
      </li>
      <li>
        <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
        alt="book"/>
        <strong>a real good chinese book</strong>
        <button type="button">
        <StyledLink to="/details" >
        <span>Details</span>
        </StyledLink>
        </button>
      </li>
      <li>
        <img src="https://m.media-amazon.com/images/I/81kB6lKq1aL._AC_UY218_ML3_.jpg"
        alt="book"/>
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
