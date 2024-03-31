import crypto from 'crypto'
import { useEffect, useState } from 'react'

/**
 * Custom hook to generate SHA384 hash of the input text
 * @param text - The input text to be hashed
 * @returns The SHA384 hash of the input text
 */
const useSHA384Hash = (text: string) => {
  const [hashedText, setHashedText] = useState('')

  useEffect(() => {
    const hash = crypto.createHash('sha384').update(text).digest('hex')
    setHashedText(hash)
  }, [text])

  return hashedText
}

export default useSHA384Hash
