import { useEffect } from 'react'
import InfoServices from '../services/countries'

const Info = ({
  countries,
  countryData,
  setCountryData,
  weatherData,
  setWeatherData
}) => {
  
  useEffect(() => {
    if (countries.length !== 1) {
      setCountryData(null)
    } else if (!countryData) {
      const country = countries[0][0]
  
      InfoServices
        .getCountryInfo(country)
        .then(response => setCountryData(response))
    }
  }, [countries])
  
  useEffect(() => {
    if (countryData) {
      InfoServices
        .getWeatherInfo(countryData.capitalInfo.latlng[0], countryData.capitalInfo.latlng[1])
        .then(response => setWeatherData(response))
    }
  }, [countryData])
  
  if (!countryData || !weatherData || countries.length !== 1) return null
  if (countryData.name.common !== countries[0][0]) return null
  
  return (
    <div>
      <h1>{countryData.name.common}</h1>
      
      <p>{`capital ${countryData.capital}`}</p>
      <p>{`area ${countryData.area}`}</p>
      
      
      <h3>languages:</h3>
      <ul>
        {(Object.entries(countryData.languages).map((language) => (
          <li key={language[0]}>{language[1]}</li>
        )))}
      </ul>
      <img src={countryData.flags.svg} height={250} />
      
      
      <h2>Weather in {countryData.capital}</h2>
      <p>temperature {weatherData.main.temp} Celsius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} width={125}/>
      <p>wind {weatherData.wind.speed} m/s</p>
    </div>
  )
}

export default Info