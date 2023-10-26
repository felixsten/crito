import React from 'react'
import '../../App.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Contacttitle from '../../components/Contacttitle';
import Contactcards from '../../components/Contactcards';
import Contactform from '../../components/Contactform';
import Maplocation from '../../components/Maplocation';

const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <Contacttitle />
      <Contactcards />
      <Contactform />
      <Maplocation />
      <Footer />
    </div>
  )
}

export default Contacts