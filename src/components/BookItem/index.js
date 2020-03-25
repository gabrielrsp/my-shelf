import React from 'react';
import { StyledLink, EditButton, DetailsButton, DeleteButton } from './styles'

export default function BookItem({book, onEdit, onDelete }) {
  return (
    <li>
    {
    book.newUrl ?
    <>
      <a href={`/details/${book.newName}`}>
        <img
          src={book.newUrl} alt="book"
          onError={
            (e)=>{e.target.onerror = null;
            e.target.src="https://static.thenounproject.com/png/111370-200.png"
            e.target.style = 'margin-top: 73px; margin-bottom: 40px; marginLeft: 25px; width: 150px; height: 152px '
            }}
        />
      </a>
        <strong>{book.newName}</strong>
        </>
      :
      <>
      <a href={`/details/${book.newName}`}>
        <img style={ { marginTop:'75px', marginBottom:'40px', marginLeft:'25px', width: '150px',height: '150px'}}
              alt="book"
              src='https://static.thenounproject.com/png/111370-200.png'
              />
      </a>
      <strong>{book.newName}</strong>
      </>
    }
      <div>
        <DetailsButton type="button">
          <StyledLink to={`/details/${book.newName}`}>
            <span>Details</span>
          </StyledLink>
        </DetailsButton>
        <EditButton type="button" onClick={onEdit}>
          <span>Edit</span>
        </EditButton>
        <DeleteButton type="button" onClick={onDelete}>
          <span>Delete</span>
        </DeleteButton>
      </div>
  </li>
  );
}
