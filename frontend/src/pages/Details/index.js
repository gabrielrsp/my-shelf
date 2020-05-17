import React, { useState, useEffect } from 'react';
import { Container, InputContainer, FileList, SubmitButton, DeleteButton, KindleHeader, MainBody } from './styles';
import { FaTrash, FaFileUpload } from "react-icons/fa";
import { toast } from 'react-toastify';
import api from '../../services/api';

function Details({ match }) {

  const [book, setBook] = useState([]);
  const [quoteList, setQuoteList] = useState([]);
  const [file, setFile] = useState({})

  const { id } = match.params

  useEffect(() => {
    async function loadBook() {
      const response = await api.get(`books/${id}`)
      setBook(response.data)
      setQuoteList(response.data.Quotes)

    }

    loadBook();

  }, [id, file, quoteList.length])

  const handleUpload = e => {
    setFile(e.target.files[0])
  }

  async function handleDeleteAll() {

    const confirm = window.confirm("Are you sure you want to delete all notes?")

    if (confirm) {

      await api.delete(`books/${id}/quotes`)
      setQuoteList([]);

      toast.success('All Kindle notes removed');

    }

  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (!file.name) {
      toast.error('Failed to upload file');
    }

    if (quoteList.length) {
      toast.error('You already have a kindle note uploaded', { autoClose: 5000 })
      return
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post(`files/books/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const { quotes } = response.data;

    setQuoteList([...quotes]);
    //setUploadClick(file);

    toast.success('File uploaded successfully!');

  }

  return (
    <MainBody>
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
              <div style={{ marginTop: '10px' }}>
                <h2> <span>Name:</span> {book.name}</h2>
                <h2> <span>Author:</span> {book.author} </h2>
                <h2> <span>Notes:</span></h2>
                <p>{book.notes}</p>

              </div>
            </div>
          </Container>

          <InputContainer>
            <h2>Insert Kindle Notes</h2>
            <h4>If you have this book on your Kindle, and have its notes file (.xlsx, .csv, .xls, .ods file extensions) you can upload it here

        </h4>
            <div>
              <input
                type="file"
                accept=".xlsx,.csv,.xls,.ods"
                onChange={handleUpload}
                required
              />
              <SubmitButton onClick={handleSubmit}>
                <FaFileUpload color='#fff' size={22} />
                <span>Upload</span>
              </SubmitButton>
            </div>
          </InputContainer>


          {
            quoteList.length ?
              <>
                <KindleHeader>
                  <h1>Kindle Notes</h1>
                </KindleHeader>
                <DeleteButton onClick={handleDeleteAll}>
                  <FaTrash color='#b30059' size={22} />
                  <span>Delete All</span>
                </DeleteButton>
              </>
              : <></>

          }
          <FileList>
            {
              quoteList.map(
                quote => (
                    <li key={quote.id} >{quote.quote}</li>
                ))
            }
          </FileList>
      </>
    </MainBody>

  );
}

export default Details;
