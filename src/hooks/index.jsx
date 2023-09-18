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
  const [info, setInfo] = useState({is_found: false})
  const [countryName, setCountryName] = useState(null)
  const [possibilities, setPossibilities] = useState([])

  useEffect(() => {
    const possibleNames = countriesNames.filter(countryNames => (
      countryNames.some(countryName => (
        countryName.toLowerCase().includes(search.toLowerCase())
      ))
    ))

    if (possibleNames.length === 1) {
      setCountryName(possibleNames[0][0])
    } else {
      setCountryName(null)
    }

    setPossibilities(possibleNames.map(possibility => possibility[0]))
  }, [search])

  useEffect(() => {
    const getAllInfo = async () => {
      const countryInfo = await InfoServices.getCountryInfo(countryName)
      const [lat, lng] = countryInfo.capitalInfo.latlng
      const weatherInfo = await InfoServices.getWeatherInfo(lat, lng)
      
      return setInfo({
        is_found: true,
        name: countryInfo.name.common,
        capital: countryInfo.capital,
        area: countryInfo.area,
        languages: countryInfo.languages,
        flag: countryInfo.flags.svg,
        temp: weatherInfo.main.temp,
        weatherIcon: weatherInfo.weather[0].icon,
        windSpeed: weatherInfo.wind.speed,
      })
    }

    if (countryName) {
      getAllInfo()
    } else {
      console.log('country reset')
      setInfo({is_found: false})
    }
  }, [countryName])

  const changeCountry = (country) => {
    setCountryName(country)
    setPossibilities([country])
  }


  return {
    ...info,
    possibilities,
    changeCountry
  }
}

