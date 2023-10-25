import React from 'react'
import img_backgroundLines5 from '../assets/images/backgroundlines5.svg'
import img_logoWhite from '../assets/images/Logowhite.svg'

const Footer = () => {
  return (
    <footer>
        <img className="background-lines-5" src={img_backgroundLines5} alt="" />
        <div className="container">
            <div className="footerinfo">
                <div className="critofooter">
                    <a href="index.html"><img src={img_logoWhite} alt="Crito logo" /></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <a href="about.html"><p>About</p></a>
                    <a href="features.html"><p>Features</p></a>
                    <a href="works.html"><p>Works</p></a>
                    <a href="career.html"><p>Career</p></a>
                </div>
                <div>
                    <h3>Help</h3>
                    <a href="support.html"><p>Customer Support</p></a>
                    <a href="delivery.html"><p>Delivery Details</p></a>
                    <a href="terms.html"><p>Terms & Conditions</p></a>
                    <a href="policy.html"><p>Privacy Policy</p></a>
                </div>
                <div>
                    <h3>Resources</h3>
                    <a href="ebooks.html"><p>Free eBooks</p></a>
                    <a href="development"><p>Development Tutorial</p></a>
                    <a href="blog.html"><p>How to - Blog</p></a>
                    <a href="playlist.html"><p>Youtube Playlist</p></a>
                </div>
                <div>
                    <h3>Link</h3>
                    <a href="ebooks.html"><p>Free eBooks</p></a>
                    <a href="development"><p>Development Tutorial</p></a>
                    <a href="blog.html"><p>How to - Blog</p></a>
                    <a href="playlist.html"><p>Youtube Playlist</p></a>
                </div>

            </div>
        </div>

        <div className="footerborder"></div>

        <div className="container">
            <div className="footerbottom">
                <div>
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
                <div className="social-media">
                    <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer