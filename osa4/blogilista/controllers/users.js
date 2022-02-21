
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
})
  
usersRouter.post('/', async (request, response, next) => {
  try {
    const user = new User(request.body)
    const result = await user.save()
    response.status(201).json(result)
  } 
  catch(exception) {
    next(exception)
  }
})

module.exports = usersRouter