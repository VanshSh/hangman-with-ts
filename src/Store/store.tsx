import { ReactChildren, createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }: React.ReactNode) => {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const UseThemeContenxt = () => useContext(ThemeContext)
