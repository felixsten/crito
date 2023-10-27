import React from 'react'






const Contactform = () => {
  return (
    <section className="contactform">
        <div className="container">
            <div className="formtitle">
                <h2>Leave us a message for any information.</h2>
            </div>
            <div className="contactmessage">
                <form onSubmit={enterContact} method="post" action="testing.php">
                    <div>
                        <input type="text" name="firstName" id="name" placeholder="Name*" />
                        <span>You have to write your name</span>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email*" />
                        <span>You have to write your email</span>
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="80" rows="5" placeholder="Your Message*"></textarea>
                        <span>You have to write your message</span>
                    </div>
                    <button type="submit" className="btn-yellow">Send Message <i className="fa-solid fa-arrow-right-long"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

function enterContact(e) {
    e.preventDefault()
  
    console.log("formular test")
  }

  


export default Contactform