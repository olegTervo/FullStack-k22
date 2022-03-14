import anecdotesService from '../services/anecdotesService'
import { notifyForATime } from '../reducers/notificationReducer'

const initialState = []

export const addAVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const newAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: { anecdote }
  }
}

export const setAnecdotes = (anecdotes) => {
  return {
    type: 'SET_ANECDOTES',
    data: { anecdotes }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdote = state.find(a => a.id === id)
      const changedAnecdote = {...anecdote, votes: anecdote.votes + 1 }

      return state.map(a => a.id !== id ? a : changedAnecdote).sort((a, b) => b.votes - a.votes)

    case 'NEW_ANECDOTE':
      const anecdoteToAdd = action.data.anecdote
      return state.concat(anecdoteToAdd)

    case 'SET_ANECDOTES':
      return action.data.anecdotes
    default: 
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const createdAnecdote = await anecdotesService.createNew(content)
    dispatch(newAnecdote(createdAnecdote))
  }
}

export const vote = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.increaseVotes(id)

    if(updatedAnecdote === null)
      return

    console.log(updatedAnecdote)
    dispatch(addAVote(id))

    dispatch(notifyForATime("you voted '" + updatedAnecdote.content + "'", 5))
  }
}

export default reducer