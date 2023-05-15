import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import NavBar from "../../components/navbarcomponent/NavBar";
import "./playlist.css";
import compartir from "../../assets/imagenes/playlist-images/compartir.png";
import check from "../../assets/icons/verified.svg";
import logoSmall from "../../assets/imagenes/playlist-images/logo-small.png";
import reload from "../../assets/icons/state=active.svg";
import copia from "../../assets/imagenes/playlist-images/copia.png";
import play from "../../assets/imagenes/playlist-images/play.png";
import aleatorio from "../../assets/icons/state=active-1.svg";

function Playlist() {
  const { state } = useLocation();
  const [generos, setGeneros] = useState(
    state.generosActivos ? state.generosActivos : []
  );
  const [canciones, setCanciones] = useState([]);
  const [cancionesFotos, setCancionesFotos] = useState([]);

  const cargarMusicaPorGenero = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `http://localhost:8000/api/porGenero/${generos[0]}`,
        requestOptions
      ).then((response) => {
        return response;
      });

      if (response.ok) {
        const respuesta = await response.json();
        setCanciones(respuesta.musica);
        if (respuesta.musica.length > 4) {
          setCancionesFotos(respuesta.musica.splice(0, 4));
        } else {
          setCancionesFotos(respuesta.musica);
        }
      } else {
        alert("Ocurrio un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (generos.length) cargarMusicaPorGenero();
  }, [generos]);

  return (
    <div>
      <header>
        <GeneralHeader title="Playlist Generada"> </GeneralHeader>
      </header>
      <div className="playlist-imagen">
        <div className="img-song">
          {cancionesFotos.map((cancion) => (
            <div>
              <img src={`../../imagenes${cancion.imagen}`} />
            </div>
          ))}
        </div>
      </div>
      <section className="playlist-minutos">
        <div className="playlist-compartir">
          <img src={logoSmall} alt="logo-small" className="img-logo" />
          <img src={check} alt="check" className="img-check" />
          <img src={compartir} alt="compartir" className="img-compartir" />
        </div>
        <div className="playlist-minutos_reload">
          <p></p>
          <img src={reload} alt="reload" className="img-reload" />
        </div>
      </section>
      <section className="playlist-play">
        <div className="playlist-copia">
          <img src={copia} alt="copia" className="img-copia" />
          <p>Crear Copia</p>
        </div>
        <div className="playlist-boton_play">
          <img src={aleatorio} alt="aleatorio" className="img-aleatorio" />
          <img src={play} alt="play" className="img-play" />
        </div>
      </section>
      <section className="playlist-container">
        <div className="playlist-container_song">
          <div></div>
          <div className="songs-container">
            {canciones.map((cancion) => (
              <div>
                <img src={`../../imagenes${cancion.imagen}`} />
                <span>{cancion.artista}</span>
                <span>{cancion.nombre_genero}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default Playlist;
