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
  let bgcolor = "";
  let txt = "";
  let modaltitle = "";
  let modaltxt = "";
  let modalimg = null;

  const [modalVisible, setModalVisible] = useState(true);

  const ocultarModal = () => {
    setModalVisible(false);
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
        <BotonRegistro txt="Rock" bgcolor="botonAjustable" />
        <BotonRegistro txt="Country" bgcolor="botonAjustable" />
        <BotonRegistro txt="Soul" bgcolor="botonAjustable" />
        <BotonRegistro txt="Jazz" bgcolor="botonAjustable" />
        <BotonRegistro txt="Blues" bgcolor="botonAjustable" />
        <BotonRegistro txt="Hip-hop" bgcolor="botonAjustable" />
        <BotonRegistro txt="Pop" bgcolor="botonAjustable" />
        <BotonRegistro txt="Reggae" bgcolor="botonAjustable" />
        <BotonRegistro txt="Folk" bgcolor="botonAjustable" />
        <BotonRegistro txt="R&B" bgcolor="botonAjustable" />
        <BotonRegistro txt="Clásico" bgcolor="botonAjustable" />
        <BotonRegistro txt="Alternativo" bgcolor="botonAjustable" />
        <BotonRegistro txt="Ambiente" bgcolor="botonAjustable" />
        <BotonRegistro txt="EDM" bgcolor="botonAjustable" />
        <div className="todosGeneros2">
          <BotonRegistro txt="Electrónica" bgcolor="botonAjustable" />
          <BotonRegistro txt="Disco" bgcolor="botonAjustable" />
          <BotonRegistro txt="New Age" bgcolor="botonAjustable" />
          <BotonRegistro txt="Punk" bgcolor="botonAjustable" />
        </div>
      </div>
      <div>
        <BotonRegistro bgcolor="crearPlaylist" txt="Crear playist" />
      </div>
    </div>
  );
}

export default contextual;
