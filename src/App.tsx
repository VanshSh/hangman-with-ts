import { useState } from 'react'
import words from './DATA/wordsList.json'
import { getRandomNumberFromWordsList } from './helperFunctions/getRandomNumberFromWordsList'
import HangmanSketch from './components/HangmanSketch'
import Keyboard from './components/Keyboard'
import WordToGuess from './components/WordToGuess'
import React from 'react'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(
    getRandomNumberFromWordsList(words)
  )

  return (
    <div className='max-w-[900px] my-0 mx-auto bg-red-200 flex flex-col items-center'>
      <div>
        <p className='text-lg m-5 text-center'>Lose/Win</p>
      </div>
      <HangmanSketch />
      <WordToGuess />
      <div className='self-stretch'>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
