import React from 'react'
import '../404/errorpage.css'
import BotonRegistro from '../../components/Boton/botonRegistro.jsx'
import logo from '../../assets/imagenes/logo-large.png'
import { Link } from 'react-router-dom';

function ErrorPage() {
    let bgcolor = '';
    let txt = '';

    return (
        <div className='error-page'>
            <img src={logo} alt="logo" />
            <p>Ups! No podemos encontrar la página que estas buscando...</p>
            <Link to='/'>
                <BotonRegistro bgcolor="negro" txt="Volver a inicio" />
            </Link>

        </div>
    )
}

export default ErrorPage;