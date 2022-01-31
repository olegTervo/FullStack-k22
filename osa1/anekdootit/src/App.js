import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import Anecdote from './Anecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [top, setTop] = useState(0)
  const [anecdoteList, setAnecdoteList] = useState(anecdotes.map(a => ({text: a, votes: 0})))

  const raiseVotes = () => {
    let copy = {...anecdoteList}
    copy[selected].votes++

    if(copy[selected].votes > copy[top].votes)
      setTop(selected)
      
    setAnecdoteList(copy)
  }

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      <Anecdote text={anecdoteList[selected].text} votes={anecdoteList[selected].votes} />
      <Button text={'vote'} handleClick={raiseVotes} />
      <Button text={'next anecdote'} handleClick={() => {setSelected(Math.floor(Math.random()*anecdotes.length))}} />

      <Header text={'Anecdote with most votes'} />
      <Anecdote text={anecdoteList[top].text} votes={anecdoteList[top].votes} />
    </div>
  )
}

export default App