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
                <p>Cupido Musical</p>
                <div className='img-container-modal'>
                    <img src="" alt="" />
                </div>
                <p className='modal-txt'>
                    Luego de al menos 2 me gusta, confirma tu selección y crearemos una playlist rápida con los artistas que fueron un match.
                </p>
                <div onClick={cerrarModal}><BotonRegistro txt='Entendido' bgcolor='negro' /></div>

                <p onClick={cerrarModal}>No volver a mostrar</p>

            </div>
        </div>

    )
}

export default Modal;