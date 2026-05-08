import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'
import { useStore } from './lib/store'

async function bootstrap() {
  // Restaura sesión de Supabase al cargar la app
  await useStore.getState().restoreSession()

  // Escucha cambios de auth (cierre de sesión, refresh de token)
  const { supabase } = await import('./lib/supabase')
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') {
      useStore.setState({ user: null, isAuthenticated: false })
    }
  })

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

bootstrap()
