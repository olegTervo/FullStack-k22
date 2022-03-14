import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotesService'

const AnecdoteForm = (props) => {
  const createNewAnecdote = async (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log(anecdote)
    const createdAnecdote = await anecdotesService.createNew(anecdote)

    props.newAnecdote(createdAnecdote)
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

const mapDispatchToProps = {
  newAnecdote,
}

const ConnectedForm = connect(
  null
  , mapDispatchToProps
)(AnecdoteForm)
export default ConnectedForm