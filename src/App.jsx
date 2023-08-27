import { useState, useEffect } from 'react'

import InfoServices from './services/countries'

import Search from './components/Search'
import Countries from './components/Countries'
import Info from './components/Info'

console.log(import.meta.env)

const App = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesNames, setCountriesNames] = useState([])
  const [countryData, setCountryData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  
  useEffect(() => {
    InfoServices
      .getAllCountries()
      .then(response => {
        setCountriesNames(response.map(country => {
          return Object.values(country.name).slice(0, 2)
        }))
      })
  }, [])
  
  return (
    <>
      <Search country={country} setCountry={setCountry} />
      
      <Countries
        countrySearched={country}
        countries={countries}
        setCountries={setCountries} 
        countriesNames={countriesNames}
      />
      
      <Info
        countries={countries}
        countryData={countryData}
        setCountryData={setCountryData}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
    </>
  )
}

export default App;
