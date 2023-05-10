import React from "react";
import "./Input.css";

function InputComponent(props) {
  return (
    <div>
      <input className={props.bgcolor} type={props.type} value={props.value} onChange={props.onChange} text={props.text}></input>
    </div>
  );
}

export default InputComponent;
