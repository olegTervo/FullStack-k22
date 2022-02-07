import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SearchResult from './components/SearchResult'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = searchState.length > 0
    ? countries.filter(p => p.name.common.toLowerCase().includes(searchState.toLowerCase()))
    : countries

  const search = (e) => setSearchState(e.target.value)

  return (
    <div>
      <Search searchState={searchState} onChange={search} />
      <SearchResult countries={countriesToShow} search={setSearchState}/>
    </div>
  )

}

export default App