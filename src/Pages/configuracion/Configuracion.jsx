import React from 'react'
import '../configuracion/configuracion.css';
import { Link } from 'react-router-dom';
import BotonRegistro from '../../components/Boton/botonRegistro.jsx';
import '../../components/Boton/BotonRegistro.css';
import flecha from '../../assets/icons/flecha-atras.svg';
import '../configuracion/configuracion.css';

function Configuracion() {
    let bgcolor = '';
    let txt = '';

    return (
        <div className='container'>
            <div className='configuracion'>
                <div className='top-config'>
                    <div className='config-header'>
                        <Link to='/perfil'>
                            <div className='arrow'>
                                <img src={flecha} alt="" />
                            </div>
                        </Link>

                        <p className='title'>
                            Configuración
                        </p>
                    </div>
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