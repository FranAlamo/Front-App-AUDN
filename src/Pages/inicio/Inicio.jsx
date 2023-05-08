import React from 'react';
import BotonRegistro from '../../components/Boton/botonRegistro';
import logo from '../../assets/icons/logo-large.svg';
import "./Inicio.css";



function Inicio() {
  return (
    <div className='contenedorInicio'>
    <div className='logo'><img src={logo} alt="logo"/>
    <h1 className='tituloInicio'>Música a medida.</h1></div>
    <section className='botonesRegistro'>
    <BotonRegistro/>
    <BotonRegistro/>
    <BotonRegistro/>
    <p>Iniciar Sesión</p>
    </section>
    </div>
  )
}

export default Inicio;