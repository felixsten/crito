import React from 'react'
import img_backgroundLines1 from '../assets/images/backgroundlines1.svg'
import img_showcaseImage from '../assets/images/showcase-image.svg'

const Showcase = () => {
  return (
    <section className="showcase">
        <img className="background-lines-1" src={img_backgroundLines1} alt="" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-arrow-right-long"></i></a>
                <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-arrow-right-long"></i></a>

            </div>
            <img src={img_showcaseImage} alt="picture of a man in a suit reading a tablet" />
        </div>
    </section>
  )
}

export default Showcase