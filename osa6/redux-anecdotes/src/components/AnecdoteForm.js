import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const createNewAnecdote = (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(newAnecdote(anecdote))
  }

  return (
    <>
      <h2>create new</h2>
        <form onSubmit={createNewAnecdote}>
          <div><input name="anecdote"/></div>
          <button type="submit">create</button>
        </form>
    </>
  )
}

export default AnecdoteForm