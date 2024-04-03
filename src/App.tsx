import { useState } from 'react'
import words from './wordsList.json'
import { getRandomNumberFromWordsList } from './helperFunctions/getRandomNumberFromWordsList'
import HangmanSketch from './components/HangmanSketch'
import Keyboard from './components/Keyboard'
import WordToGuess from './components/WordToGuess'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(
    getRandomNumberFromWordsList(words)
  )

  return (
    <div className='max-w-[700px] my-0 mx-auto'>
      <HangmanSketch />
      <WordToGuess />
      <Keyboard />
    </div>
  )
}

export default App
