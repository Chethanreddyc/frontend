import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { NextUIProvider } from '@nextui-org/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
    <ThemeProvider>
    <main className="">
        <App />
      </main>
      </ThemeProvider>
      </NextUIProvider>
  </StrictMode>,
)