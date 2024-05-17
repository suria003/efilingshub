import React, { useState, useEffect } from 'react';
import '../Navbar.css';
import './contactAbout.css';

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.querySelector('.contact-container');
      const offset = scrollable.offsetTop;

      if (window.pageYOffset > offset && !isScrolled) {
        setIsScrolled(true);
      } else if (window.pageYOffset <= offset && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const openPopup = () => {
    window.open('/enquiryPopup', 'Popup', 'width=100%,height=auto');
  };  

  return (
    <>
      <div className='contact-support'>
        <div className={`contact-container ${isScrolled ? 'scrollcontainer' : ''}`}>
          <a href="#" onClick={openPopup}>Enquiry NOW !</a>
        </div>
      </div>
    </>
  );
}

export default Contact;
