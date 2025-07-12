import './App.css';
import Header from './components/Header/Header';
import TopCont from './components/TopCont/TopCont'
import CorporateGifts from './components/CorporateGifts/CorporateGifts';
import WhyChooseEvergrow from './components/WhyChooseEvergrow/WhyChooseEvergrow';
import Testimonials from './components/Testimonials/Testimonials'
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-global">

      <Header />
      <TopCont />
      <CorporateGifts />
      <WhyChooseEvergrow/>
      <Testimonials />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;
