import React from 'react'
import img_backgroundLines3 from '../assets/images/backgroundlines3.svg'

const Newssignup = () => {
  return (
    <section className="news-updates-signup">
        <img className="background-lines-3" src={img_backgroundLines3} alt="" />
        <div className="container">
            <div className="news-updates">
                <h2>Get News Updates By Signup</h2>
                <form method="post">
                    <input type="text" name="email" id="email" placeholder="username@domain.com" />
                    <button type="submit" className="btn-yellow" href="subscribe.html">Subscribe <i className="fa-solid fa-arrow-right-long"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newssignup