import React from 'react';
import '../HeaderInicio/headerInicio.css';
import reloj from '../../assets/icons/state=active.svg';
import notificaciones from '../../assets/icons/style=outline, state=active, notification=true.svg';


function HeaderInicio() {
  return (
    <div className='header'>
    <section className='tituloInicio'>Musica ya</section>
    <section className='seccionNotificaciones'>
    <img className='relojInicio' src={reloj} />
    <img className='notificacionInicio' src={notificaciones} />
    </section>
    </div>
  )
}

export default HeaderInicio