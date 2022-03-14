import { useSelector, useDispatch } from 'react-redux'
import { addAVote } from '../reducers/anecdoteReducer'
import { notify, clear } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter.filter)
  console.log("filter", filter)

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addAVote(id))
    dispatch(notify("you voted '" + anecdotes.find(a => a.id === id).content + "'"))
    setTimeout(() => dispatch(clear()), 5000)
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
          </div>
      )}
    </>
  )
}

export default AnecdoteList