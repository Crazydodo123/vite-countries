import { useState, useEffect } from 'react'

import InfoServices from './services/countries'

import Search from './components/Search'
import Countries from './components/Countries'
import Info from './components/Info'
import { useCountry } from './hooks'

const App = () => {
  const [search, setSearch] = useState('')
  const [countriesNames, setCountriesNames] = useState([])
  
  useEffect(() => {
    InfoServices
      .getAllCountries()
      .then(response => {
        setCountriesNames(response.map(country => {
          return Object.values(country.name).slice(0, 2)
        }))
      })
  }, [])
  
  const country = useCountry(search, countriesNames)

  return (
    <>
      <Search setSearch={setSearch} />

      <Countries
        search={search}
        setCountry={country.changeCountry}
        possibilities={country.possibilities}
      />

      <Info
        country={country}
      />
    </>
  )
}

export default App;
