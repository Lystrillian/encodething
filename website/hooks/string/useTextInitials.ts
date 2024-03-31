import { useState } from 'react'

// Custom hook to extract initials from a given text
const useTextInitials = () => {
  const [textInitials, setTextInitials] = useState('')

  // Function to convert a string to its initials
  const convertToTextInitials = (str: string) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
  }

  // Function to update the textInitials state based on input string
  const updateTextInitials = (str: string) => {
    setTextInitials(convertToTextInitials(str))
  }

  return { textInitials, updateTextInitials }
}

export default useTextInitials
