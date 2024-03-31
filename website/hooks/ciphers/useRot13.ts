import { useEffect, useState } from 'react'

/**
 * Custom hook to perform ROT13 encoding and decoding on the input text
 * @param inputText - the text to be encoded and decoded
 * @returns an object containing the encoded value and the decoded value
 */
const useRot13 = (inputText: string) => {
  const [encodedValue, setEncodedValue] = useState('')
  const [decodedValue, setDecodedValue] = useState('')

  useEffect(() => {
    const encoded = rot13(inputText)
    const decoded = rot13(encoded)
    setEncodedValue(encoded)
    setDecodedValue(decoded)
  }, [inputText])

  /**
   * Function to perform ROT13 encoding and decoding
   * @param text - the text to be encoded and decoded
   * @returns the encoded or decoded text
   */
  const rot13 = (text: string) => {
    return text
      .split('')
      .map((char: string) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 52 + 26) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 84 + 26) % 26) + 97)
        } else {
          return char
        }
      })
      .join('')
  }

  return { encodedValue, decodedValue }
}

export default useRot13
