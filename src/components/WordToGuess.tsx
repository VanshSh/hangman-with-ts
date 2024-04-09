import React from 'react'
import getRandomUUIDNumber from '../helperFunctions/getRandomUUIDNumber'

const WordToGuess = () => {
  const word = 'TEST'
  const guessedWord = ['t', 'e']

  return (
    <div className='flex gap-2 text-6xl font-bold uppercase font-mono '>
      {word
        .trim()
        .split('')
        .map((letter) => {
          const randomUUID = getRandomUUIDNumber()
          return (
            <span
              key={randomUUID}
              className=' border-solid border-red-800 border-b-4'
            >
              <span
                className={
                  guessedWord.includes(letter.toLowerCase())
                    ? 'visible'
                    : 'invisible'
                }
              >
                {letter}
              </span>
            </span>
          )
        })}
    </div>
  )
}

export default WordToGuess
