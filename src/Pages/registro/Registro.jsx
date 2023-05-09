import React from 'react';
import goBack from '../../assets/icons/position=left-1.svg';
import InputComponent from '../../components/Input/Input';
import './Registro.css';


function Registro() {
  return (
    <><div className='headerRegistro'>
          <button className='botonBack'><img src={goBack} alt="goBack" /></button>
          <h3>Crear Cuenta</h3>
      </div>
      <h1>¿Cuál es tu correo electrónico?</h1>
      <h3>Correo electrónico:</h3>
      <br/>
      <InputComponent/>
          </>
  )
}

export default Registro