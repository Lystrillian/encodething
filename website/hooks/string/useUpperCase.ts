import { useState } from 'react'

// Custom hook to convert a string to uppercase
const useUpperCase = () => {
  const [upperCase, setUpperCase] = useState('')

  // Function to convert the input string to uppercase and update the state
  const convertToUpperCase = (str: string) => {
    setUpperCase(str.toUpperCase())
  }

  return { upperCase, convertToUpperCase }
}

export default useUpperCase
