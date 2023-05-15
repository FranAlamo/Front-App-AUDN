import React, { useState, useEffect } from 'react'
import InputComponent from '../../components/input/input.jsx'
import '../busquedas/busquedas.css';
import teclado from '../../assets/imagenes/teclado/keyboard.svg';
import arrow from '../../assets/icons/flecha-atras.svg';

function Busquedas() {
    const [artistas, setArtistas] = useState([]);
    let imgOnClick = '';
    let bgcolor = '';
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
            console.log(response)
            if (response.ok) {
                const respuesta = await response.json();
                setArtistas(respuesta.musica);
                console.log(artistas)
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
                <InputComponent bgcolor='buscadorGris' img={arrow} imgOnClick='/buscador' />

                <div className='title-container'>
                    <p className="first-p">Búsquedas Recientes:</p>
                    <div className="busqueda-bar"></div>
                </div></div>

            <div className="lista-busquedas">
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
            <div className='teclado-container'>
                <p className="second-p">Borrar búsquedas Recientes:</p>
                <img className='teclado-busqueda' src={teclado} alt="teclado" />
            </div>
        </div>
    )
}

export default Busquedas