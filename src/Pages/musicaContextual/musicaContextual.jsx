import React from "react";
import "../musicaContextual/musicaContextual.css";
import BotonRegistro from "../../components/Boton/botonRegistro";
function contextual() {
  return (
    <div className="contenedorContextual">
      <h3 className="tituloMusicaContextual">Música Contextual</h3>
      <div className="preguntasContextual">
        <section className="ocasion">¿Cuál es la ocasión?</section>
        <BotonRegistro txt="Actividad" />

        <section className="sientes">¿Cómo te sientes?</section>
        <BotonRegistro txt="Estado de ánimo" />

        <section className="clima">¿Cómo está el clima?</section>
        <BotonRegistro txt="Clima" />
      </div>
      <div className="seleccionContextual">
        <h1 className="generos">Selecciona hasta 3 géneros</h1>

        <BotonRegistro txt="Clásico" bgcolor="botonAjustable" />
        <BotonRegistro txt="Electrónica" bgcolor="botonAjustable" />
        <BotonRegistro txt="Country" bgcolor="botonAjustable" />
        <BotonRegistro txt="Soul" bgcolor="botonAjustable" />
        <BotonRegistro txt="Blues" bgcolor="botonAjustable" />
        <BotonRegistro txt="Hip-Hop" bgcolor="botonAjustable" />
        <BotonRegistro txt="Pop" bgcolor="botonAjustable" />
        <BotonRegistro txt="Reggae" bgcolor="botonAjustable" />
        <BotonRegistro txt="Folk" bgcolor="botonAjustable" />
        <BotonRegistro txt="R&B" bgcolor="botonAjustable" />
        <BotonRegistro txt="Alternativo" bgcolor="botonAjustable" />
        <BotonRegistro txt="Ambiente" bgcolor="botonAjustable" />
        <BotonRegistro txt="EDM" bgcolor="botonAjustable" />
        <BotonRegistro txt="New Age" bgcolor="botonAjustable" />
        <BotonRegistro txt="Jazz" bgcolor="botonAjustable" />
        <BotonRegistro txt="Disco" bgcolor="botonAjustable" />
        <BotonRegistro txt="Punk" bgcolor="botonAjustable" />
        <BotonRegistro txt="Rock" bgcolor="botonAjustable" />
      </div>

      <div>
        <BotonRegistro className="crearPlayist" txt="Crear playist" />
      </div>
    </div>
  );
}

export default contextual;
