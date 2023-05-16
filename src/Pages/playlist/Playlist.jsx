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
import threePoints from "../../assets/imagenes/playlist-images/three-points.png";

function Playlist() {
  const { state } = useLocation();
  const [artistas, setArtistas] = useState(
    state.artistasQuery
  );
  const [generos, setGeneros] = useState(
    state.generosQuery
  );
  const [canciones, setCanciones] = useState([]);
  const [cancionesFotos, setCancionesFotos] = useState([]);

  function SongItem({ cancion }) {
    return (
      <div className="song-item">
        <img src={`../../imagenes${cancion.imagen}`} className="img-song" />
        <span className="song">{cancion.artista}</span>
        <span className="artist">{cancion.nombre_genero}</span>
      </div>
    );
  }
  
  const cargarMusicaPorArtista = async () => {
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
        `http://localhost:8000/api/porArtista?artista=${artistas}`,
        requestOptions
      ).then((response) => {

        return response;

      });

      if (response.ok) {
        const respuesta = await response.json();
        setCanciones(respuesta.musica);
        console.log(respuesta);
        if (respuesta.musica.length > 4) {
          setCancionesFotos(respuesta.musica);
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
        `http://localhost:8000/api/porGenero?nombre_genero=${generos}`,
        requestOptions
      ).then((response) => {

        return response;

      });

      if (response.ok) {
        const respuesta = await response.json();
        setCanciones(respuesta.musica);
        console.log(respuesta);
        if (respuesta.musica.length > 4) {
          setCancionesFotos(respuesta.musica);
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
  try {
    if (artistas !== undefined) {
      useEffect(() => {
        cargarMusicaPorArtista();
      }, [artistas]);
    } else {
      useEffect(() => {
        cargarMusicaPorGenero();
      }, [generos]);
    }
  } catch (error) {
    console.log(error);
  }



  return (
    <div>
      <div className="top-container-playlist">
        <header>
          <GeneralHeader link="/home" title="Playlist Generada"> </GeneralHeader>
        </header>

        <div className="playlist-imagen">
          <div className="img" style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
            {cancionesFotos[0] && cancionesFotos[0].imagen && (
              <img src={`../../imagenes${cancionesFotos[0].imagen}`} />
            )}
          </div>
          <div className="img" style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
            {cancionesFotos[1] && cancionesFotos[1].imagen && (
              <img src={`../../imagenes${cancionesFotos[1].imagen}`} />
            )}
          </div>
          <div className="img" style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
            {cancionesFotos[2] && cancionesFotos[2].imagen && (
              <img src={`../../imagenes${cancionesFotos[2].imagen}`} />
            )}
          </div>
          <div className="img" style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
            {cancionesFotos[3] && cancionesFotos[3].imagen && (
              <img src={`../../imagenes${cancionesFotos[3].imagen}`} />
            )}
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
      </div>
      <section className="playlist-container">
        {cancionesFotos.map((cancion) => (
          <div className="playlist-container_song">
            <div>
              <img
                src={`../../imagenes${cancion.imagen}`}
                className="img-song"
              />
            </div>
            <div className="songs-container">
              <span className="song">{cancion.nombre}</span>
              <span className="artist">{cancion.artista}</span>
            </div>

            <div className="points">
              <img src={threePoints} alt="threePoints" />
            </div>
          </div>
        ))}
      </section>
      <div>
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default Playlist;
