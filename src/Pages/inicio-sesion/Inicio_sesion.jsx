import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
 const navigate = useNavigate();


  function handleEmailChange(event) {
    setEmail(event.target.value);
    checkButtonActive();
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    checkButtonActive();
  }

  function checkButtonActive() {
    if (email.includes("@") && email.length >= 8  && password) {
      setButtonActive(true);
      setButtonColor("naranja");
    } else {
      setButtonActive(false);
      setButtonColor("inactivo");
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  email: email,
  password: password
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

try {
  const response = await fetch 
  ("http://localhost:8000/api/login", requestOptions);
  if (response.ok){
    const respuesta = await response.json();
    localStorage.setItem("token", respuesta.token);
    localStorage.setItem("id", respuesta.usuario.id);
    localStorage.setItem("email", respuesta.usuario.email);
    localStorage.setItem("name", respuesta.usuario.name);
    navigate("/home")
  }else{
    const respuesta = await response.json();
    alert(respuesta.error);
  }
  }catch(error){
    alert(error.message)
  }
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
          <InputComponent bgcolor="inputComponent"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <p>Contraseña</p>
          <InputComponent
            bgcolor="inputComponent"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            img={ojoCerrado}
          />
        </div>
        <Link to="/home">
        <div className="button-sesion">
          <BotonRegistro
            txt="Continuar"
            bgcolor={buttonColor}
            disabled={!buttonActive}
          ></BotonRegistro>
          <p className="input-contraseña">¿Olvidaste tu contraseña?</p>
        </div>
        </Link>
      </form>
      <div className="keyboard">
        <img src={teclado} alt="" className="image-keyboard" />
      </div>
    </div>
  );
}

export default Inicio_sesion;
