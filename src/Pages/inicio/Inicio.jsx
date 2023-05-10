import React from 'react';
import BotonRegistro from '../../components/Boton/botonRegistro';
import logo from '../../assets/icons/logo-large.svg';
import logoApple from '../../assets/icons/apple-logo.svg';
import logoGoogle from '../../assets/icons/google-logo.svg';
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
    <BotonRegistro bgcolor='bordeNegro' txt={<p><img src={logoGoogle} alt="logoGoogle"/> &nbsp; Continuar con Google</p>}/>
    <BotonRegistro bgcolor='bordeNegro' txt={<p><img src={logoApple} alt="logoApple"/> &nbsp; Continuar con Apple</p>}/>
    <button type="" className='botonIniciarSesion'>Iniciar Sesión</button>
    </section>
    </div>
  )
}

export default Inicio;