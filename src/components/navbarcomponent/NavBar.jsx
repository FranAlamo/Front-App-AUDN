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

function NavBar() {
    const [activeImage, setActiveImage] = useState(null);
    const navigate = useNavigate();

    const handleImageClick = (image, path) => {
        setActiveImage(image);
        navigate(path);
    };

    return (
        <div className='nav'>
            <div className='inicio' onClick={() => handleImageClick('imagen1', '/home')}>
                <img src={activeImage === 'imagen1' ? inicioactivo : inicio} />
            </div>
            <div className='buscador' onClick={() => handleImageClick('imagen2', '/buscador')}>
                <img src={activeImage === 'imagen2' ? lupaactiva : lupa} />
            </div>
            <div className='perfil' onClick={() => handleImageClick('imagen3', '/perfil')}>
                <img src={activeImage === 'imagen3' ? perfilactivo : perfil} />
            </div>
            <div className='amigos'><img src={amigos} /></div>
        </div>
    );
}

export default NavBar;