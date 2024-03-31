import { useState } from 'react'

/**
 * Custom hook to convert text to snake case
 * @returns {{ lowerSnakeCase: string, upperSnakeCase: string, convertToSnakeCase: (text: string, caseType: 'upper' | 'lower') => void }}
 */
const useSnakeCase = () => {
  const [lowerSnakeCase, setLowerSnakeCase] = useState('')
  const [upperSnakeCase, setUpperSnakeCase] = useState('')

  /**
   * Converts text to snake case and updates state based on case type
   * @param {string} text - The text to convert
   * @param {('upper' | 'lower')} caseType - The case type to convert to
   */
  const convertToSnakeCase = (text: string, caseType: 'upper' | 'lower') => {
    const formattedText = text.replace(/ /g, '_')
    if (caseType === 'upper') {
      setUpperSnakeCase(formattedText.toUpperCase())
    } else {
      setLowerSnakeCase(formattedText.toLowerCase())
    }
  }

  return {
    lowerSnakeCase,
    upperSnakeCase,
    convertToSnakeCase,
  }
}

export default useSnakeCase
