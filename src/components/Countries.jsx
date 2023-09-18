const Countries = ({
  search,
  setCountry,
  possibilities,
}) => {

  if (search === "" || possibilities.length === 1) return null
  
  if (possibilities.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  
  const showCountry = (event) => {
    event.preventDefault()
    setCountry([[event.target.id]])
  }
  
  return (
    <ul style={{listStyleType: 'none', padding: 0}}>
      {possibilities.map(country => (
        <li key={country}>
          {country}
          <button onClick={showCountry} id={country}>show</button>
        </li>
      ))}
    </ul>
  )
}


export default Countries