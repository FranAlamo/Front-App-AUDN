/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/home/Home.jsx'
import Buscador from './Pages/buscador/Buscador.jsx'
import Perfil from './Pages/perfil/Perfil.jsx'
import Configuracion from './Pages/configuracion/Configuracion.jsx'
import Inicio from './Pages/inicio/Inicio.jsx' */

import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App.jsx";
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Buscador from "./Pages/buscador/Buscador.jsx";
import Perfil from "./Pages/perfil/Perfil.jsx";
import Configuracion from "./Pages/configuracion/Configuracion.jsx";
import Inicio from "./Pages/inicio/Inicio.jsx";
import MusicaContextual from "./Pages/musicaContextual/musicaContextual.jsx";
import Registro from "./Pages/registro/Registro.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/registro", element: <Registro /> },
  { path: "/home", element: <Home /> },
  { path: "/buscador", element: <Buscador /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/configuracion", element: <Configuracion /> },
  { path: "/musicacontextual", element: <MusicaContextual /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
