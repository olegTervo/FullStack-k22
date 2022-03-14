const getId = () => (100000 * Math.random()).toFixed(0)
const initialState = []

const asObject = (anecdote) => {
  return {
    content: anecdote.content,
    id: getId(),
    votes: anecdote.votes
  }
}

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
    data: { anecdotes: anecdotes.map(asObject) }
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
      const newAnecdote = asObject(action.data.anecdote)

      return state.concat(newAnecdote)

    case 'SET_ANECDOTES':
      return action.data.anecdotes
    default: 
      return state
  }
}

export default reducer