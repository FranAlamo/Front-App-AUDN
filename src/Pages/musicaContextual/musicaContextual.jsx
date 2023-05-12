import React from "react";
import "../musicaContextual/musicaContextual.css";
import BotonRegistro from "../../components/Boton/botonRegistro";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import InputComponent from "../../components/input/input";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import musicaContextualModal from "../../assets/imagenes/Musica-contextual/preguntaContextual.png";

function contextual() {
  let link = "";
  let title = "";
  let txt = "";
  let modaltitle = "";
  let modaltxt = "";
  let modalimg = null;
  let bgcolor = "";


  const [generosActivos, setGenerosActivos] = useState([]);

  const [modalVisible, setModalVisible] = useState(true);

  const ocultarModal = () => {
    setModalVisible(false);
  };


  const changeActive = (genero) => {
    const indexGenero = generosActivos.findIndex((cadaGenero) => cadaGenero === genero)
    const nuevosGeneros = [...generosActivos]
    if (indexGenero === -1) {
      nuevosGeneros.push(genero)
    } else {
      nuevosGeneros.splice(indexGenero, 1)
    }
    setGenerosActivos(nuevosGeneros)
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
        <BotonRegistro txt="Rock" active={generosActivos.includes("Rock")} onClick={() => changeActive("Rock")} />
        <BotonRegistro txt="Country" />
        <BotonRegistro txt="Soul" />
        <BotonRegistro txt="Jazz" active={generosActivos.includes("Jazz")} onClick={() => changeActive("Jazz")} />

        <BotonRegistro txt="Cumbia" active={generosActivos.includes("Cumbia")} onClick={() => changeActive("Cumbia")} />
        <BotonRegistro txt="Hip-hop" />
        <BotonRegistro txt="Pop" />
        <BotonRegistro txt="Reggaeton" active={generosActivos.includes("Reggaeton")} onClick={() => changeActive("Reggaeton")} />

        <BotonRegistro txt="Folklore" active={generosActivos.includes("Folklore")} onClick={() => changeActive("Folklore")} />
        <BotonRegistro txt="R&B" />
        <BotonRegistro txt="Clásico" />
        <BotonRegistro txt="Alternativo" />
        <BotonRegistro txt="Ambiente" />
        <BotonRegistro txt="EDM" />
        <div className="todosGeneros2">
          <BotonRegistro txt="Electrónica" />
          <BotonRegistro txt="Disco" />
          <BotonRegistro txt="New Age" />
          <BotonRegistro txt="Punk" />
        </div>
      </div>
      <div>
        <BotonRegistro bgcolor="crearPlaylist" txt="Crear playist" />
      </div>
    </div>
  );
}



export default contextual;
