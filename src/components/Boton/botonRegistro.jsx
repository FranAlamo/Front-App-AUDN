import React from "react";
import "../Boton/BotonRegistro.css";

const BotonRegistro = ({
  active,
  txt,
  onClick,
  bgcolor = "botonAjustable",
}) => {
  const buttonType = !active ? bgcolor : "botonAjustableNegro";

  return (
    <button onClick={onClick} className={buttonType}>
      {txt}
    </button>
  );
};

export default BotonRegistro;
