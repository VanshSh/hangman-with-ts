import { useCallback, useEffect, useState } from 'react'
import words from './DATA/wordsList.json'
import { getRandomNumberFromWordsList } from './helperFunctions/getRandomNumberFromWordsList'
import HangmanSketch from './components/HangmanSketch'
import Keyboard from './components/Keyboard'
import WordToGuess from './components/WordToGuess'
import LightDarkMode from './components/LightDarkMode'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(
    getRandomNumberFromWordsList(words)
  )
  const [guessedLetter, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetter.filter(
    (word) => !wordToGuess.includes(word)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetter.includes(letter))
  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessedLetter.includes(key) || isWinner || isLoser) return
      setGuessedLetters((prevLetter) => [...prevLetter, key])
    },
    [guessedLetter, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetter])

  return (
    <div>
      <LightDarkMode />
      <div className='max-w-[900px] my-0 mx-auto bg-red-200 flex flex-col items-center'>
        <div>
          <p className='text-lg m-5 text-center'></p>
          {isWinner && 'Winner refresh and try new word'}
          {isLoser && 'Loser refresh and try new word'}
        </div>
        <HangmanSketch numberOfGuesses={incorrectLetters.length} />
        <WordToGuess
          reveal={isLoser}
          guessedLetters={guessedLetter}
          wordToGuess={wordToGuess}
        />
        <div className='self-stretch'>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetter={guessedLetter.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  )
}

export default App
