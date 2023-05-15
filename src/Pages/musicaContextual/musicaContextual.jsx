import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../musicaContextual/musicaContextual.css";
import musicaContextualModal from "../../assets/imagenes/Musica-contextual/preguntaContextual.png";
import BotonRegistro from "../../components/Boton/botonRegistro";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import InputComponent from "../../components/input/input";
import Modal from "../../components/modal/Modal";

function contextual() {
  const [generos, setGeneros] = useState([]);
  const [buttonReady, setButtonReady] = useState(false);
  const [generosActivos, setGenerosActivos] = useState([]);
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(true);

  const cargarGeneros = async () => {
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
        "http://localhost:8000/api/generos",
        requestOptions
      ).then((response) => {
        return response;
      });

      if (response.ok) {
        const respuesta = await response.json();
        setGeneros(respuesta.generos);
      } else {
        alert("Ocurrio un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    cargarGeneros();
  }, []);

  useEffect(() => {
    if (generosActivos.length) {
      setButtonReady(true);
    } else {
      setButtonReady(false);
    }
  }, [generosActivos]);

  const ocultarModal = () => {
    setModalVisible(false);
  };

  const changeActive = (genero) => {
    const indexGenero = generosActivos.findIndex(
      (cadaGenero) => cadaGenero === genero
    );
    const nuevosGeneros = [...generosActivos];
    if (indexGenero === -1) {
      nuevosGeneros.push(genero);
    } else {
      nuevosGeneros.splice(indexGenero, 1);
    }
    setGenerosActivos(nuevosGeneros);
  };

  const goToPlaylist = () => {
    if (generosActivos.length)
      navigate("/home/musicacontextual/playlist", {
        state: { generosActivos },
      });
  };

  return (
    <div className="contenedorContextual">
      {modalVisible && (
        <Modal
          ocultarModal={ocultarModal}
          modaltitle="Música Contextual"
          modaltxt="Llena cuantos campos quieras y crearemos una playlist en base a tus respuestas"
          modalimg={musicaContextualModal}
        />
      )}

      <GeneralHeader link="/home" title="Música Contextual" />

      <div className="preguntasContextual">
        <label for="ocasion" className="ocasion">
          ¿Cuál es la ocasión?
        </label>

        <select className="buscadorGris" autofocus>
          <option value="Ejercicio Físico">Ejercicio Físico</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Celebración">Celebración</option>
          <option value="Dormir">Dormir</option>
          <option value="Meditar">Meditar</option>
          <option value="Social">Social</option>
          <option value="Estudiar">Estudiar</option>
          <option value="Relajación">Relajación</option>
          <option value="Viajando">Viajando</option>
        </select>

        <section className="sientes">¿Cómo te sientes?</section>
        <InputComponent bgcolor="buscadorGris" />

        <section className="clima">¿Cómo está el clima?</section>
        <InputComponent bgcolor="buscadorGris" />
      </div>
      <div className="seleccionContextual">
        <h1 className="generos">Selecciona hasta 3 géneros</h1>
      </div>

      <div className="todosGeneros1">
        {generos.map((genero) => {
          return (
            <BotonRegistro
              txt={genero.nombre_genero}
              active={generosActivos.includes(genero.nombre_genero)}
              onClick={() => changeActive(genero.nombre_genero)}
            />
          );
        })}

        {/* <BotonRegistro txt="Country" />

        <BotonRegistro txt="Pop" />

        <BotonRegistro txt="Alternativo" />
        <BotonRegistro txt="Hip-hop" />

        <BotonRegistro txt="Electrónica" />
        <BotonRegistro txt="EDM" />

        <BotonRegistro txt="R&B" />
        <BotonRegistro txt="Soul" />
        <BotonRegistro txt="Clásico" />
        <BotonRegistro txt="Punk" />

        <div className="todosGeneros2">
          <BotonRegistro txt="Ambiente" />
          <BotonRegistro txt="Disco" />
          <BotonRegistro txt="New Age" />
        </div> */}
      </div>
      <div>
        <BotonRegistro
          bgcolor="crearPlaylist"
          txt="Crear playlist"
          onClick={goToPlaylist}
          active={buttonReady}
        />
      </div>
    </div>
  );
}

export default contextual;
