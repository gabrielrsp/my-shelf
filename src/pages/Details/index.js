import React, { useState, useEffect } from 'react';
import { Container  } from '../Main/styles';


function Details({ match }) {

  const [book, setBook] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem('book-list');
    if(data){

      setBook( JSON.parse(data)

      );

    }
  }, []);


  const bookMatch = book.find( ({ newName }) => newName === match.params.name );

  const bookInfo = {...bookMatch}


  return (
    <>
      <Container >
        <h1>{match.params.name}</h1>
        <img src={bookInfo.newUrl} alt="book"/>
        <h2>{bookInfo.newAuthor}</h2>
        <h4>{bookInfo.newNotes}</h4>

      </Container>


    </>
  );
}

export default Details;
