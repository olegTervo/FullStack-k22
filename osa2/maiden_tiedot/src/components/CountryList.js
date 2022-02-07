const CountryList = ({countries, setSearchTerm}) => {
    return (
        <>
          {
            countries.map(c => (
                <> 
                  <p key={c.name.official}> {c.name.common}   
                    <button style={{marginLeft:"10px"}} onClick={() => setSearchTerm(c.name.common)}>show</button> 
                  </p>
                </>
                ))
          }
        </>
    );
}

export default CountryList