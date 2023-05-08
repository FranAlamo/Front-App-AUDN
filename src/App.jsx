import { useState } from "react";

import "./App.css";
import HeaderInicio from "./components/HeaderInicio/HeaderInicio";
import NavBar from "./components/navbarcomponent/NavBar";
import BotonRegistro from "./components/Boton/BotonRegistro";

function App() {
  return (
    <div className="app">
      <HeaderInicio />
      <BotonRegistro />

      <NavBar />
    </div>
  );
}

export default App;
