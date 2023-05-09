import React from 'react'
import "../BodyHome/bodyHome.css"
import cherub from '../../assets/imagenes/Cupido-musical/cherub.png'
import headphone from '../../assets/imagenes/Cupido-musical/headphones.png'
import addons from '../../assets/imagenes/Musica-contextual/add-ons.png'
import map from '../../assets/imagenes/Musica-contextual/map.png'
import { Link } from 'react-router-dom'

function BodyHome() {
  return (
    <div className='body-home'>
      <Link to='/cupido'>
        <div className='button-container'>
          <button className='button-image'><img src={cherub} alt="" className='image-cherub' /> <img src={headphone} alt="" className='image-headphone' /> </button>
          <button className='button-text'>
            <h3>Cupido musical</h3>
            <p>Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
          </button>
        </div>
      </Link>

      <div className='button-container'>
        <button className='button-image'> <img src={addons} alt="" className='image-addons' /> <img src={map} alt="" className='image-map' /> </button>
        <button className='button-text'>
          <h3>Musica contextual</h3>
          <p>Creamos la playlist perfecta para cualquier situación.</p>
        </button>
      </div>
    </div>
  )
}

export default BodyHome;