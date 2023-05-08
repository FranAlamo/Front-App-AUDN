import React from 'react';
import HeaderInicio from '../../components/HeaderInicio/HeaderInicio';
import NavBar from '../../components/navbarcomponent/NavBar';
import BodyHome from '../../components/BodyHome/BodyHome';


function Home() {
    return (
        <div>
            <HeaderInicio/>
            <BodyHome></BodyHome>
            <NavBar activeImage={"imagen1"}/>
        </div>
    )
}

export default Home