import React from 'react'
import '../configuracion/configuracion.css';
import { Link } from 'react-router-dom';
import BotonRegistro from '../../components/Boton/botonRegistro.jsx';
import '../../components/Boton/BotonRegistro.css';
import flecha from '../../assets/icons/flecha-atras.svg';
import '../configuracion/configuracion.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';

function Configuracion() {
    let bgcolor = '';
    let txt = '';
    let link = '';
    let title = '';

    return (
        <div className='container'>
            <div className='configuracion'>
                <div className='top-config'>
                    <GeneralHeader link='/perfil' title='Configuración' />
                    <div className='buttons-container'>
                        <BotonRegistro bgcolor='naranja' txt='Editar Apariencia' />
                        <BotonRegistro bgcolor='negro' txt='Editar Perfil' />
                    </div>

                </div>
                <div className='bottom-config'>
                    <p>Versión: V1.25.03</p>
                    <div className='config-bar'></div>
                    <p>Cerrar Sesión</p>
                </div>
            </div>
        </div>

    )
}

export default Configuracion;