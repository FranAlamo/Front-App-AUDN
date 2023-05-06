import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/homecomponent/home.jsx'
import Buscador from './components/buscadorcomponent/buscador.jsx'
import Perfil from './components/perfilcomponent/Perfil.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/buscador", element: <Buscador /> },
  { path: "/perfil", element: <Perfil /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
