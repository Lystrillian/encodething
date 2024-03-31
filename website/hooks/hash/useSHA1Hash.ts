import crypto from 'crypto'
import { useEffect, useState } from 'react'

/**
 * Custom hook to generate SHA1 hash of the input text
 * @param text - The input text to be hashed
 * @returns The SHA1 hash of the input text
 */
const useSHA1Hash = (text: string) => {
  const [hashedText, setHashedText] = useState<string>('')

  useEffect(() => {
    const hash = crypto.createHash('sha1').update(text).digest('hex')
    setHashedText(hash)
  }, [text])

  return hashedText
}

export default useSHA1Hash
