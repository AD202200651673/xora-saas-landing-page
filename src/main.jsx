import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import faviconUrl from './public/favicon.ico?url'

function applyFavicon() {
  const existing = document.querySelector('link[rel="icon"]')
  const link = existing || document.createElement('link')
  link.setAttribute('rel', 'icon')
  link.setAttribute('type', 'image/x-icon')
  link.setAttribute('href', faviconUrl)
  if (!existing) {
    document.head.appendChild(link)
  }
}

applyFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
