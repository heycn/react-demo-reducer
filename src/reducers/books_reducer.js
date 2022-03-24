// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setBooks: (state, action) => {
    return { ...state, books: action.books }
  },
  deleteBook: () => {
    console.log('删除书籍')
  }
}
