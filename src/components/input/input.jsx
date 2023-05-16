import React, { useState } from "react";
import "./Input.css";
import { useNavigate } from "react-router-dom";

function InputComponent(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);



  const handleImageClick = (path) => {
    navigate(path);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = props.type === "password" && !showPassword ? "password" : "text";

  return (
    <div className={props.bgcolor}>
      {props.img ? (
        <img
          src={showPassword ? props.imgOpen : props.imgClosed}
          onClick={handleToggleShowPassword}
        />
      ) : null}
      <input
        className="input"
        type={inputType}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputComponent;