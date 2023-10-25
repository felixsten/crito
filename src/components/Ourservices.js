import React from 'react'
import img_backgroundLines4 from '../assets/images/backgroundlines4.svg'


const Ourservices = () => {
  return (
    <section className="our-services">
        <img className="background-lines-4" src={img_backgroundLines4} alt="" />
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="services">
                <div>
                    <div className="topborder"></div>
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="circlebutton">
                        <a className="btn-black" href="#"><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                </div>
                <div>
                    <div className="topborder"></div>
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="circlebutton">
                        <a className="btn-black" href="#"><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div>
                    <div className="topborder"></div>
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="circlebutton">
                        <a className="btn-black" href="#"><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div>
                    <div className="topborder"></div>
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="circlebutton">
                        <a className="btn-black" href="#"><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
            <div className="browse-services">
                <a className="btn-transparent" href="services.html">Browse Services <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Ourservices