import React from 'react'
import img_articleImage1 from '../assets/images/article-image-1.png'
import img_articleImage2 from '../assets/images/article-image-2.png'
import img_articleImage3 from '../assets/images/article-image-3.png'
import img_articleImage4 from '../assets/images/article-image-4.png'


const Projectandcase = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <article>
                    <img src={img_articleImage1} alt="Man reading business newspaper" />
                    <h3>Grow your business</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                </article>
                <article>
                    <img src={img_articleImage2} alt="A smartwatch, pen and glasses on top of a tablet" />
                    <h3>Why your client needs a responsive website</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                </article>
                <article>
                    <img src={img_articleImage3} alt="A pencil on top of a notebook next to a laptop, ruler and mug" />
                    <h3>Educate your employees to get better results</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                </article>
                <article>
                    <img src={img_articleImage4} alt="Laptop showing charts" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                </article>
            </div>
            <div className="center-content">
                <a className="btn-black" href="projects.html">All Recent Projects <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Projectandcase