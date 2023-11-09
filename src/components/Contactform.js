import React, { useState } from 'react'






const Contactform = () => {

    const [count, setCount] = useState(0)
    
    const handleButtonClick = () => {
        setCount(count + 1)

        
    }
    console.log('Number of times form button pressed: ' + count)

    const [formInfo, setformInfo] = useState({
        firstName: "",
        email: "",
        message: "",
    })

    const handleInfo = (event) => {
        setformInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
    }
    console.log(formInfo)
  return (
    <section className="contactform">
        <div className="container">
            <div className="formtitle">
                <h2>Leave us a message for any information.</h2>
            </div>
            <div className="contactmessage">
                <form onSubmit={enterContact} method="post" action="#">
                    <div>
                        <input type="text" name="firstName" id="firstName" placeholder="Name*" value={formInfo.firstName} onChange={handleInfo}/>
                        <span id="errorName"></span>
                    </div>
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email*" value={formInfo.email} onChange={handleInfo}/>
                        <span id="errorEmail"></span>
                    </div>
                    <div>
                        <textarea type="text" name="message" id="message" cols="80" rows="5" placeholder="Your Message*" value={formInfo.message} onChange={handleInfo}></textarea>
                        <span id="errorMessage"></span>
                    </div>
                    <button onClick={handleButtonClick} type="submit" className="btn-yellow">Send Message <i className="fa-solid fa-arrow-right-long"></i></button>
                    <div className="alert alert-success">
                        <strong>Form has been sent</strong>
                    </div>
                </form>
            </div>
        </div>
    </section>
    
  )
  
}



function enterContact(event) {
    
    event.preventDefault()
    


    const messageInfo = {
        firstName: event.target[0].value,
        email: event.target[1].value,
        message: event.target[2].value
    }
    
    let errors = []

    for (let i = 0; i < event.target.length; i++) {
        if (event.target[i].required) {
            errors.push(validate(event.target[i]))
        }
    }

    if (!errors.includes(false)) {
        
        const json = JSON.stringify({
            name: event.target['firstName'].value,
            email: event.target['email'].value,
            message: event.target['message'].value
        })

        

       

        fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
            method: "post",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: json
            
        })
        .then(res => {
            if (res.status === 200)
                document.querySelector('.alert').style.display = "block";
                return res.json()
                
        })
        .then(data => console.log(data))


        

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


function validate(element) {
    let result = false

    switch(element.type) {
        case 'text':
            result = checkName(element.firstName)
            break;

        case 'email':
            result = checkEmail(element.email)
            break;

        case 'text':
            result = checkMessage(element.message)
            break;
    }

    return result
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