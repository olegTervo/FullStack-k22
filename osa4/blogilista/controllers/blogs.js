
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})
  
blogsRouter.post('/', async (request, response, next) => {
  try {
    const blog = new Blog(request.body)
    const result = await blog.save()
    response.status(201).json(result)
  } 
  catch(exception) {
    next(exception)
  }
})


blogsRouter.delete('/:id', async (request, response, next) => {
    try { 
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (exception) {
        next(exception)
    }
  })

blogsRouter.put('/:id', async (request, response, next) => {
    try { 
        const body = request.body
    
        const blog = {
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes
        }
    
        const updatedPerson = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        response.json(updatedPerson)
    } catch (exception) {
        next(exception)
    }
  })

module.exports = blogsRouter