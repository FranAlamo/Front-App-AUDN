import React from "react";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import NavBar from "../../components/navbarcomponent/NavBar";
import "./playlist.css";
import imagen1 from "../../assets/imagenes/Jazz/amy.jpg";
import imagen2 from "../../assets/imagenes/regueton/jBalvin.jpg";
import imagen3 from "../../assets/imagenes/regueton/ozuna.jpg";
import imagen4 from "../../assets/imagenes/Rock/guns.jpg";
import compartir from "../../assets/imagenes/playlist-images/compartir.png";
import check from "../../assets/icons/verified.svg";
import logoSmall from "../../assets/imagenes/playlist-images/logo-small.png";
import reload from "../../assets/icons/state=active.svg";
import copia from "../../assets/imagenes/playlist-images/copia.png";
import play from "../../assets/imagenes/playlist-images/play.png";
import aleatorio from "../../assets/icons/state=active-1.svg";
import threePoints from "../../assets/imagenes/playlist-images/three-points.png";

function Playlist() {
  return (
    <div>
      <header>
        <GeneralHeader title="Playlist Generada"> </GeneralHeader>
      </header>
      <div className="playlist-imagen">
        <img src={imagen1} alt="Imagen 1" className="img1" />
        <img src={imagen2} alt="Imagen 2" className="img2" />
        <img src={imagen3} alt="Imagen 3" className="img3" />
        <img src={imagen4} alt="Imagen 4" className="img4" />
      </div>
      <section className="playlist-minutos">
        <div className="playlist-compartir">
          <img src={logoSmall} alt="logo-small" className="img-logo" />
          <img src={check} alt="check" className="img-check" />
          <img src={compartir} alt="compartir" className="img-compartir" />
        </div>
        <div className="playlist-minutos_reload">
          <p>2:16</p>
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
          <div>
            <img src={imagen1} className="img-song" />
          </div>
          <div className="songs-container">
            <p className="song">Waiting for love</p>
            <p className="artist" >Avici</p>
          </div>
        </div>

        <div className="points">
          <img src={threePoints} alt="threePoints" />
        </div>
      </section>
      <div>
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default Playlist;
