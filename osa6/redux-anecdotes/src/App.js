import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { addAVote, newAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addAVote(id))
  }

  const createNewAnecdote = (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''

    console.log('new', anecdote)
    dispatch(newAnecdote(anecdote))
  }

  return (
    <div>
      <AnecdoteList anecdotes={anecdotes} vote={vote} />
      <AnecdoteForm createNewAnecdote={createNewAnecdote}/>
    </div>
  )
}

export default App