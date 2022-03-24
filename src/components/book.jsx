import { useContext, useEffect } from 'react'
import Context from '../Context'
import ajax from '../ajax'

const Books = () => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/books').then(books => {
      dispatch({ type: 'setBooks', books })
    })
  }, [])
  return (
    <div>
      <h1>书籍</h1>
      <ol>{state.books ? state.books.map(book => <li key={book.id}>{book.name}</li>) : '加载中...'}</ol>
    </div>
  )
}

export default Books
