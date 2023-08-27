import axios from 'axios'
const countriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getAllCountries = () => {
  return axios
    .get(`${countriesUrl}/all`)
    .then(response => response.data)
}

const getCountryInfo = (country) => {
  return axios
    .get(`${countriesUrl}/name/${country}`)
    .then(response => response.data)
}

const getWeatherInfo = (lat, lon) => {
  return axios
    .get(`${weatherUrl}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_SOME_KEY}&units=${'metric'}`)
    .then(response => response.data)
}

export default { getAllCountries, getCountryInfo, getWeatherInfo }