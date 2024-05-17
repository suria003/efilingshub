import React, { useEffect } from 'react';
import './abouthome.css';

const AboutHome = () => {
    useEffect(() => {
        const handleScroll = () => {
          const reveals = document.querySelectorAll('.aboutHome-Background-container');
          const windowHeight = window.innerHeight;
          const revealPoint = 150;
    
          reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
              reveal.classList.add('active');
            } else {
              reveal.classList.remove('active');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <>
            <div className="aboutHome-Background-container">
                <div className="about-home-content">
                </div>
                    <p className="aboutHomeText">About US!</p>
                    <div className="aboutHomeContent"></div>
                    <div className="sideBar-abouthome">
                        <div className="sideBarOne">
                            <div className="project-count">
                                +22
                            </div>
                            <h4>Our Project</h4>
                        </div>
                        <div className="sideBarTwo">
                            <div className="project-count">
                                +105
                            </div>
                            <h4>Our Client</h4>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default AboutHome;