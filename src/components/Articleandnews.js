import React from 'react'
import img_newsImage1 from '../assets/images/news-image-1.png'
import img_newsImage2 from '../assets/images/news-image-2.png'
import img_newsImage3 from '../assets/images/news-image-3.png'

const Articleandnews = () => {
  return (
    <section className="article-and-news">
        <div className="container">
            <div className="news-grid">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                    <div className="news-button">
                        <a className="btn-transparent" href="news.html">Browse Articles <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
                <div className="article-news">
                    <article>
                        <img src={img_newsImage1} alt="woman sitting down next to a table smiling" />
                        <p>Business</p>
                        <a href="#"><h3>How To Use Digitalization In The Classroom</h3></a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={img_newsImage2} alt="computer screen with text" />
                        <p>Business</p>
                        <a href="#"><h3>How To Implement Chat GPT In Your Projects</h3></a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={img_newsImage3} alt="a smartphone laying on top of two books about css" />
                        <p>Business</p>
                        <a href="#"><h3>The Guide To Support Modern CSS Design</h3></a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                </div>
                <div className="articles-select">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                </div>
        </div>
    </section>
  )
}

export default Articleandnews