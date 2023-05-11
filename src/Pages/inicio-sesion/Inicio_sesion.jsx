import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import teclado from "../../assets/imagenes/teclado/keyboard.svg";
import ojoAbierto from "../../assets/icons/state=open.svg";
import ojoCerrado from "../../assets/icons/state=closed.svg";
import "./inicio_sesion.css";
import InputComponent from "../../components/input/input";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import BotonRegistro from "../../components/Boton/botonRegistro";

function Inicio_sesion() {
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
  let bgcolor= "";

  return (
    <div>
      <header>
        <GeneralHeader link="/" title="Iniciar Sesión"></GeneralHeader>
      </header>
      <form onSubmit={handleSubmit} className="form-body">
        <div className="input-container">
          <p>Nombre de Usuario o E-mail</p>
<<<<<<< HEAD
          <InputComponent
            bgcolor="inputComponent"
=======
          <InputComponent bgcolor="inputComponent"
>>>>>>> e02c2b8de5f1a33e2a340b0b5fc74d0ca8d93331
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <p>Contraseña</p>
          <InputComponent
<<<<<<< HEAD
            bgcolor="inputComponent"
=======
          bgcolor="inputComponent"
>>>>>>> e02c2b8de5f1a33e2a340b0b5fc74d0ca8d93331
            type="password"
            value={password}
            onChange={handlePasswordChange}
            img={ojoCerrado}
          />
        </div>
        <div className="button-sesion">
          <BotonRegistro
            txt="Continuar"
            bgcolor={buttonColor}
            disabled={!buttonActive}
          ></BotonRegistro>
          <p className="input-contraseña">¿Olvidaste tu contraseña?</p>
        </div>
      </form>
      <div className="keyboard">
        <img src={teclado} alt="" className="image-keyboard" />
      </div>
    </div>
  );
}

export default Inicio_sesion;
