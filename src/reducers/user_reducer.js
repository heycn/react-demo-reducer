// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setUser: (state, action) => {
    return { ...state, user: action.user }
  },
  removeUser: () => {
    console.log('删除用户')
  }
}
