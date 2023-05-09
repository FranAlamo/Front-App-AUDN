import React from 'react'
import teclado from '../../assets/imagenes/teclado/keyboard.svg'
import flechaAtras from '../../assets/icons/flecha-atras.svg'
import "./inicio_sesion.css"
import InputComponent from "../../components/input/input"


function Inicio_sesion () {
  return (
    <div>
      <header className='ini-sesion'>
        <img src={flechaAtras} alt="" />
        <h3>Iniciar Sesión</h3>
      </header>
      <form action="submit" className='form-sesion'>
        <label>Nombre de Usuario o E-mail</label>
        <InputComponent/>
        <label>Contraseña</label>
        <InputComponent/>
      </form>
      <div className='keyboard'>
        <img src={teclado} alt="" className='image-keyboard'/>
      </div>
    </div>
  )
}

export default Inicio_sesion