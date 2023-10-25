import React from 'react'
import img_chooseUs from '../assets/images/choose-us-image.png'

const Chooseus = () => {
  return (
    <section className="why-choose-us">
        <div className="backgroundblock"></div>
        <div className="container">
            
            <div className="titleparent">
                <div className="section-title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>

            </div>

            <div className="sectionparent">
                <div className="choose-us">
                    <div>
                        <i className="fa-regular fa-thumbs-up"></i>
                        <h3>Process Excellence</h3>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    <div>
                        <i className="fa-regular fa-gem"></i>
                        <h3>Strategic Planning</h3>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    <div>
                        <i className="fa-solid fa-pencil"></i>
                        <h3>Experience Design</h3>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    <div>
                        <i className="fa-solid fa-gear"></i>
                        <h3>Artificial Inteligence</h3>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>

                    

                </div>

                <div className="choose-us-img">
                    <div>
                        <img src={img_chooseUs} alt="two women sitting at a desk talking" />
                    </div>
                </div>

            </div>


        </div>
    </section>
  )
}

export default Chooseus