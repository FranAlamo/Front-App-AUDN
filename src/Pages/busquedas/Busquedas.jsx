import React, { useState, useEffect } from 'react'
import InputComponent from '../../components/input/input.jsx'
import '../busquedas/busquedas.css';
import teclado from '../../assets/imagenes/teclado/keyboard.svg';
import arrow from '../../assets/icons/flecha-atras.svg';
import InputBuscador from '../../components/InputBuscador/InputBuscador.jsx';

function Busquedas() {
    const [artistas, setArtistas] = useState([]);
    let imgOnClick = '';
    let bgcolor = '';

    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState([])
    const [claseCSS, setClaseCSS] = useState('lista-busquedas');


    const searchSongs = (e) => {
        if (e.target.value) {
            setClaseCSS('oculto');
        } else {
            setClaseCSS('lista-busquedas');
        }
        setSearchTerm(e.target.value);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "searchTerm": searchTerm
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/songs/search", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (e.target.value === '') {
                    setSongs([]);
                } else {
                    setSongs(result);
                    console.log(songs);
                }
            })
            .catch(error => console.log('error', error));

    }

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
            const response = await fetch("http://localhost:8000/api/listado", requestOptions).then(response => { return response });

            if (response.ok) {
                const respuesta = await response.json();
                setArtistas(respuesta.musica);

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
        <div className='busquedas-container'>
            <div className="buscadorInput">
                <InputBuscador bgcolor='buscadorGris' img={arrow} path="/buscador" value={searchTerm}
                    onChange={searchSongs} />

                <div className='title-container'>
                    <p className="first-p">Búsquedas Recientes:</p>
                    <div className="busqueda-bar"></div>
                </div></div>

            <div className={claseCSS}>
                {artistas.map(artista => {
                    return (
                        <div className='artistaContainer' key={artista.artista}>
                            <img className='imgArtista' src={`../../imagenes${artista.imagen}`} />
                            <div className='nombreArtista'>
                                <p>{artista.artista}</p>
                                <p>{artista.nombre}</p>
                            </div>
                        </div>


                    );
                })}</div>

            <div className="searches-container">

                <div className="trend-grid">

                    {songs.length > 0 ? songs.map(song => {
                        return (<div

                            className="search-song-container">
                            <div className="search-song-image" >
                                <img src={`../../imagenes${song.imagen}`} alt="" />
                            </div>
                            <div className="search-song-text">
                                <p className='search-song-title'>{song.nombre}</p>
                                <p className='search-song-artist'>{song.artista}</p>
                            </div>
                        </div>
                        )
                    }) : null}



                </div>

            </div>
            <div className='teclado-container'>
                <p className="second-p">Borrar búsquedas Recientes:</p>
                <img className='teclado-busqueda' src={teclado} alt="teclado" />
            </div>
        </div>
    )
}

export default Busquedas