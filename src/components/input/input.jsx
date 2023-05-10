import React from "react";
import "./Input.css";

function InputComponent(props) {
  return (
    <div>
      <input
        className={props.bgcolor}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default InputComponent;
