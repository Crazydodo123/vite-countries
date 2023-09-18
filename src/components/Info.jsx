import { useEffect } from 'react'
import InfoServices from '../services/countries'

const Info = ({
  country
}) => {
  
  if (!country.is_found) return null

  return (
    <div>
      <h1>{country.name}</h1>
      
      <p>{`capital ${country.capital}`}</p>
      <p>{`area ${country.area}`}</p>
      
      
      <h3>languages:</h3>
      <ul>
        {(Object.entries(country.languages).map((language) => (
          <li key={language[0]}>{language[1]}</li>
        )))}
      </ul>
      <img src={country.flag} height={250} />
      
      
      <h2>Weather in {country.capital}</h2>
      <p>temperature {country.temp} Celsius</p>
      <img src={`https://openweathermap.org/img/wn/${country.weatherIcon}@2x.png`} width={125}/>
      <p>wind {country.windSpeed} m/s</p>
    </div>
  )
}

export default Info