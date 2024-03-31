import crypto from 'crypto'
import { useEffect, useState } from 'react'

/**
 * Custom hook to generate SHA256 hash of input text
 * @param text - The input text to be hashed
 * @returns The SHA256 hash of the input text
 */
const useSHA256Hash = (text: string) => {
  const [hashedText, setHashedText] = useState('')

  useEffect(() => {
    // Create SHA256 hash of the input text
    const hash = crypto.createHash('sha256').update(text).digest('hex')
    setHashedText(hash)
  }, [text])

  return hashedText
}

export default useSHA256Hash
