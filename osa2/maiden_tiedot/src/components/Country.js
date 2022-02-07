import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
    const [weather, setWeather] = useState({}) 
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
          .then(response => {
            setWeather(response.data)
          })
      }, [])

    return (
        <>
          <h2>{country.name.official}</h2>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <br />
          <p><b>languages:</b></p>
          <ul>
            {
              Object.values(country.languages).map(val => <li key={val}>{val.toString()}</li>)
            }
          </ul>
          <img src={country.flags.png} />

          {
              weather.weather !== undefined ?
              <>
                <p>temperature {(weather.main.temp-273.15).toFixed(2)} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <p>wind {weather.wind.speed} m/s</p>
              </> :
              <p>No weather avaliable for this country's capital</p>
          }
        </>
    );
}

export default Country