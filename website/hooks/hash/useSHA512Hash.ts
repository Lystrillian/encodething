import crypto from 'crypto'
import { useEffect, useState } from 'react'

/**
 * Custom hook to create SHA-512 hash of the input text
 * @param {string} text - The input text to be hashed
 * @returns {string} - The hashed text
 */
const useSHA512Hash = (text: string) => {
  const [hashedText, setHashedText] = useState('')

  useEffect(() => {
    // Create SHA-512 hash of the input text
    const hash = crypto.createHash('sha512').update(text).digest('hex')
    setHashedText(hash)
  }, [text])

  return hashedText
}

export default useSHA512Hash
