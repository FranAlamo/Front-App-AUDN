import React from 'react';
import '../navbarcomponent/navbar.css';
import lupa from '../../assets/icons/lupainactiva.svg';
import inicio from '../../assets/icons/inicioinactivo.svg';
import amigos from '../../assets/icons/amigosinactivo.svg';
import perfil from '../../assets/icons/perfilinactivo.svg';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='nav'>
            <Link to={"/home"}><div className='inicio'><img src={inicio} /></div></Link>
            <Link to={"/buscador"}><div className='buscador'><img src={lupa} /></div></Link>
            <Link to={"/perfil"}><div className='perfil'><img src={perfil} /></div></Link>
            <div className='amigos'><img src={amigos} /></div>
        </div>
    )
}

export default NavBar