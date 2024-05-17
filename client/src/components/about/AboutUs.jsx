import React, { useEffect } from 'react';
import aboutImage from '../../image/companyImage.jpeg';
import togetherImage from '../../image/toGetherCombany.jpeg';
import manSquare from '../../image/man-Image.jpg';
import './aboutus.css';

function AboutUS() {
    useEffect(() => {
        const handleScroll = () => {
            const div2Reveals = document.querySelectorAll('.contentInAbout');
            const div3Reveals = document.querySelectorAll('.outAllTeam');
            const windowHeight = window.innerHeight;
            const revealPoint = 300;

            div2Reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('animateTwo');
                } else {
                    reveal.classList.remove('animateTwo');
                }
            });

            div3Reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('animateThree');
                } else {
                    reveal.classList.remove('animateThree');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="about-content">
                <div className="aboutHeadOne">
                    <img src={aboutImage} alt="" />
                    <div className="textAbout">
                        <h1>About US</h1>
                    </div>
                </div>

                <div className="contentInAbout">
                    <div className="textHeaderContent">
                        <h2>About Company</h2>
                        <div className="contentText">At eFiLiNgS HuB, our mission is clear: to simplify the accounting and regulatory process for entrepreneurs. We're not just a company; we're a partner dedicated to empowering businesses and individuals to thrive. eFiLiNgS HuB was born out of a recognition of the challenges entrepreneurs face in navigating the complexities of accounting and compliance. Our ultimate goal is to empower our clients to reach their full potential. At the heart of eFiLiNgS HuB approach lies a commitment to customer-centricity. In today's fast-paced world, digitalization is key to staying ahead. Whether you're a startup looking to establish a solid financial foundation or a seasoned business aiming for greater heights, eFiLiNgS HuB is here to support you. Welcome to eFiLiNgS HuB—where your success is our priority.</div>
                    </div>
                    <div className="ImageContent">
                        <img src={togetherImage} alt="" />
                    </div>
                </div>

                <div className="ourTeam">
                    <h1>Our Team</h1>
                    <div className="teamDeclaration">Our team's journey began with a deep understanding of the challenges entrepreneurs face in navigating the complexities of accounting and compliance. This recognition fueled our passion to streamline processes and make them accessible for our clients.</div>
                    <div className="outAllTeam">
                        <div className="teamOne teamOur"><div className="TeamImage"><img src={manSquare} alt="" /></div><h2 className="userNmae">Nagaraj</h2><h3 className="PositionMan">GST Expert</h3></div>
                        <div className="teamOne teamOur"><div className="TeamImage"><img src={manSquare} alt="" /></div><h2 className="userNmae">Santhosh</h2><h3 className="PositionMan">Income Tax Expert</h3></div>
                        <div className="teamOne teamOur"><div className="TeamImage"><img src={manSquare} alt="" /></div><h2 className="userNmae">Kavin</h2><h3 className="PositionMan">ESI Expert</h3></div>
                        <div className="teamOne teamOur"><div className="TeamImage"><img src={manSquare} alt="" /></div><h2 className="userNmae">Priya</h2><h3 className="PositionMan">PF Expert</h3></div>
                        <div className="teamOne teamOur"><div className="TeamImage"><img src={manSquare} alt="" /></div><h2 className="userNmae">Riyas</h2><h3 className="PositionMan">MCA Expert</h3></div>
                        <div className="teamOne teamOur"><div className="TeamImage"><img src={manSquare} alt="" /></div><h2 className="userNmae">Kanishkar</h2><h3 className="PositionMan">Audit Expert</h3></div>
                    </div>
                </div>

                <div className="teamConstract">
                    <h2>See everything the team's working on in one place.</h2>
                    <button>Try For Free</button>
                </div>
            </div>
        </>
    );
}

export default AboutUS;