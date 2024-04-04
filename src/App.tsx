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
    <div className='max-w-[900px] my-0 mx-auto bg-red-200 flex flex-col items-center'>
      <div>
        <p className='text-lg m-5'>Lose/Win</p>
      </div>
      <HangmanSketch />
      <WordToGuess />
      <Keyboard />
    </div>
  )
}

export default App
