import { useEffect, useState } from 'react'

/**
 * Custom hook to perform Caesar cipher encryption on a given string
 * @param {string} str - The input string to be encrypted
 * @param {number} shift - The number of positions to shift the characters
 * @returns {string} - The encrypted string
 */
const useCaesarCipher = (str: string, shift: number) => {
  const [encodedText, setEncodedText] = useState('')

  useEffect(() => {
    if (!str || !shift) {
      return
    }

    const encoded = str
      .split('')
      .map((char) => {
        let code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          // Transform Uppercase Letters
          code = ((code - 65 + shift) % 26) + 65 // ! Either this line
        } else if (code >= 97 && code <= 122) {
          // ! Or this line is broken in number
          // Transform Lowercase Letters
          code = ((code - 97 + shift) % 26) + 97
        }
        return String.fromCharCode(code)
      })
      .join('')

    setEncodedText(encoded)
  }, [str, shift])

  return encodedText
}

export default useCaesarCipher
