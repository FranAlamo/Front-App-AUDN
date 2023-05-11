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
<<<<<<< HEAD
      {props.img ? <img src={props.img} onClick={() => handleImageClick(props.imgOnClick)} /> : null}
      <input classname='input' type={props.type} value={props.value} onChange={props.onChange}></input>
=======
      {props.img ? (
        <img
          src={props.img}
          onClick={() => handleImageClick(props.imgOnClick)}
        />
      ) : null}
   <input
   
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    ></input>
>>>>>>> e02c2b8de5f1a33e2a340b0b5fc74d0ca8d93331
    </div>
  );
}

export default InputComponent;
