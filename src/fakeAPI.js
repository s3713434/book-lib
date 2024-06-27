const books = [
  {
    id: 1,
    title: 'Book 1',
    description: 'Description for Book 1',
    author: 'Auther',
  },
  {
    id: 2,
    title: 'Book 2',
    description: 'Description for Book 2',
    author: 'Boom',
  },
  {
    id: 3,
    title: 'Book 3',
    description: 'Description for Book 3',
    author: 'Coral',
  },
]

const FAKE_DELAY = 2000

const fakeAPI = {
  fetchBooks: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books)
      }, FAKE_DELAY)
    })
  },
  addBook: (book) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        book.id = Math.max(...books.map((book) => book.id)) + 1
        books.push(book)
        resolve(book)
      }, FAKE_DELAY)
    })
  },
}

export default fakeAPI
