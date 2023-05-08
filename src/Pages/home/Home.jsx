import React from 'react';
import HeaderInicio from '../../components/HeaderInicio/HeaderInicio';
import NavBar from '../../components/navbarcomponent/NavBar';

function Home() {
    return (
        <div>
            <HeaderInicio/>
            <NavBar activeImage={"imagen1"}/>
        </div>
    )
}

export default Home