import keys from '../DATA/keyboardAlphabet.json'
import styles from '../CSSModule/keyboard.module.css'
type KeyboardProps = {
  activeLetter: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled: boolean
}
const Keyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(75px,1fr))',
        gap: '0.5rem',
        margin: '0.5rem',
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetter.includes(key)
        const isInActive = inactiveLetters.includes(key)
        return (
          <button
            disabled={isInActive || isActive || disabled}
            onClick={() => addGuessedLetter(key)}
            className={`bg-slate-400 uppercase border-black cursor-pointer border-2 p-1 font-bold text-lg   ${
              styles.button
            }
            ${isActive ? styles.activeButton : ''}
              ${isInActive ? styles.inactiveButton : ''}  `}
            key={key}
          >
            {key.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
