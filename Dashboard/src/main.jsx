import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppWrapper from './App'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppWrapper />
  </StrictMode>,
)
