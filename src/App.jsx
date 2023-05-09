import { useState } from "react";

import "./App.css";
import HeaderInicio from "./components/HeaderInicio/HeaderInicio";
import NavBar from "./components/navbarcomponent/NavBar";
import Home from "./Pages/home/Home"

function App() {
  return (
    <div className="app">
      <HeaderInicio />
      <Home></Home>
      <NavBar />
    </div>
  );
}

export default App;
