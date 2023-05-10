/* import React, {useState} from 'react'; */
import BotonRegistro from '../../components/Boton/BotonRegistro';
import InputComponent from '../../components/Input/Input';
import './Registro.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';
import teclado from '../../assets/imagenes/teclado/keyboard.svg';


function Registro() {
  let title = '';
  let link = '';
  return (
      <div className='registroContenedor'>
      <section className='headerRegistro'>
      <GeneralHeader link='/' title='Crear Cuenta'/>
      <h1 className='tituloRegistro' >¿Cuál es tu correo electrónico?</h1>
      <section className='seccionEmail'>
      <label className='labelRegistro'>Correo electrónico:</label>
      <br/>
      <InputComponent />
      <p className='parrafoComfirmar'>Deberás poder confirmarlo luego.</p>
      </section>
      </section>
      <section className='footerRegistro'>
      <BotonRegistro  bgcolor='inactivo' txt='Continuar'/>
      <img src={teclado} alt="keyboard" className='keyboard'/>
      </section>
      </div>
  )
}


export default Registro;

