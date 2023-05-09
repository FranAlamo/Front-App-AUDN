import React from "react";
import "../Boton/BotonRegistro.css";

const BotonRegistro = (props) => {
  return <button className={props.bgcolor}>{props.txt}</button>;
};

export default BotonRegistro;
