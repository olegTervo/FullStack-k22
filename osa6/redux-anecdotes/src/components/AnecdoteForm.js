const AnecdoteForm = ({createNewAnecdote}) => {
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