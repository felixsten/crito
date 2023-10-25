import React from 'react'
import img_logopaperz from '../assets/images/logopaperz.svg'
import img_logodorfus from '../assets/images/logodorfus.svg'
import img_logomartino from '../assets/images/logomartino.svg'
import img_logosquare from '../assets/images/logosquare.svg'
import img_logogobona from '../assets/images/logogobona.svg'


const Companylogos = () => {
  return (
    <section className="companylogos">
        <div className="container">
            <img src={img_logopaperz} alt="Paperz logo" />
            <img src={img_logodorfus} alt="Dorfus logo" />
            <img src={img_logomartino} alt="Martino logo" />
            <img src={img_logosquare} alt="Square logo" />
            <img src={img_logogobona} alt="Gobona logo" />
        </div>

    </section>
  )
}

export default Companylogos