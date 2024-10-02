import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContexProvider, { StoreContex } from './contex/StoreContex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContexProvider>

      <App />
    </StoreContexProvider>
  </BrowserRouter>

)
