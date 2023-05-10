import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import teclado from "../../assets/imagenes/teclado/keyboard.svg";
import ojoAbierto from "../../assets/icons/state=open.svg";
import ojoCerrado from "../../assets/icons/state=closed.svg";
import "./crear_cuenta.css";
import InputComponent from "../../components/input/input";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import BotonRegistro from "../../components/Boton/botonRegistro";

const Crear_cuenta = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonColor, setButtonColor] = useState("inactivo");
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
      checkButtonActive();
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
      checkButtonActive();
    }
  
    function checkButtonActive() {
      if (email && password) {
        setButtonActive(true);
        setButtonColor("naranja");
      } else {
        setButtonActive(false);
        setButtonColor("inactivo");
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    let title = "";
    let link = "";
    return (
      <div>
        <header>
          <GeneralHeader link="/" title="Crear Cuenta"></GeneralHeader>
        </header>
        <div className='cuenta-titulo'><h2>Ingresa un nombre de usuario y contraseña</h2></div>
        <form onSubmit={handleSubmit} className="cuenta-form-body">
          <div className="cuenta-input-container">
            <p>Nombre de Usuario:</p>
            <InputComponent
              bgcolor="inputComponent"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="cuenta-input-container">
            <p>Contraseña:</p>
            <InputComponent
              bgcolor="inputComponent"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="cuenta-button-sesion">
            <BotonRegistro
              txt="Continuar"
              bgcolor={buttonColor}
              disabled={!buttonActive}
            ></BotonRegistro>
          </div>
        </form>
        <div className="cuenta-keyboard">
          <img src={teclado} alt="" className="cuenta-image-keyboard" />
        </div>
      </div>
    );
}

export default Crear_cuenta