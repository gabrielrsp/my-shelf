import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BookList, Container, Form, SubmitButton, UpdateButton } from './styles';
import { FaPlus, FaEdit, FaTimes } from "react-icons/fa";
import BookItem from '../../components/BookItem'

function Main() {

  const [book, setBook] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const [newNotes, setNewNotes] = useState('');
  const [id, setId] = useState('');

  const [box, setBox] = useState();

  const handleAdd = useCallback(e => {

    if (newName) {

      e.preventDefault()

      let id = Math.floor(Math.random() * 700);

      //validation for duplicate ID' and set limit for book amount
      for (let i = 0; i < book.length; i++) {
        if (id === book[i].id) {
          console.log('igual a' + id + '!')
          if (book.length >= 4) {
            window.alert("You reached the limit of books!")
            return 0
          } else
            id = Math.floor(Math.random() * 700);
          i = 0;
        }
      }

      setBook([...book,
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
  }, [
    book,
    newName,
    newAuthor,
    newUrl,
    newNotes,
  ]);

  const toggleBox = useCallback(() => {
    setBox(!box)
  }, [box]);

  const handleClean = useCallback(e => {
    e.preventDefault()

    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');
    setId('')
    toggleBox()
  }, [toggleBox]
  );

  const handleUpdate = useCallback(e => {

    e.preventDefault()
    const data = [...book];
    const index = data.findIndex(obj => data.indexOf(obj) === book.indexOf(obj));

    let secData = { ...data[index] }

    secData.newName = newName
    secData.newAuthor = newAuthor
    secData.newUrl = newUrl
    secData.newNotes = newNotes
    secData.id = id

    let newObj = { ...secData }
    let arr = []

    data.forEach((b) => arr.push(b))

    const currentObj = arr.find(obj => obj.newName === newObj.newName);
    const destObj = { ...currentObj }

    destObj.newName = newName
    destObj.newAuthor = newAuthor
    destObj.newUrl = newUrl
    destObj.newNotes = newNotes
    destObj.id = Math.floor(Math.random() * 700);

    setBook([...data.filter(b => b.id !== secData.id),
      destObj
    ]);

    handleClean(e)

  }, [book,
    newName,
    newAuthor,
    newUrl,
    newNotes,
    handleClean,
    id
  ]);

    const handleEdit = useCallback( bookItem => {

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

  }, [] );

  function handleDelete(bookItem) {

    const r = window.confirm("Are you sure you want to dele this book?")

    if (r) {
      setBook(book.filter(b => b !== bookItem))
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
    if (data) {
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
        <Form onSubmit={() => { }}>
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
                <UpdateButton onClick={handleUpdate}  >
                  <FaEdit color='#fff' size={22} />
                  <span>Save Changes</span>
                </UpdateButton>

                <UpdateButton onClick={handleClean}  >
                  <FaTimes color='#fff' size={22} />
                  <span>Cancel</span>
                </UpdateButton>
              </div>
              :
              <></>
          }

        </Form>
        {
          bookSize > 1 || bookSize === 0 ?
            <h3>You have {bookSize} books</h3>
            :
            <h3>You have {bookSize} book</h3>
        }

      </Container>

      <BookList>
        {
          book.map(book => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={() => { handleDelete(book) }}
              onEdit={() => { handleEdit(book) }}
            />
          ))
        }
      </BookList>
    </>
  );
}

export default Main;
