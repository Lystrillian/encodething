import { useEffect, useState } from 'react'

// Define the alphabet for encryption and decryption
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

/**
 * Custom hook for Vigenere encryption and decryption
 * @param inputText - the text to be encrypted or decrypted
 * @param keyword - the keyword used for encryption or decryption
 * @returns encodedValue and decodedValue
 */
const useVigenere = (inputText: string, keyword: string) => {
  const [encodedValue, setEncodedValue] = useState('')
  const [decodedValue, setDecodedValue] = useState('')

  useEffect(() => {
    // Encrypt the input text using the Vigenere cipher
    const encrypted = vigenereEncrypt(inputText, keyword)
    // Decrypt the encrypted text using the Vigenere cipher
    const decrypted = vigenereDecrypt(encrypted, keyword)
    // Set the encoded and decoded values in the state
    setEncodedValue(encrypted)
    setDecodedValue(decrypted)
  }, [inputText, keyword])

  /**
   * Function to encrypt the text using the Vigenere cipher
   * @param text - the text to be encrypted
   * @param key - the keyword used for encryption
   * @returns the encrypted text
   */
  const vigenereEncrypt = (text: string, key: string) => {
    let encryptedText = ''
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      const charIndex = ALPHABET.indexOf(char.toUpperCase())

      if (charIndex !== -1) {
        const shift = ALPHABET.indexOf(key[i % key.length]) % 26
        const newIndex = (charIndex + shift) % 26
        const newChar = ALPHABET[newIndex]
        encryptedText +=
          char.toLowerCase() === char ? newChar.toLowerCase() : newChar
      } else {
        encryptedText += char
      }
    }
    return encryptedText
  }

  /**
   * Function to decrypt the text using the Vigenere cipher
   * @param text - the text to be decrypted
   * @param key - the keyword used for decryption
   * @returns the decrypted text
   */
  const vigenereDecrypt = (text: string, key: string) => {
    let decryptedText = ''
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      const charIndex = ALPHABET.indexOf(char.toUpperCase())

      if (charIndex !== -1) {
        const shift = ALPHABET.indexOf(key[i % key.length]) % 26
        const newIndex = (charIndex - shift + 26) % 26
        const newChar = ALPHABET[newIndex]
        decryptedText +=
          char.toLowerCase() === char ? newChar.toLowerCase() : newChar
      } else {
        decryptedText += char
      }
    }
    return decryptedText
  }

  return { encodedValue, decodedValue }
}

export default useVigenere
