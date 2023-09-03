import { useState, useEffect } from "react"
import InfoServices from '../services/countries'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useCountry = (search, countriesNames) => {
  const [country, setCountry] = useState(null)
  const [countryName, setCountryName] = useState(null)
  const [fullCountryInfo, setFullCountryInfo] = useState(null)

  useEffect(() => {
    const possibilities = countriesNames.filter(countryNames => (
      countryNames.some(countryName => (
        countryName.toLowerCase().includes(search.toLowerCase())
      ))
    ))
    console.log(possibilities.map(possibility => possibility[0]))
    if (possibilities.length === 1) {
      setCountryName(possibilities[0][0])
    } else {
      setCountryName(null)
    }
  }, [search])

  const getAllInfo = async () => {
    const countryInfo = await InfoServices.getCountryInfo(countryName)
    const [lat, lng] = countryInfo.capitalInfo.latlng
    const weatherInfo = await InfoServices.getWeatherInfo(lat, lng)
    setFullCountryInfo({
      country: countryInfo,
      weather: weatherInfo,
    })
  }

  useEffect(() => {
    if (countryName) {
      getAllInfo()
      setCountry({
        
      })
    } else {
      setCountry({
        not_found: true
      })
    }
  }, [countryName])
  


  return null
}

