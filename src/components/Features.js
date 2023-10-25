import React from 'react'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            
            <div className="feature-grid">
                <div className="section-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <div>
                        <a className="btn-yellow" href="features.html">Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <article>
                    <i className="fa-regular fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <i className="fa-regular fa-lightbulb"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <i className="fa-solid fa-chart-column"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <i className="fa-solid fa-cube"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Features