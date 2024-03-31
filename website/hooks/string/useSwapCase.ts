import { useState } from 'react'

/**
 * Custom hook to convert a string to swap case
 * @returns {Object} - Object containing the swap case string and the conversion function
 */
const useSwapCase = () => {
  const [swapCase, setSwapCase] = useState('')

  /**
   * Function to convert a string to swap case
   * @param {string} str - Input string
   */
  const convertToSwapCase = (str: string) => {
    setSwapCase(
      str
        .split('')
        .map((char) =>
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase(),
        )
        .join(''),
    )
  }

  return { swapCase, convertToSwapCase }
}

export default useSwapCase
