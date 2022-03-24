// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setMovies: (state, action) => {
    return { ...state, movies: action.movies }
  },
  deleteMovie: () => {
    console.log('删除电影')
  }
}
