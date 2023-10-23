import React from 'react'
import TopMenu from './TopMenu'

import img_Logo from '../assets/images/Logo.svg'

const Header = () => {
  return (
    <header>
                <div className="container">
            <a href="index.html"><img src={img_Logo} alt="Crito logo" /></a>
            <i className="bars fa-solid fa-bars"></i>
            <TopMenu />


        </div>


    </header>
  )
}

export default Header