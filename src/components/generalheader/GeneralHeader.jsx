import React from 'react';
import flecha from '../../assets/icons/flecha-atras.svg';
import { Link } from 'react-router-dom';
import '../generalheader/generalheader.css';


function GeneralHeader(props) {

    return (
        <div className='general-header'>
            <Link to={props.link}>
                <div className='arrow'>
                    <img src={flecha} alt="" />
                </div>
            </Link>

            <p className='title-header'>
                {props.title}
            </p>
        </div>

    )
}

export default GeneralHeader;