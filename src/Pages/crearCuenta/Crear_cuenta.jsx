import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);


  function handleEmailChange(event) {
    setEmail(event.target.value);
    checkButtonActive();
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    checkButtonActive();
  }

  function handleCheckBoxChange(event) {
    setCheckBoxChecked(event.target.checked);
    checkButtonActive();
  }

  useEffect(() => {
    checkButtonActive();
  }, [email, password, checkBoxChecked]);

  function checkButtonActive() {
    if (email.includes("@") && email.length >= 8 && password && checkBoxChecked) {
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

  let imgOnClick = "";
  let title = "";
  let link = "";
  return (
    <div>
      <header>
        <GeneralHeader link="/" title="Crear Cuenta"></GeneralHeader>
      </header>
      <div className="cuenta-titulo">
        <p>Ingresa un nombre de usuario y contraseña.</p>
      </div>
      <form onSubmit={handleSubmit} className="cuenta-form-body">
        <div className="cuenta-input-container">
          <p className="texto1">Nombre de Usuario:</p>
          <InputComponent
            bgcolor="inputComponent"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="cuenta-input-container">
          <p className="texto1">Contraseña:</p>
          <InputComponent
            bgcolor="inputComponent"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            img={ojoCerrado}
          />
          <p className="texto2">Deberá contener al menos 8 caracteres.</p>
        </div>

        <div className="cuenta-checkbox">
        <label>
          <input
            type="checkbox"
            checked={checkBoxChecked}
            onChange={handleCheckBoxChange}
          />
          He leído y acepto los Términos y Condiciones.
        </label>
        </div>

        <Link to="/home">
        <div className="cuenta-button-sesion">
          <BotonRegistro
            txt="Continuar"
            bgcolor={buttonColor}
            disabled={!buttonActive}
          ></BotonRegistro>
        </div>
        </Link>
      </form>
      <div className="cuenta-keyboard">
        <img src={teclado} alt="" className="cuenta-image-keyboard" />
      </div>
    </div>
  );
};

export default Crear_cuenta;
