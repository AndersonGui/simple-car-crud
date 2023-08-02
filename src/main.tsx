import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.css'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './contexts/AuthProvider'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>,
)

