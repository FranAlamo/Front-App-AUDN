import React from "react";
import "../input/input.css";
import { useNavigate } from "react-router-dom";

function InputBuscador(props) {
    const navigate = useNavigate();
    const handleImageClick = (path) => {
        navigate(path);
    };

    return (
        <div className={props.bgcolor}>
            {props.img ? (
                <img
                    src={props.img}
                    onClick={() => handleImageClick(props.path)}
                />
            ) : null}
            <input
                className="input"

            />
        </div>
    );
}

export default InputBuscador;