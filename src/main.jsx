import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Buscador from "./Pages/buscador/Buscador.jsx";
import Perfil from "./Pages/perfil/Perfil.jsx";
import Configuracion from "./Pages/configuracion/Configuracion.jsx";
import Inicio from "./Pages/inicio/Inicio.jsx";
import MusicaContextual from "./Pages/musicaContextual/musicaContextual.jsx";
import Registro from "./Pages/registro/Registro.jsx";
import Inicio_sesion from "./Pages/inicio-sesion/Inicio_sesion.jsx";
import Cupido from "./Pages/cupido/Cupido.jsx";
import ErrorPage from "./Pages/404/ErrorPage.jsx";
import Busquedas from "./Pages/busquedas/Busquedas.jsx";
import Crear_cuenta from "./Pages/crearCuenta/Crear_cuenta.jsx";
import Playlist from "./Pages/playlist/Playlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <Registro />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/buscador",
    element: <Buscador />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/configuracion",
    element: <Configuracion />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/musicacontextual",
    element: <MusicaContextual />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/musicacontextual/playlist",
    element: <Playlist />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sesion",
    element: <Inicio_sesion />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/cupido",
    element: <Cupido />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/busquedas",
    element: <Busquedas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro/crearCuenta",
    element: <Crear_cuenta />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
