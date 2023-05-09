import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/home/Home.jsx'
import Buscador from './Pages/buscador/Buscador.jsx'
import Perfil from './Pages/perfil/Perfil.jsx'
import Configuracion from './Pages/configuracion/Configuracion.jsx'
import Inicio from './Pages/inicio/Inicio.jsx'
import Cupido from './Pages/cupido/cupido.jsx'


const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/home", element: <Home /> },
  { path: "/buscador", element: <Buscador /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/configuracion", element: <Configuracion /> },
  { path: "/cupido", element: <Cupido /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
