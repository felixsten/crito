import React from 'react'
import img_kristine from '../assets/images/kristine.png'
import img_mark from '../assets/images/mark.png'
import img_kimberly from '../assets/images/kimberly.png'
import img_justin from '../assets/images/justin.png'
import img_cassandra from '../assets/images/cassandra.png'
import img_amanda from '../assets/images/amanda.png'
import img_jack from '../assets/images/jack.png'


const Meetourteam = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="meet-team">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <div className="teambutton">
                        <h2>Experience Team Members</h2>
                        <div>
                            <a className="btn-yellow" href="team.html">Browse Team <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className="teampictures">
                    <div>
                        <img src={img_kristine} alt="picture of Kristine Palmer" />
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div>
                        <img src={img_mark} alt="picture of Mark Aubri" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <img src={img_kimberly} alt="picture of Kimberly Hansen" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <img src={img_justin} alt="picture of Justin Willoman" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="team-select">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                </div>

                
            </div>

            <div className="client-testimony">
                <div className="section-title">
                    <div>
                        <p>Testimonial</p>
                        <h2>What Our Client Says</h2>
                    </div>
                </div>
                <div className="client-reviews">
                    <div className="review">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        </div>
                        <div className="review-name">
                            <div>
                                <img src={img_cassandra} alt="picture of Cassandra Warren" />
                            </div>
                            <div>
                                <h3>Cassandra Warren</h3>
                                <p>Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        </div>
                        <div className="review-name">
                            <div>
                                <img src={img_amanda} alt="picture of Amanda Tulling" />
                            </div>
                            <div>
                                <h3>Amanda Tulling</h3>
                                <p>Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        </div>
                        <div className="review-name">
                            <div>
                                <img src={img_jack} alt="picture of Jack McDogglas" />
                            </div>
                            <div>
                                <h3>Jack McDogglas</h3>
                                <p>Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviewbutton">
                    <a className="btn-black" href="reviews.html">All Reviews <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meetourteam