import React from 'react'
import InputComponent from '../../components/input/input.jsx'
import '../busquedas/busquedas.css';
import teclado from '../../assets/imagenes/teclado/keyboard.svg';
import arrow from '../../assets/icons/flecha-atras.svg';

function Busquedas() {
    let imgOnClick = '';
    let bgcolor = '';

    return (
        <div className='busquedas-container'>
            <div>
                <InputComponent bgcolor='buscadorGris' img={arrow} imgOnClick='/buscador' />
            </div>
            <div className='title-container'>
                <p className="first-p">Búsquedas Recientes:</p>
                <div className="busqueda-bar"></div>
            </div>

            <div className="lista-busquedas"></div>

            <div className='teclado-container'>
                <p className="second-p">Borrar búsquedas Recientes:</p>
                <img className='teclado-busqueda' src={teclado} alt="teclado" />
            </div>
        </div>
    )
}

export default Busquedas