import { useState } from 'react'

/**
 * Custom hook for Unicode normalization
 * @returns {{
 *  nfc: string,
 *  nfd: string,
 *  nfkc: string,
 *  nfkd: string,
 *  normalizeNFC: (str: string) => void,
 *  normalizeNFD: (str: string) => void,
 *  normalizeNFKC: (str: string) => void,
 *  normalizeNFKD: (str: string) => void
 * }}
 */
const useUnicodeNormalization = () => {
  const [nfc, setNFC] = useState('')
  const [nfd, setNFD] = useState('')
  const [nfkc, setNFKC] = useState('')
  const [nfkd, setNFKD] = useState('')

  /**
   * Handles Unicode normalization of the input string
   * @param {string} str - Input string
   * @param {string} form - Normalization form
   * @returns {string} - Normalized string
   */
  const handleNormalize = (str: string, form: string) => {
    return str.normalize(form)
  }

  /**
   * Sets the NFC normalized string
   * @param {string} str - Input string
   */
  const normalizeNFC = (str: string) => {
    setNFC(handleNormalize(str, 'NFC'))
  }

  /**
   * Sets the NFD normalized string
   * @param {string} str - Input string
   */
  const normalizeNFD = (str: string) => {
    setNFD(handleNormalize(str, 'NFD'))
  }

  /**
   * Sets the NFKC normalized string
   * @param {string} str - Input string
   */
  const normalizeNFKC = (str: string) => {
    setNFKC(handleNormalize(str, 'NFKC'))
  }

  /**
   * Sets the NFKD normalized string
   * @param {string} str - Input string
   */
  const normalizeNFKD = (str: string) => {
    setNFKD(handleNormalize(str, 'NFKD'))
  }

  return {
    nfc,
    nfd,
    nfkc,
    nfkd,
    normalizeNFC,
    normalizeNFD,
    normalizeNFKC,
    normalizeNFKD,
  }
}

export default useUnicodeNormalization
