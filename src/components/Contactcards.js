import React from 'react'

const Contactcards = () => {
  return (
    <section className="contactcards">
        <div className="container">
            <div className="cardparent">
                <div className="card">
                    <div className="cardicon">
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h3>Visit us</h3>
                    </div>
                    <div className="cardinfo">
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardicon">
                        <div>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <h3>Call us</h3>
                    </div>
                    <div className="cardinfo">
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardicon">
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h3>Email us</h3>
                    </div>
                    <div className="cardinfo">
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactcards