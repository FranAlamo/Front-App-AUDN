import React from 'react'
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import flecha from '../../assets/icons/flecha-atras.svg';
import { Link } from 'react-router-dom';
import '../cupido/cupido.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';

function Cupido() {
    let link = '';
    let title = '';
    const [modalVisible, setModalVisible] = useState(true);

    const ocultarModal = () => {
        setModalVisible(false);
    };

    return (
        <div className='cupido'>
            <GeneralHeader link='/home' title='Cupido Musical' />
            {modalVisible && <Modal ocultarModal={ocultarModal} />}
        </div>
    )
}

export default Cupido;