import React from 'react'






const Contactform = () => {
  return (
    <section className="contactform">
        <div className="container">
            <div className="formtitle">
                <h2>Leave us a message for any information.</h2>
            </div>
            <div className="contactmessage">
                <form onSubmit={enterContact} method="post">
                    <div>
                        <input type="text" name="firstName" id="firstName" placeholder="Name*" />
                        <span id="errorName"></span>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email*" />
                        <span id="errorEmail"></span>
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="80" rows="5" placeholder="Your Message*"></textarea>
                        <span id="errorMessage"></span>
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
    
    const messageInfo = {
        firstName: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
    }
        


    if (checkName(messageInfo.firstName) === false) {
        document.querySelector('#errorName').innerHTML = "You have to write a valid name"
    }
    else {
        document.querySelector('#errorName').innerHTML = ""
    }

    if (checkEmail(messageInfo.email) === false) {
        document.querySelector('#errorEmail').innerHTML = "You must enter an email address"
    }
    else {
        document.querySelector('#errorEmail').innerHTML = ""
    }

    if (checkMessage(messageInfo.message) === false) {
        document.querySelector('#errorMessage').innerHTML = "You must write your message"
    }
    else {
        document.querySelector('#errorMessage').innerHTML = ""
    }
}

 
function checkName(firstName) {
    if (firstName === "") {
        console.log("You must enter name")
        return false
    }
    else {
        if (firstName.length < 2) {
            console.log("You must enter valid name")
            return false
        }
    }
    return true
  
}

function checkEmail(email) {
    if (email === "") {
        console.log("You must enter email")
        return false
    }
    return true
  
}

function checkMessage(message) {
    if (message === "") {
        console.log("You must write message")
        return false
    }
    return true
  
}

export default Contactform