import React from 'react'
import Modal from '../../components/modal/Modal';
import { useState, useEffect } from 'react';
import '../cupido/cupido.css';
import GeneralHeader from '../../components/generalheader/GeneralHeader';
import BotonRegistro from '../../components/Boton/botonRegistro';
import cupidoimg from '../../assets/imagenes/Cupido-musical/step=6.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import '../../components/BotonesSwipe/BotonesSwipe.css';
import { useNavigate } from 'react-router-dom';


function Cupido() {
    const [artistasQuery, setArtistasQuery] = useState()
    const [buttonActive, setButtonActive] = useState(false);
    const [artistasFavoritos, setArtistasFavoritos] = useState([]);
    const [artistas, setArtistas] = useState([]);
    const [currentArtist, setCurrentArtist] = useState(-1);
    const [buttonColor, setButtonColor] = useState("inactivo");
    const navigate = useNavigate();

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
                setCurrentArtist(0)
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

    const handleFavoriteClick = () => {
        const nombreArtista = artistas[currentArtist]?.artista;
        favorito(nombreArtista);
    }

    const favorito = (artista) => {
        setCurrentArtist(currentArtist + 1)
        const indexArtista = artistasFavoritos.findIndex(
            (cadaArtista) => cadaArtista === artista
        );
        const nuevosArtistas = [...artistasFavoritos];
        if (indexArtista === -1) {
            nuevosArtistas.push(artista);
        } else {
            nuevosArtistas.splice(indexArtista, 1);
        }
        setArtistasFavoritos(nuevosArtistas);
        setArtistasQuery(nuevosArtistas.join());
        console.log(artistasQuery);
    }

    const goToPlaylist = () => {
        if (artistasFavoritos.length)


            navigate("/home/musicacontextual/playlist", {
                state: { artistasQuery },
            });

    };

    useEffect(() => {
        if (artistasFavoritos.length > 1) {
            setButtonActive(true);
            setButtonColor("naranja");
        } else {
            setButtonActive(false);
            setButtonColor("inactivo");
        }
    }, [artistasFavoritos]);

    return (
        <div className='cupido'>
            {modalVisible && <Modal ocultarModal={ocultarModal} modaltitle='Cupido Musical' modaltxt='Luego de al menos 2 me gusta, confirma tu selección y crearemos una playlist rápida con los artistas que fueron un match' modalimg={cupidoimg} />}
            <GeneralHeader link='/home' title='Cupido Musical' />

            <div className='cupido-artist'>


                <div
                    className='swipe'
                    key={artistas[currentArtist]?.artista}
                    preventSwipe={['up', 'down']}
                >
                    <div className='tarjeta'>
                        <div className='tarjeta-img'>
                            <img className='artista-img' src={`../../imagenes${artistas[currentArtist]?.imagen}`} />
                            <div className='BotonesSwipe'>

                                <IconButton onClick={handleFavoriteClick} className='boton-favorite'>
                                    <FavoriteBorderIcon font='large' />
                                </IconButton>
                                <IconButton onClick={() => setCurrentArtist(currentArtist + 1)} className='boton-close'>
                                    <CloseIcon font='large' />
                                </IconButton>

                            </div>
                        </div>
                        <p className='artist-name'>{artistas[currentArtist]?.artista}</p>
                    </div>

                </div>





            </div>
            <div className='boton-container'>
                <BotonRegistro disabled={!buttonActive} onClick={goToPlaylist} bgcolor={buttonColor} txt='Crear Playlist' />
            </div>

        </div>
    )
}

export default Cupido;