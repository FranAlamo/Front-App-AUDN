import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/home/Home.jsx'
import Buscador from './Pages/buscador/Buscador.jsx'
import Perfil from './Pages/perfil/Perfil.jsx'
import Configuracion from './Pages/configuracion/Configuracion.jsx'
import Inicio from './Pages/inicio/Inicio.jsx'
import Inicio_sesion from './Pages/inicio-sesion/Inicio_sesion.jsx'


const router = createBrowserRouter([
  { path: "/", element: <Inicio/>},
  { path: "/home", element: <Home /> },
  { path: "/buscador", element: <Buscador /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/configuracion", element: <Configuracion /> },
  { path: "/sesion", element: <Inicio_sesion /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
