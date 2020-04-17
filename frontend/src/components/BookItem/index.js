import React from 'react';
import { StyledLink, EditButton, DetailsButton, DeleteButton } from './styles'

export default function BookItem({book, onEdit, onDelete }) {
  return (
    <li>
    {
    book.newUrl ?
    <>
      <StyledLink to={`/details/${book.id}`}>
          <img
            src={Image.url} alt="book"
            onError={
              (e)=>{e.target.onerror = null;
                e.target.src="https://static.thenounproject.com/png/111370-200.png"
                e.target.style = 'margin-top: 73px; margin-bottom: 40px; marginLeft: 25px; width: 150px; height: 152px '
              }}
          />
      </StyledLink>
        <strong>{book.name}</strong>
        </>
      :
      <>
      <StyledLink to={`/details/${book.id}`}>
          <img style={ { marginTop:'75px', marginBottom:'40px', marginLeft:'25px', width: '150px',height: '150px'}}
                alt="book"
                src='https://static.thenounproject.com/png/111370-200.png'
                />
      </StyledLink>
      <strong>{book.name}</strong>
      </>
    }
      <div>
        <DetailsButton type="button">
          <StyledLink to={`/details/${book.id}`}>
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
