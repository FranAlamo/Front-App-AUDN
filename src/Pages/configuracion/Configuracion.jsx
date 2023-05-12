import React from 'react'
import '../configuracion/configuracion.css';
import { useNavigate } from 'react-router-dom';
import BotonRegistro from '../../components/Boton/botonRegistro.jsx';
import '../../components/Boton/BotonRegistro.css';
import flecha from '../../assets/icons/flecha-atras.svg';
import '../configuracion/configuracion.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';

function Configuracion() {
const navigate = useNavigate();

    const cerrarSesion = (path) =>{
        localStorage.removeItem('token');
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        navigate(path)
        
    }
    let bgcolor = '';
    let txt = '';
    let link = '';
    let title = '';

    const navigate = useNavigate();

    const cerrarSesion = (path) => {
        localStorage.removeItem('token');
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        navigate(path)
    }
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
<<<<<<< HEAD
                    <p onClick={() => cerrarSesion('/')}>Cerrar Sesión</p>
=======
                    
                    <button onClick={() => cerrarSesion('/')}>Cerrar Sesión</button>
>>>>>>> 075680843cc8d06778cb5a47ab1b4ceb8a649b50
                </div>
            </div>
        </div>

    )
}

export default Configuracion;