import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeContextProvider } from './Store/store.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)
