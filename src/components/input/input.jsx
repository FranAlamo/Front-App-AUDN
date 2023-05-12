import React from "react";
import "./Input.css";
import { useNavigate } from "react-router-dom";

function InputComponent(props) {
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };
  return (
    <div className={props.bgcolor}>
      {props.img ? <img src={props.img} onClick={() => handleImageClick(props.imgOnClick)} /> : null}
      <input classname='input' type={props.type} value={props.value} onChange={props.onChange}></input>
    </div>
  );
}

export default InputComponent;
