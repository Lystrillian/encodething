import { useState } from 'react'

// Custom hook to reverse a text
const useTextReverse = () => {
  const [textReverse, setTextReverse] = useState('')

  // Recursive function to reverse a string
  const handleReverseString = (str: string): string => {
    if (str === '') return ''
    else return handleReverseString(str.substr(1)) + str.charAt(0)
  }

  // Function to reverse the input text and set the state
  const reverseText = (text: string) => {
    setTextReverse(handleReverseString(text))
  }

  return { textReverse, reverseText }
}

export default useTextReverse
