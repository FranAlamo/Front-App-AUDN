import React from 'react'
import '../configuracion/configuracion.css';
import { useNavigate } from 'react-router-dom';
import BotonRegistro from '../../components/Boton/botonRegistro.jsx';
import '../../components/Boton/BotonRegistro.css';
import '../configuracion/configuracion.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';

function Configuracion() {

  let bgcolor = '';
  let txt = '';
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
          <p onClick={() => cerrarSesion('/')}>Cerrar Sesión</p>
        </div>
      </div>

      <div className="bottom-config">
        <p>Versión: V1.25.03</p>
        <div className="config-bar"></div>
        <p onClick={() => cerrarSesion("/")}>Cerrar Sesión</p>
      </div>
    </div>


  );
}

export default Configuracion;
