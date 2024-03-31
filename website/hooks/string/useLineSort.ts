import { useState } from 'react'

/**
 * Custom hook to sort the input text
 * @returns an object with sortedText and sortText function
 */
const useLineSort = () => {
  const [sortedText, setSortedText] = useState('')

  /**
   * Sorts the input text alphabetically
   * @param str - The input text to be sorted
   */
  const sortText = (str: string) => {
    const words = str.split(' ')
    words.sort() // Sort the words alphabetically
    setSortedText(words.join(' '))
  }

  return { sortedText, sortText }
}

export default useLineSort
