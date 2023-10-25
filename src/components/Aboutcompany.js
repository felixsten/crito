import React from 'react'
import img_backgroundLines2 from '../assets/images/backgroundlines2.svg'
import img_aboutImage from '../assets/images/about-image.png'


const Aboutcompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <img className="background-lines-2" src={img_backgroundLines2} alt="" />
            <div className="about">
                <img className="about-image" src={img_aboutImage} alt="smiling woman walking down hallway with laptop in hand" />
                <div className="blue-card">
                    <p className="name-text">Samantha Brown, </p>
                    <p className="red-text">Founder</p>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="about-information">
                <div className="section-title">
                    <p>About company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    
                </div>
                <div className="buttonsparent">
                    <div>
                        <a className="btn-black" href="about.html">Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a className="btn-transparent" href="services.html"><i className="fa-solid fa-play"></i></a>
                        <p>Intro video</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutcompany