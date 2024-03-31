import { useState } from 'react'

/**
 * Custom hook to remove duplicate words from a given text
 * @returns {{ sortedText: string, sortText: (str: string) => void }} Object containing the sorted text and the function to sort the text
 */
const useLineUnique = () => {
  const [sortedText, setSortedText] = useState('')

  /**
   * Sorts the input text by removing duplicate words
   * @param {string} str - Input text to be sorted
   */
  const sortText = (str: string) => {
    const words = str.split(' ')
    const uniqueWords = Array.from(new Set(words))
    setSortedText(uniqueWords.join(' '))
  }

  return { sortedText, sortText }
}

export default useLineUnique
