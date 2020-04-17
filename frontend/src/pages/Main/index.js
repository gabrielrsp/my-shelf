import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BookList, Container, Form, SubmitButton, UpdateButton } from './styles';
import { FaPlus, FaEdit, FaTimes } from "react-icons/fa";
import BookItem from '../../components/BookItem';
import api from '../../services/api';

export default function Main() {

  const [book, setBook] = useState([])
  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [currentId, setCurrentId] = useState(0);
  const [box, setBox] = useState();
  const [idClick, setIdClick] = useState(1);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('books');
      setBook(response.data)
    }
    loadBooks();

  }, [idClick])

  async function handleAdd(e) {

    if (!newName) {
      alert('Book name is Required!');
    } else

      setIdClick(newName)
    e.preventDefault()

    await api.post('/books', {
      name: newName,
      author: newAuthor,
      notes: newNotes
    })

    setBook([...book, {
      name: newName,
      author: newAuthor,
      notes: newNotes
    }])

    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');

  }

  const toggleBox = useCallback(() => {
    setBox(!box)
  }, [box]);

  async function handleDelete(id) {

    const confirm = window.confirm("Are you sure you want to delete this book?")
    if (confirm) {

      await api.delete(`books/${id}`)
      setBook(book.filter(b => b.id !== id))

      setNewName('');
      setNewAuthor('');
      setNewUrl('');
      setNewNotes('');
      toggleBox()
      setBox(false)

    }
  }

  const handleClean = useCallback(e => {
    e.preventDefault()

    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');
    toggleBox()
  }, [toggleBox]
  );


  async function handleEdit(id) {

    const response = await api.get(`books/${id}`)
    setNewName(response.data.name);
    setNewAuthor(response.data.author);
    setNewNotes(response.data.notes);
    setCurrentId(response.data.id);
    setBox(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  async function handleUpdate(e) {

    if (!newName) {
      e.preventDefault()
      alert('Book name is Required!');
    } else

      setIdClick(newName)
    e.preventDefault()

    await api.put(`books/${currentId}`, {
      name: newName,
      author: newAuthor,
      notes: newNotes
    })

    const response = await api.get('books');
    setBook(response.data)


    setNewName('');
    setNewAuthor('');
    setNewUrl('');
    setNewNotes('');

    handleClean(e)

  }

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
            <>
              <BookItem
                key={book.id}
                book={book}
                onDelete={() => { handleDelete(book.id) }}
                onEdit={() => { handleEdit(book.id) }}
              />
            </>
          ))
        }
      </BookList>
    </>
  );

}

