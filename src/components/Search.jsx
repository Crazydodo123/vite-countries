import { useEffect } from 'react'
import { useField } from '../hooks'

const Search = ({ setName }) => {

  const nameInput = useField('text')
  
  useEffect(() => {
    setName(nameInput.value)
  }, [nameInput.value])
  

  return (
    <form>
      <label htmlFor='country'>find countries </label>
      <input {...nameInput} />
    </form>
  )
}

export default Search