import React from 'react'
import keys from '../DATA/keyboardAlphabet.json'

const Keyboard = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(75px,1fr))',
        gap: '0.5rem',
      }}
    >
      {keys.map((key) => {
        return (
          <button className='bg-slate-400' key={key}>
            {key.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
