import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    console.log(response.data)
    return response.data
}

const increaseVotes = async (id) => {
  const responce = await axios.get(`${baseUrl}/${id}`)
  const anecdote = responce.data

  if(responce.status !== 200)
    return null

  anecdote.votes = anecdote.votes + 1
  const updated = await axios.put(`${baseUrl}/${id}`, anecdote)

  return updated.data
}

const anecdotesService = { getAll, createNew, increaseVotes }

export default anecdotesService