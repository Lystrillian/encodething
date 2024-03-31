import { useEffect, useState } from 'react'

/**
 * Custom hook to perform ROT47 encryption and decryption on the input text
 * @param {string} inputText - The text to be encoded and decoded
 * @returns {object} - Object containing the encoded and decoded values
 */
const useRot47 = (inputText: string) => {
  const [encodedValue, setEncodedValue] = useState('')
  const [decodedValue, setDecodedValue] = useState('')

  useEffect(() => {
    // Encrypt the input text using ROT47 algorithm
    const encrypted = rot47(inputText)
    setEncodedValue(encrypted)
    // Decrypt the encrypted text using ROT47 algorithm
    setDecodedValue(rot47(encrypted))
  }, [inputText])

  /**
   * Function to perform ROT47 encryption and decryption
   * @param {string} text - The text to be encoded and decoded
   * @returns {string} - The encoded or decoded text
   */
  const rot47 = (text: string) => {
    return text
      .split('')
      .map((char: string) => {
        const code = char.charCodeAt(0)
        if (code < 33 || code > 126) {
          return char
        }

        const shiftedCode = ((code - 33 + 47) % 94) + 33
        return char.toUpperCase() === char
          ? String.fromCharCode(shiftedCode).toUpperCase()
          : String.fromCharCode(shiftedCode).toLowerCase()
      })
      .join('')
  }

  return { encodedValue, decodedValue }
}

export default useRot47
