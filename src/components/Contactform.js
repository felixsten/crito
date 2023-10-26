import React from 'react'

const Contactform = () => {
  return (
    <section className="contactform">
        <div className="container">
            <div className="formtitle">
                <h2>Leave us a message for any information.</h2>
            </div>
            <div className="contactmessage">
                <form method="post">
                    <div>
                        <input type="text" name="name" id="name" placeholder="Name*" />
                    </div>
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email*" />
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="80" rows="5" placeholder="Your Message*"></textarea>
                    </div>
                    <button type="submit" className="btn-yellow" href="messages.html">Send Message <i className="fa-solid fa-arrow-right-long"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contactform