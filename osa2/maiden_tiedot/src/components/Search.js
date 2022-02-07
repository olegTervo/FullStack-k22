const Search = ({searchState, onChange}) => {
    return (
        <>
          <p>find countries </p>
          <input onChange={onChange} value={searchState}/>
        </>
    );
}

export default Search