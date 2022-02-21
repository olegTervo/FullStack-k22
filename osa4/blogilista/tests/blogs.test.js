const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const {initialBlogs} = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})

    await Blog.insertMany(initialBlogs)
})

test('notes are returned as json', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all notes are returned', async () => {
    const response = await api.get('/api/blogs')
    
    expect(response.body).toHaveLength(initialBlogs.length)
  })

test('id defined', async () => {
    const response = await api.get('/api/blogs')
    
    response.body.forEach(blog => expect(blog.id).toBeDefined())
  })

test('can create new blog', async () => {
    const newBlog = {
        title: 'Test',
        author: 'new',
        url: 'www',
        likes: 0
      }
    
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/blogs')
    
    expect(response.body).toHaveLength(initialBlogs.length+1)
  })

test('default likes is 0', async () => {
    const newBlog = {
        title: 'Test',
        author: 'new',
        url: 'www'
      }
    
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/blogs')
    
    expect(response.body).toHaveLength(initialBlogs.length+1)

    const savedBlog = response.body.find(blog => blog.author === newBlog.author)
    expect(savedBlog.likes).toBe(0)
  })

test('error on empty title', async () => {
  const newBlog1 = {
    title: 'Test',
    author: 'new'
  }
      
  await api
    .post('/api/blogs')
    .send(newBlog1)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('error on empty url', async () => {
  const newBlog1 = {
    title: 'Test',
    author: 'new'
  }
        
  await api
    .post('/api/blogs')
    .send(newBlog1)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('test delete', async () => {
    const response = await api.get('/api/blogs')

    await api
      .delete(`/api/blogs/${response.body.find(blog => blog.id).id}`)
      .expect(204)

    const response_after_delete = await api.get('/api/blogs')
    expect(response_after_delete.body).toHaveLength(initialBlogs.length-1)
  })

test('test change', async () => {
    const response = await api.get('/api/blogs')
    let first = response.body.find(blog => blog.id);
    let changed = {
        title: 'FindMe',
        author: first.author,
        url: first.url,
        likes: 1010
    }

    await api
      .put(`/api/blogs/${first.id}`)
      .send(changed)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const response_after_delete = await api.get('/api/blogs')


    expect(response_after_delete.body).toHaveLength(initialBlogs.length)

    const savedBlog = response_after_delete.body.find(blog => blog.title === changed.title)
    expect(savedBlog.likes).toBe(1010)
  })

afterAll(() => {
  mongoose.connection.close()
})