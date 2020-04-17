import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';

function Details({ match }) {

  const [book, setBook] = useState([]);

  const { id } = match.params

  useEffect(() => {
    async function loadBook() {
      const response = await api.get(`books/${id}`)
      setBook(response.data)


    }
    loadBook();

  }, [id])

  return (
    <>
      <Container >

        <div >
          {
            book.newUrl ?
              <img src={book.newUrl} alt="book"
              onError={
                (e)=>{e.target.onerror = null;
                e.target.src="https://static.thenounproject.com/png/111370-200.png"
                e.target.style = 'marginTop: auto; marginLeft: 25px; width: 150px; height: 153px '
                e.target.name = 'book.id'
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
            <h2> <span>Name:</span> {book.name}</h2>
              <h2>
                <span>Author:</span> {book.author}
              </h2>

          </div>
        </div>
        <h2>Notes</h2>
        <p>{book.notes}</p>
      </Container>
    </>
  );
}

export default Details;
