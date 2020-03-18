import React, { useState, useEffect } from 'react';
import { Container, CustomButton  } from './styles';

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
          {
            bookInfo.newUrl ?
              <img src={bookInfo.newUrl} alt="book"
              onError={
                (e)=>{e.target.onerror = null;
                e.target.src="https://static.thenounproject.com/png/111370-200.png"
                e.target.style = 'marginTop: auto; marginLeft: 25px; width: 150px; height: 153px '
                e.target.name = 'book.newName'
                }
              }
               />
                :
                <>
                  <img  style={ { marginTop:'auto', marginLeft:'25px', width: '150px',height: '150px'}}
                        alt="book"
                        src='https://static.thenounproject.com/png/111370-200.png'
                  />
                </>
          }
          <div>
            <h2> <span>Name:</span> {bookInfo.newName}</h2>
              <h2>
                <span>Author:</span> {bookInfo.newAuthor}
              </h2>
              <CustomButton>Edit</CustomButton>
          </div>
        </div>
        <h2>Notes</h2>
        <p>{bookInfo.newNotes}</p>
      </Container>
    </>
  );
}

export default Details;
