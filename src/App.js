import './App.css';
import Aboutcompany from './components/Aboutcompany';
import Articleandnews from './components/Articleandnews';
import Chooseus from './components/Chooseus';
import Companylogos from './components/Companylogos';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Meetourteam from './components/Meetourteam';
import Newssignup from './components/Newssignup';
import Ourservices from './components/Ourservices';
import Projectandcase from './components/Projectandcase';
import Showcase from './components/Showcase'


function App() {
  return (
    <div className="wrapper">
      <Header />
      
      <Showcase />
      <Companylogos />
      <Features />
      <Aboutcompany />
      <Ourservices />
      <Chooseus />
      <Projectandcase />
      <Meetourteam />
      <Articleandnews />
      <Newssignup />
      
      <Footer />
    </div>
  );
}

export default App;
