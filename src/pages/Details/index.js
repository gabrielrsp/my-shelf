import React, { useState, useEffect } from 'react';
import { Container, EditButton  } from './styles';

function Details({ match }) {

  const [book, setBook] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem('book-list');
    if(data){
      setBook( JSON.parse(data));
    }
  }, []);


  const bookMatch = book.find( ({ newName }) => newName === match.params.name );

  const bookInfo = {...bookMatch}

  return (
    <>
      <Container >

        <div >
          <img src={bookInfo.newUrl} alt="book"/>
            <div>
              <h2> <span>Name:</span> {bookInfo.newName}</h2>
              <h2><span>Author:</span> {bookInfo.newAuthor}</h2>
              <EditButton>Edit</EditButton>
            </div>
        </div>
        <h2>Notes</h2>
        <p>{bookInfo.newNotes}</p>
      </Container>
    </>
  );
}

export default Details;
