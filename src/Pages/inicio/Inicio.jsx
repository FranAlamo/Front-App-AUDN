import React from 'react';
import BotonRegistro from '../../components/Boton/botonRegistro';
import logo from '../../assets/icons/logo-large.svg';
import "./Inicio.css";
import { Link } from 'react-router-dom';


function Inicio() {
  let bgcolor = '';
  let txt = '';
  


  return (
    <div className='contenedorInicio'>
    <div className='logo'><img src={logo} alt="logo"/>
    <h1 className='tituloInicio'>Música a medida.</h1></div>
    <section className='botonesRegistro'>
    <Link to='/registro'>
    <BotonRegistro bgcolor='naranja' txt='Registrarse Gratis'/>
    </Link>
    <BotonRegistro bgcolor='bordeNegro' txt='Continuar con Google'/>
    <BotonRegistro bgcolor='bordeNegro' txt='Continuar con Apple'/>
    <button type="" className='botonIniciarSesion'>Iniciar Sesión</button>
    </section>
    </div>
  )
}

export default Inicio;