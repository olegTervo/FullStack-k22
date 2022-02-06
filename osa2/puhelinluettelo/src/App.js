import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const createRowCallback = (e) => {
    e.preventDefault()

    if (persons.findIndex(p => p.name === newName) == -1)
      setPersons(persons.concat([{name: newName, number: newPhoneNumber}]))
    else 
      alert(`${newName} is already added to phonebook`)
  }

  const personsToShow = searchState.length > 0
    ? persons.filter(p => p.name.toLowerCase().startsWith(searchState.toLowerCase()))
    : persons

  const nameInputCallback = (e) => setNewName(e.target.value)
  const phoneInputCallback = (e) => setNewPhoneNumber(e.target.value)
  const search = (e) => setSearchState(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search}/>
      <h3>Add a new</h3>
      <PersonForm 
        createCallback={createRowCallback} 
        nameInputCallback={nameInputCallback} 
        phoneInputCallback={phoneInputCallback}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )

}

export default App