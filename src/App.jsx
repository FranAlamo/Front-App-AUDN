import { useState } from 'react'

import './App.css'
import HeaderInicio from './components/HeaderInicio/HeaderInicio'
import NavBar from './components/navbarcomponent/NavBar'

function App() {


  return (
    <div className='app'>
      <HeaderInicio/>   
      <NavBar />
    </div>
  )
}

export default App
