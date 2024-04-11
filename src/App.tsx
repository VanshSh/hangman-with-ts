import { useEffect, useState } from 'react'
import words from './DATA/wordsList.json'
import { getRandomNumberFromWordsList } from './helperFunctions/getRandomNumberFromWordsList'
import HangmanSketch from './components/HangmanSketch'
import Keyboard from './components/Keyboard'
import WordToGuess from './components/WordToGuess'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(
    getRandomNumberFromWordsList(words)
  )
  const [guessedLetter, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetter.filter(
    (word) => !wordToGuess.includes(word)
  )

  const addGuessedLetter = (key: string) => {
    if (guessedLetter.includes(key)) return
    setGuessedLetters((prevLetter) => [...prevLetter, key])
  }

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
  })

  return (
    <div className='max-w-[900px] my-0 mx-auto bg-red-200 flex flex-col items-center'>
      <div>
        <p className='text-lg m-5 text-center'>Lose/Win</p>
      </div>
      <HangmanSketch numberOfGuesses={incorrectLetters.length} />
      <WordToGuess guessedLetters={guessedLetter} wordToGuess={wordToGuess} />
      <div className='self-stretch'>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
