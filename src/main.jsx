import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/home/Home.jsx'
import Buscador from './Pages/buscador/Buscador.jsx'
import Perfil from './Pages/perfil/Perfil.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home />},
  { path: "/buscador", element: <Buscador/> },
  { path: "/perfil", element: <Perfil /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
