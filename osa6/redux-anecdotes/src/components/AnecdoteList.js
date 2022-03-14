import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter.filter)
  console.log("filter", filter)

  const dispatch = useDispatch()

  const voteForAnecdote = (id) => {
    dispatch(vote(id))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.filter(a => filter === "" || a.content.toLowerCase().includes(filter)).map(anecdote =>  
          <div key={anecdote.id}>
          <div>
              {anecdote.content}
          </div>
          <div>
              has {anecdote.votes}
              <button onClick={() => voteForAnecdote(anecdote.id)}>vote</button>
          </div>
          </div>
      )}
    </>
  )
}

export default AnecdoteList