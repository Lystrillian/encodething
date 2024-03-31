import { useEffect, useState } from 'react'

/**
 * Custom hook for encoding and decoding a string using ROT18 algorithm
 * @param inputText - the input text to be encoded/decoded
 * @returns an object containing the encoded and decoded values
 */
const useRot18 = (inputText: string) => {
  const [encodedValue, setEncodedValue] = useState('')
  const [decodedValue, setDecodedValue] = useState('')

  useEffect(() => {
    const encrypted = rot18(inputText)
    setEncodedValue(encrypted)
    setDecodedValue(rot18(encrypted))
  }, [inputText])

  /**
   * Encodes/decodes a string using ROT18 algorithm
   * @param text - the input text to be encoded/decoded
   * @returns the encoded/decoded text
   */
  const rot18 = (text: string) => {
    return text
      .split('')
      .map((char: string) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + 13) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + 13) % 26) + 97)
        } else if (code >= 48 && code <= 57) {
          return String.fromCharCode(((code - 48 + 4) % 10) + 48)
        } else {
          return char
        }
      })
      .join('')
  }

  return { encodedValue, decodedValue }
}

export default useRot18
