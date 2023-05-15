import React, { useState } from 'react';
import BotonRegistro from '../../components/Boton/botonRegistro';
import InputComponent from '../../components/input/input'
import './Registro.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';
import teclado from '../../assets/imagenes/teclado/keyboard.svg';
import { Link, useNavigate } from 'react-router-dom';


function Registro() {
  const [email, setEmail] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonColor, setButtonColor] = useState("inactivo");
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
    checkButtonActive();
  }

  let title = "";
  let link = "";
  let bgcolor = "";

  function checkButtonActive() {
    if (email.includes("@") && email.length >= 8) {
      setButtonActive(true);
      setButtonColor("naranja");
    } else {
      setButtonActive(false);
      setButtonColor("inactivo");
    }
  }


  /*   const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem("email", email);
      navigate("/registro/crearCuenta");
    } */
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("El formato del email ingresado no es válido");
      return;
    }

    const emailRegistrado = localStorage.getItem("email");
    if (emailRegistrado === email) {
      alert("El usuario ya ha sido registrado anteriormente");
    } else {
      localStorage.setItem("email", email);
      navigate("/registro/crearCuenta");
    }
  }

  return (
    <div className='registroContenedor'>
      <section className='headerRegistro'>
        <GeneralHeader link='/' title='Crear Cuenta' />
        <h1 className='tituloRegistro' >¿Cuál es tu correo electrónico?</h1>
        <form onSubmit={handleSubmit} className='seccionEmail'>
          <label className='labelRegistro'>Correo electrónico:</label>
          <br />
          <InputComponent type="email"
            bgcolor="inputComponent"
            value={email}
            onChange={handleEmailChange} />
          <p className='parrafoComfirmar'>Deberás poder confirmarlo luego.</p>
        </form>
      </section>
      <section className='footerRegistro'>
        <BotonRegistro txt="Continuar" onClick={handleSubmit}
          bgcolor={buttonColor}
          disabled={!buttonActive} />

        <img src={teclado} alt="keyboard" className='keyboard' />
      </section>
    </div>
  )
}


export default Registro;

