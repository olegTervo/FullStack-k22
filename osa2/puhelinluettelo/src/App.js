import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [searchState, setSearchState] = useState('')

  const createRowCallback = (e) => {
    e.preventDefault()
    if (persons.findIndex(p => p.name === newName) == -1)
      setPersons(persons.concat([{name: newName, number: newPhoneNumber}]))
    else alert(`${newName} is already added to phonebook`)

    console.log(persons)
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