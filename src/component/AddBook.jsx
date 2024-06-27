import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/bookSlice'

export default function AddBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addBook({ title, author }))
    setTitle('')
    setAuthor('')
  }
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Book Title'
          required
        />
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Author'
          required
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
