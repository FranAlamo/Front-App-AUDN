import React from "react";
import "../musicaContextual/musicaContextual.css";
import BotonRegistro from "../../components/Boton/botonRegistro";
import GeneralHeader from "../../components/generalheader/GeneralHeader";
import InputComponent from "../../components/input/input";
function contextual() {
  return (
    <div className="contenedorContextual">
      <GeneralHeader link="/home" title="Música Contextual" />

      <div className="preguntasContextual">
        <label for="ocasion">¿Cuál es la ocasión?</label>
        <div class="dropdown">
          <button class="buscadorGris"></button>
          <div class="dropdown-content">
            <a href="#">Ejercicio Físico</a>
            <a href="#">Limpieza</a>
            <a href="#">Celebración</a>
            <a href="#">Dormir</a>
            <a href="#">Meditar</a>
            <a href="#">Social</a>
            <a href="#">Estudiar</a>
            <a href="#">Relajación</a>
            <a href="#">Viajando</a>
          </div>
        </div>

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
