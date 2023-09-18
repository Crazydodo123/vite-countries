import { useEffect } from 'react'
import { useField } from '../hooks'

const Search = ({ setSearch }) => {

  const nameInput = useField('text')
  
  useEffect(() => {
    setSearch(nameInput.value)
  }, [nameInput.value])

  return (
    <form>
      <label htmlFor='country'>find countries </label>
      <input {...nameInput} />
    </form>
  )
}

export default Search