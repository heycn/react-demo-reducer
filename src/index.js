import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import Context from './Context'
import User from './components/user'
import Books from './components/book'
import Movies from './components/movie'
import userReducer from './reducers/user_reducer'
import booksReducer from './reducers/books_reducer'
import moviesReducer from './reducers/movies_reducer'

const store = {
  user: null,
  books: null,
  movies: null
}

const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer
}

function reducer(state, action) {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    console.error('wrong type')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, store)

  const api = { state, dispatch }
  return (
    <Context.Provider value={api}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
