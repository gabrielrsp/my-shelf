import React, { useState, useEffect } from 'react';
import { Container, InputContainer, FileList, SubmitButton } from './styles';
import { FaTrash } from "react-icons/fa";
import api from '../../services/api';

function Details({ match }) {

  const [book, setBook] = useState([]);
  const [quoteList, setQuoteList] = useState([]);
  const [file, setFile] = useState({})
  const [uploadClick, setUploadClick] = useState(1);

  const { id } = match.params

  useEffect(() => {
    async function loadBook() {
      const response = await api.get(`books/${id}`)
      setBook(response.data)
      setQuoteList(response.data.Quotes)
    }

    loadBook();

  }, [id, file, uploadClick])

  const handleUpload = e => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post(`files/books/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { quotes } = response.data
      setQuoteList([...quotes])
      setUploadClick(file)
    } catch {
      console.log('there was a problem with the server');
    }
  }

  return (
    <>
      <Container >
        <div >
          {
            book.url_image ?
            <div>
              <img src={book.url_image} alt="book"
                onError={
                  (e) => {
                    e.target.onerror = null;
                    e.target.src = "https://static.thenounproject.com/png/111370-200.png"
                    e.target.style = 'marginTop: auto; marginLeft: 25px; width: 150px; height: 153px '
                    e.target.name = 'book.id'
                  }
                }
                />
                </div>
              :
              <>
                <img style={{ marginTop: 'auto', marginLeft: '25px', width: '150px', height: '150px' }}
                  alt="book"
                  src='https://static.thenounproject.com/png/111370-200.png'
                />
              </>
          }
          <div>
            <h2> <span>Name:</span> {book.name}</h2>
            <h2> <span>Author:</span> {book.author} </h2>
            <h2> <span>Notes:</span></h2>
           <p>{book.notes}</p>

          </div>
        </div>
      </Container>

      <InputContainer>
        <h2>Insert Kindle Files</h2>
        <div>
        <input
          type="file"
          onChange={handleUpload}
        />
        <SubmitButton onClick={handleSubmit}> Upload</SubmitButton>
        </div>
      </InputContainer>

      <FileList>
        {
          quoteList ?
          quoteList.map(quote => (
              <li key={quote.id} >{quote.quote}</li>
          ))
          :
          <></>
        }
      </FileList>

    </>

  );
}

export default Details;
