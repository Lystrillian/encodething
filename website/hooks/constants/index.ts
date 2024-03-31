/**
 * Defines a dictionary mapping Latin characters to Morse code strings.
 */
type MorseCodeDict = {
  [key: string]: string
}

/**
 * A dictionary mapping Latin characters to Morse code strings.
 */
const MORSE_CODE_LATIN: MorseCodeDict = {
  // Letters
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  // Numbers
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  // Special characters
  ' ': '/',
}

/**
 * A dictionary mapping Cyrillic characters to Morse code strings.
 */
const MORSE_CODE_CYRILLIC: MorseCodeDict = {
  // Letters
  А: '.-',
  Б: '-...',
  В: '.-..',
  Г: '--.',
  Д: '-..',
  Е: '.',
  Ё: '..--',
  Ж: '....-',
  З: '--..',
  И: '..',
  Й: '.---',
  К: '-.-',
  Л: '.-..',
  М: '--',
  Н: '-.',
  О: '---',
  П: '.--.',
  Р: '.-.',
  С: '...',
  Т: '-',
  У: '..-',
  Ф: '..-.',
  Х: '-..-',
  Ц: '-.-.',
  Ч: '---.',
  Ш: '....',
  Щ: '--.-',
  Ъ: '.-..',
  Ы: '-.--',
  Ь: '-....',
  Э: '..-..',
  Ю: '..--',
  Я: '.-.-',
  // Special characters
  ' ': '/',
}

/**
 * A dictionary mapping Morse code strings to the corresponding characters.
 */
const INVERSE_MORSE_CODE_DICT: { [key: string]: string } = Object.fromEntries(
  Object.entries(MORSE_CODE_LATIN)
    .concat(Object.entries(MORSE_CODE_CYRILLIC))
    .map(([k, v]) => [v, k]),
)

export { INVERSE_MORSE_CODE_DICT, MORSE_CODE_CYRILLIC, MORSE_CODE_LATIN }
