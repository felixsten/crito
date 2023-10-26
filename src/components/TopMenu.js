import React from 'react'

import { NavLink, Link } from 'react-router-dom'

const TopMenu = () => {
  return (
        <div className="topmenu">
            <div className="topinfo">
                <div className="contactinfo">
                    <div className="cinfo-box">
                        <i className="fa-solid fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="cinfo-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="cinfo-box last">
                        <i className="fa-solid fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <a href="services.html">Service</a>
                    <a href="news.html">News</a>
                    <NavLink to="/Contacts">Contact</NavLink>
                </nav>
                <a className="btn-yellow" href="login.html">Login <i className="fa-solid fa-arrow-right-long"></i></a>

            </div>
        </div>
  )
}

export default TopMenu