import React from 'react'
import Modal from '../../components/modal/Modal';
import { useState, useEffect } from 'react';
import '../cupido/cupido.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';
import BotonRegistro from '../../components/Boton/botonRegistro';
import cupidoimg from '../../assets/imagenes/Cupido-musical/step=6.png';
import TarjetaArtista from 'react-tinder-card';


function Cupido() {
    const [artistas, setArtistas] = useState([]);
    /*     const artistaDatos = dataTop20.find(data => data.artista === nombreArtista);
     */
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

    const mostrarTodo = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        try {
            const response = await fetch("http://localhost:8000/api/canciones", requestOptions).then(response => { return response });
            console.log(response)
            if (response.ok) {
                const respuesta = await response.json();
                setArtistas(respuesta.musica);
                console.log(respuesta)
            } else {
                alert("Ocurrio un error del lado del cliente");
            }
        } catch (error) {
            alert(error.message);
        }

    };
    useEffect(() => {
        mostrarTodo();
    }, []);

    return (
        <div className='cupido'>
            {modalVisible && <Modal ocultarModal={ocultarModal} modaltitle='Cupido Musical' modaltxt='Luego de al menos 2 me gusta, confirma tu selección y crearemos una playlist rápida con los artistas que fueron un match' modalimg={cupidoimg} />}
            <GeneralHeader link='/home' title='Cupido Musical' />

            <div className='cupido-artist'>
                {artistas.map(artista => {
                    return (
                        <TarjetaArtista
                            className='swipe'
                            key={artista.artista}
                            preventSwipe={['up', 'down']}
                        >
                            <div className='tarjeta'>
                                <div className='tarjeta-img'>
                                    <img className='artista-img' src={`../../imagenes${artista.imagen}`} />
                                </div>
                                <p>{artista.artista}</p>
                            </div>
                        </TarjetaArtista>
                    );
                })}


                <div className='like'></div>
                <div className='dislike'></div>
            </div>

            <BotonRegistro bgcolor='cupido-button' txt='Crear Playlist' />

        </div>
    )
}

export default Cupido;