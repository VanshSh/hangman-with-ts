import getRandomUUIDNumber from '../helperFunctions/getRandomUUIDNumber'
type WordToGuessProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}
const WordToGuess = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: WordToGuessProps) => {
  return (
    <div className='flex gap-2 text-6xl font-bold uppercase font-mono '>
      {wordToGuess
        .trim()
        .split('')
        .map((letter) => {
          const randomUUID = getRandomUUIDNumber()
          return (
            <span
              key={randomUUID}
              className=' border-solid  border-red-800 border-b-4'
            >
              <span
                className={`${
                  guessedLetters.includes(letter.toLowerCase()) || reveal
                    ? 'visible'
                    : 'invisible'
                } ${
                  !guessedLetters.includes(letter.toLowerCase()) && reveal
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
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
