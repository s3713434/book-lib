import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import AddBook from './component/AddBook'
import BookList from './component/BookList'

function App() {
  return (
    <Provider store={store}>
      <h1>Book Library</h1>
      <AddBook />
      <BookList />
    </Provider>
  )
}

export default App
