import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotesService'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const createNewAnecdote = async (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log(anecdote)
    const createdAnecdote = await anecdotesService.createNew(anecdote)

    dispatch(newAnecdote(createdAnecdote))
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