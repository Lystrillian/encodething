import { useState } from 'react'

/**
 * Custom hook to convert a string to lowercase
 * @returns Object with lowercase string and function to convert string to lowercase
 */
const useLowerCase = () => {
  const [lowerCase, setLowerCase] = useState('')

  /**
   * Function to convert a string to lowercase
   * @param {string} str - The input string
   */
  const convertToLowerCase = (str: string) => {
    setLowerCase(str.toLowerCase())
  }

  return { lowerCase, convertToLowerCase }
}

export default useLowerCase
