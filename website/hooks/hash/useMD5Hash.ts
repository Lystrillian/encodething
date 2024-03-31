import crypto from 'crypto'
import { useEffect, useState } from 'react'

/**
 * Custom hook to generate an MD5 hash of the input text
 * @param text - The input text to be hashed
 * @returns The MD5 hash of the input text
 */
const useMD5Hash = (text: string) => {
  const [hashedText, setHashedText] = useState('')

  useEffect(() => {
    setHashedText(crypto.createHash('md5').update(text).digest('hex'))
  }, [text])

  return hashedText
}

export default useMD5Hash
