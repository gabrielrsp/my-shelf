import React, { useState, useEffect } from 'react';
import { BookList, StyledLink, Container, Form, SubmitButton, EditButton, DetailsButton, DeleteButton, UpdateButton  } from './styles';
import { FaPlus, FaEdit, FaTimes  } from "react-icons/fa";


function Main() {

  const [book, setBook] = useState([]);

  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');

  const[box, setBox] = useState();

  function handleAdd (e) {

    if (newName){

    e.preventDefault()

    setBook([ ...book,
      {
      newName,
      newAuthor,
      newUrl,
      newNotes
    }]);

    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');
  } else
    alert('Book name is Required!');
    e.preventDefault()

  };

    function handleUpdate(bookItem){}

    function handleClean(e){
      e.preventDefault()
      setNewName('');
      setNewAuthor('');
      setNewUrl('');
      setNewNotes('');
      toggleBox()
    }


    function toggleBox() {
      setBox(!box)
    }

    function handleEdit(bookItem){

      setBox(true)

      setNewName(bookItem.newName);
      setNewAuthor(bookItem.newAuthor);
      setNewUrl(bookItem.newUrl);
      setNewNotes(bookItem.newNotes);

    }

    function handleDelete(bookItem) {
      setBook( book.filter(b => b !== bookItem))
    }

    useEffect(() => {
      const data = localStorage.getItem('book-list');
      if(data){
        setBook(JSON.parse(data));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('book-list', JSON.stringify(book));
    }, [book]);

  return (
    <>
      <Container >
        <h1>Add Book to the Shelf</h1>
          <Form onSubmit={() => {}}>
            <input
              type="text"
              placeholder="Book Name"
              value={newName}
              name="name"

              onChange={e => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              value={newAuthor}
              name="author"
              onChange={e => setNewAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL image"
              value={newUrl}
              name="url"
              onChange={e => setNewUrl(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Notes"
              value={newNotes}
              name="notes"
              onChange={e => setNewNotes(e.target.value)}
            />
            {
            !box ?
              <SubmitButton onClick={handleAdd}  >
              <FaPlus color='#fff' size={22} />
              <span>Add Book</span>
            </SubmitButton>
            : <></>
            }

          {
            box ?
                <div>
                  <EditButton  onClick={handleUpdate}  >
                    <FaEdit color='#fff' size={22} />
                    <span>Save Changes</span>
                  </EditButton>
                    <EditButton  onClick={handleClean}  >
                      <FaTimes color='#fff' size={22} />
                      <span>Cancel</span>
                    </EditButton>
                </div>
                :
                <></>
          }

          </Form>
      </Container>

      <BookList>
          {
            book.map( book => (
              <li key={book} index={book}>
                {
                book.newUrl ?
                  <a href={`/details/${book.newName}`}>
                    <img
                      src={book.newUrl} alt="book"
                      onError={
                        (e)=>{e.target.onerror = null;
                        e.target.src="https://static.thenounproject.com/png/111370-200.png"
                        e.target.style = 'marginTop: auto; marginLeft: 25px; width: 150px; height: 152px '
                        }}
                    />
                  </a>
                  :
                  <>
                    <img style={ { marginTop:'auto', marginLeft:'25px', width: '150px',height: '150px'}}
                          alt="book"
                          src='https://static.thenounproject.com/png/111370-200.png'
                    />
                    <strong>{book.newName}</strong>
                  </>
                }
                  <div>
                    <DetailsButton type="button">
                      <StyledLink to={`/details/${book.newName}`}>
                        <span>Details</span>
                      </StyledLink>
                    </DetailsButton>
                    <UpdateButton type="button" onClick={()=> handleEdit(book)}>
                      <span>Update</span>
                    </UpdateButton>
                    <DeleteButton type="button" onClick={()=> handleDelete(book) }>
                      <span>Delete</span>
                    </DeleteButton>
                  </div>
              </li>
            ))
          }
      </BookList>
    </>
  );
}

export default Main;
