import React from 'react'
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import flecha from '../../assets/icons/flecha-atras.svg';
import { Link } from 'react-router-dom';
import '../cupido/cupido.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';
import BotonRegistro from '../../components/Boton/botonRegistro';
import cupidoimg from '../../assets/imagenes/Cupido-musical/step=6.png';

function Cupido() {
    let link = '';
    let title = '';
    let bgcolor = '';
    let txt = '';
    let modaltitle = '';
    let modaltxt = '';
    let modalimg = null;

    const [modalVisible, setModalVisible] = useState(true);

    const ocultarModal = () => {
        setModalVisible(false);
    };

    return (
        <div className='cupido'>
            {modalVisible && <Modal ocultarModal={ocultarModal} modaltitle='Cupido Musical' modaltxt='Luego de al menos 2 me gusta, confirma tu selección y crearemos una playlist rápida con los artistas que fueron un match' modalimg={cupidoimg} />}
            <GeneralHeader link='/home' title='Cupido Musical' />
            <div className='cupido-artist'>
                <div className='like'></div>
                <div className='dislike'></div>
            </div>
            <p className='artist-txt'></p>
            <BotonRegistro bgcolor='cupido-button' txt='Crear Playlist' />

        </div>
    )
}

export default Cupido;