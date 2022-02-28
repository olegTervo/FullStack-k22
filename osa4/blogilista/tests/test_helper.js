const User = require('../models/user')

const initialBlogs = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
    },
    {
      title: 'Go To Statement Considered Harmful 2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
    },
    {
      title: 'Best',
      author: 'smbd',
      url: 'www',
      likes: 55,
    }
]

const initialUsers = [
  {
    username: 'test',
    name: 'test',
    passwordHash: '',
    blogs: []
  }
]

const getInitialUserId = async () => {
  const users = await User.find({})
  return users[0]._id
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs,
    initialUsers,
    usersInDb,
    getInitialUserId
  }