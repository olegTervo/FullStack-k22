import { useState } from 'react'
import Header from './Header'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'} />

      <Button text={'good'} handleClick={() => {setGood(good+1)}} />
      <Button text={'neutral'} handleClick={() => {setNeutral(neutral+1)}} />
      <Button text={'bad'} handleClick={() => {setBad(bad+1)}} />

      <Header text={'statistics'} />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App