import React from 'react'
import img_backgroundLines6 from '../assets/images/backgroundlines6.svg'

const Contacttitle = () => {
  return (
    <section className="contacttitle">
        <img className="background-lines-6" src={img_backgroundLines6} alt="" />
        <div className="container">
            <div className="center-content">
                <p className="titlehome">Home</p>
                <p className="titlecontact">Contact</p>
            </div>
            <div className="center-content">
                <h1>Let's Connect</h1>
            </div>
        </div>
    </section>
  )
}

export default Contacttitle