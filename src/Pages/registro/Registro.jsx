import React, {useState} from 'react';
<<<<<<< HEAD
import BotonRegistro from '../../components/Boton/botonRegistro';
import InputComponent from '../../components/input/input'
=======
import BotonRegistro from '../../components/Boton/BotonRegistro';
import InputComponent from '../../components/Input/input';
>>>>>>> e02c2b8de5f1a33e2a340b0b5fc74d0ca8d93331
import './Registro.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';
import teclado from '../../assets/imagenes/teclado/keyboard.svg';


function Registro() {
  const [email, setEmail] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonColor, setButtonColor] = useState("inactivo");

  function handleEmailChange(event) {
    setEmail(event.target.value);
    checkButtonActive();
  }

  let title = "";
  let link = "";
<<<<<<< HEAD
let bgcolor = "";
=======
  let bgcolor ="";
>>>>>>> e02c2b8de5f1a33e2a340b0b5fc74d0ca8d93331

  function checkButtonActive() {
    if (email.includes("@") && email.length >= 8) {
      setButtonActive(true);
      setButtonColor("naranja");
    } else {
      setButtonActive(false);
      setButtonColor("inactivo");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
      <div className='registroContenedor'>
      <section className='headerRegistro'>
      <GeneralHeader link='/' title='Crear Cuenta'/>
      <h1 className='tituloRegistro' >¿Cuál es tu correo electrónico?</h1>
      <form onSubmit={handleSubmit} className='seccionEmail'>
      <label className='labelRegistro'>Correo electrónico:</label>
      <br/>
<<<<<<< HEAD
      <InputComponent type="email"
      bgcolor="inputComponent"
=======
      <InputComponent type="email" bgcolor='inputComponent'
>>>>>>> e02c2b8de5f1a33e2a340b0b5fc74d0ca8d93331
      value={email}
      onChange={handleEmailChange}/>
      <p className='parrafoComfirmar'>Deberás poder confirmarlo luego.</p>
      </form>
      </section>
      <section className='footerRegistro'>
      <BotonRegistro  txt="Continuar"
      bgcolor={buttonColor}
      disabled={!buttonActive}/>
      <img src={teclado} alt="keyboard" className='keyboard'/>
      </section>
      </div>
  )
}


export default Registro;

