import React, {useMemo} from 'react';
import NavBar from '../../components/navbarcomponent/NavBar';
import profileimg from '../../assets/imagenes/perfil/profileimg.png';
import config from '../../assets/imagenes/perfil/Vector.png';
import '../perfil/perfil.css';
import imgdiv from '../../assets/imagenes/perfil/div.png';
import img1 from '../../assets/imagenes/perfil/cover-1.png';
import img2 from '../../assets/imagenes/perfil/cover-2.png';
import img3 from '../../assets/imagenes/perfil/cover-3.png';
import img4 from '../../assets/imagenes/perfil/cover-4.png';
import { Link } from 'react-router-dom';

function Perfil() {
 const user = useMemo(() => ({name:localStorage.getItem("name")}), [])
 const userEmail = useMemo(() => ({email:localStorage.getItem("email")}), [])
    return (
        <div className='perfil'>
            <div className='top-perfil'>
                <div className='user'>
                    <img src={profileimg} alt="" />
                    <h1>{user.name}</h1>
                    <p>{userEmail.email}</p>
                </div>
                <Link to='/configuracion'>
                    <div className='settings'>
                        <img src={config} alt="" />
                    </div>
                </Link>

            </div>
            <div className='middle-perfil'>
                <p className='perfil-title'>Mis Playlists</p>
                <div className='bar'></div>
                <div className='botoncito'>
                    <p>Crear Playlist</p>
                </div>
            </div>
            <div className='bottom'>
                <div className='playlist'>
                    <img src={imgdiv} alt="" />
                    <div className='text'>
                        <p className='bold'>Me fui de gira mabel</p>
                        <p className='gray'>Playlist 1</p>
                    </div>

                </div>
                <div className='playlist'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <div className='text'>
                        <p className='bold'>Otras</p>
                        <p className='gray'>Playlist 2</p>
                    </div>
                </div>
            </div>
            <NavBar activeImage={"imagen3"} />
        </div>
    )
}

export default Perfil