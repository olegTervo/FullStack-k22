import Country from "./Country"
import CountryList from "./CountryList"

const SearchResult = ({countries, search}) => {


    return (
        <>
          { 
            countries.length === undefined || countries.length === 0 ? 
            <p>Found no results</p> : countries.length === 1 ?
            <Country country={countries[0]}/> : countries.length <= 10 ?
            <CountryList countries={countries} setSearchTerm={search}/> : <p>Too many matches, specify another filter</p>
          }
        </>
    )
}

export default SearchResult