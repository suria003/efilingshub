import Navbar from './components/Navbar';
import Home from './components/home/Home';
import AboutUS from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Service from './components/service/Service';
import Contact from './components/contact/contact';
import EnquiryPopup from './components/Nav/EnquiryPopup';
import Congratulations from './components/Nav/Congratulations';
import GSTRegistration from './components/service/productService/GSTRegistraton';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/enquiryPopup' element={<EnquiryPopup />}/>
          <Route path='/congratulations' element={<Congratulations />}/>
          <Route path='/gstregistration' element={<GSTRegistration />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
