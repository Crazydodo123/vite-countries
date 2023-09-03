import { useState, useEffect } from 'react'

import InfoServices from './services/countries'

import Search from './components/Search'
import Countries from './components/Countries'
import Info from './components/Info'
import { useCountry } from './hooks'

const App = () => {
  const [name, setName] = useState('')
  const [countriesNames, setCountriesNames] = useState([])

  const country = useCountry(name, countriesNames)


  
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
      <Search setName={setName} />

      {/* <Countries
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
      /> */}
    </>
  )
}

export default App;
