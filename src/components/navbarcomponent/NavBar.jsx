import React from 'react';
import '../navbarcomponent/navbar.css';
import lupaactiva from '../../assets/icons/lupaactiva.svg';
import inicioactivo from '../../assets/icons/inicioactivo.svg';
import perfilactivo from '../../assets/icons/perfilactivo.svg';
import lupa from '../../assets/icons/lupainactiva.svg';
import inicio from '../../assets/icons/inicioinactivo.svg';
import amigos from '../../assets/icons/amigosinactivo.svg';
import perfil from '../../assets/icons/perfilinactivo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
    const [activeImage, setActiveImage] = useState(props.activeImage || null);
    const navigate = useNavigate();

    const handleImageClick = (image, path) => {
        setActiveImage(image);
        navigate(path);
    };

    return (
        <div className='nav'>
            <div className='item inicio' onClick={() => handleImageClick('imagen1', '/home')}>
                <img src={activeImage === 'imagen1' ? inicioactivo : inicio} />
                <p className='navtxt'>Inicio</p>
            </div>
            <div className='item buscador' onClick={() => handleImageClick('imagen2', '/buscador')}>
                <img src={activeImage === 'imagen2' ? lupaactiva : lupa} />
                <p className='navtxt'>Buscador</p>
            </div>
            <div className='item profile' onClick={() => handleImageClick('imagen3', '/perfil')}>
                <img src={activeImage === 'imagen3' ? perfilactivo : perfil} />
                <p className='navtxt'>Perfil</p>
            </div>
            <div className='item amigos'>
                <img src={amigos} />
                <p className='navtxt'>Amigos</p>
            </div>
        </div>
    );
}

export default NavBar;