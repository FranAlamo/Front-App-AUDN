import React from "react";
import "./Input.css";

function InputComponent(props) {
  return (
    <div>
      <input className={props.bgcolor}></input>
    </div>
  );
}

export default InputComponent;
