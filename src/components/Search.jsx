const Search = ({country, setCountry}) => {
  
  
  const handleInputChange = (event) => {
    setCountry(event.target.value)
  }
  
  return (
    <form>
      <label htmlFor='country'>find countries </label>
      <input
        type='text'
        id='country'
        value={country}
        onChange={handleInputChange}
      ></input>
    </form>
  )
}

export default Search