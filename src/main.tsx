import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TanstackQueryProvider } from './app/providers/QueryClientProvider'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TanstackQueryProvider>
        <App />
      </TanstackQueryProvider>
    </BrowserRouter>
  </StrictMode>,
)
