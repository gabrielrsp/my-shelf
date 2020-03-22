import React, { useState, useEffect, useMemo } from 'react';
import { BookList, StyledLink, Container, Form, SubmitButton, EditButton, DetailsButton, DeleteButton, UpdateButton  } from './styles';
import { FaPlus, FaEdit, FaTimes  } from "react-icons/fa";

function Main() {

  const [book, setBook] = useState([]);

  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [id, setId] = useState('');

  const[box, setBox] = useState();

  function handleAdd (e) {

    if (newName){

    e.preventDefault()

    //create validation for duplicate ID's
    const id = Math.floor(Math.random() * 700);

    //const IdValid = book.forEach( b => { if(b.id === id)return false } )

    setBook([ ...book,
      {
      newName,
      newAuthor,
      newUrl,
      newNotes,
      id
    }]);

    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');
    setId('')

  } else
    alert('Book name is Required!');
    e.preventDefault()
  };

    function handleUpdate(e){

      e.preventDefault()
      const data = [...book];
      const index = data.findIndex(obj => data.indexOf(obj) === book.indexOf(obj));

      let secData = {...data[index]}

      secData.newName =  newName
      secData.newAuthor = newAuthor
      secData.newUrl = newUrl
      secData.newNotes = newNotes
      secData.id = id

      let newObj = {...secData}
      let arr = []

      data.forEach((b) => arr.push(b))

      const currentObj = arr.find(obj => obj.newName === newObj.newName);
      const destObj = {...currentObj}

      destObj.newName =  newName
      destObj.newAuthor = newAuthor
      destObj.newUrl = newUrl
      destObj.newNotes = newNotes
      destObj.id = Math.floor(Math.random() * 700);

      setBook([ ...data.filter( b => b.id !== secData.id ),
        destObj
     ]);

      handleClean(e)
    }

    function handleEdit(bookItem){

      setBox(true)
      setNewName(bookItem.newName);
      setNewAuthor(bookItem.newAuthor);
      setNewUrl(bookItem.newUrl);
      setNewNotes(bookItem.newNotes);
      setId(bookItem.id);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

    function handleClean(e){
      e.preventDefault()

      setNewName('');
      setNewAuthor('');
      setNewUrl('');
      setNewNotes('');
      setId('')
      toggleBox()
    }

    function toggleBox() {
      setBox(!box)
    }

    function handleDelete(bookItem) {

      const r = window.confirm("Are you sure you want to dele this book?")

      if(r){
        setBook( book.filter(b => b !== bookItem))
        setNewName('');
        setNewAuthor('');
        setNewUrl('');
        setNewNotes('');
        toggleBox()
        setBox(false)
      }
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

    const bookSize = useMemo(() => book.length, [book])


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
                  <EditButton onClick={handleUpdate}  >
                    <FaEdit color='#fff' size={22} />
                    <span>Save Changes</span>
                  </EditButton>

                    <EditButton onClick={handleClean}  >
                      <FaTimes color='#fff' size={22} />
                      <span>Cancel</span>
                    </EditButton>
                </div>
                :
                <></>
          }

          </Form>
          {
            bookSize >1 || bookSize === 0 ?
            <h3>You have {bookSize} books</h3>
            :
            <h3>You have {bookSize} book</h3>
          }

      </Container>

      <BookList>
          {
            book.map( book => (
              <li key={book} >
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
