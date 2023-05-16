import React from 'react'
import BotonRegistro from '../Boton/botonRegistro.jsx';
import { useState } from 'react';
import '../modal/modal.css';

function Modal(props) {
    const cerrarModal = () => {
        props.ocultarModal();
    };
    let txt = '';
    let bgcolor = '';


    return (
        <div className='modal-container'>
            <div className='modal'>
                <p className='modal-title'>{props.modaltitle}</p>
                <div className='img-container-modal'>
                    <img src={props.modalimg} alt="" />
                </div>
                <p className='modal-txt'>
                    {props.modaltxt}
                </p>
                <div onClick={cerrarModal}><BotonRegistro txt='Entendido' bgcolor='botonCupido' /></div>

                <p className='lastp' onClick={cerrarModal}>No volver a mostrar</p>

            </div>
        </div>

    )
}

export default Modal;