import React from 'react';
import '../navbarcomponent/navbar.css';
import lupa from '../../assets/icons/lupainactiva.svg';
import inicio from '../../assets/icons/inicioinactivo.svg';
import amigos from '../../assets/icons/amigosinactivo.svg';
import perfil from '../../assets/icons/perfilinactivo.svg';

function NavBar() {
    return (
        <div className='nav'>
            <div className='inicio'><img src={inicio} /></div>
            <div className='buscador'><img src={lupa} /></div>
            <div className='perfil'><img src={perfil} /></div>
            <div className='amigos'><img src={amigos} /></div>
        </div>
    )
}

export default NavBar