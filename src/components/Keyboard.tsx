import keys from '../DATA/keyboardAlphabet.json'
import styles from '../CSSModule/keyboard.module.css'

const Keyboard = () => {
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
        return (
          <button
            className={`bg-slate-400 uppercase border-black cursor-pointer border-2 p-1 font-bold text-lg   ${styles.button}  `}
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
