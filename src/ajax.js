// 假 ajax
// 一秒钟后，根据 path 返回一个对象，必定成功不会失败
const ajax = path => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === '/user') {
        resolve({ id: 1, name: '无名氏' })
      } else if (path === '/books') {
        resolve([
          { id: 1, name: '飞鸟集' },
          { id: 2, name: '新月集' }
        ])
      } else if (path === '/movies') {
        resolve([
          { id: 1, name: '电影1' },
          { id: 2, name: '电影2' }
        ])
      }
    }, 1000)
  })
}

export default ajax
