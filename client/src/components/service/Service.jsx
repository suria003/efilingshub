import { useState, useEffect } from 'react';
import portalOne from '../../image/service-source-image/company-registration.png';
import portalTwo from '../../image/service-source-image/GST-registration.png';
import portalThree from '../../image/service-source-image/GST-Filling.png';
import portalFour from '../../image/service-source-image/income-tax-filling.png';
import portalFive from '../../image/service-source-image/trade-mark-registration.png';
import portalSix from '../../image/service-source-image/Virtual-accountant.png';
import { Link } from 'react-router-dom';
import './service.css';

function Service() {
    const [text, setText] = useState('');
    const sentences = [
        "Our Service's"
    ];
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (!animationComplete) {
            const interval = setInterval(() => {
                if (currentCharacterIndex < sentences[currentSentenceIndex].length) {
                    setText(prevText => prevText + sentences[currentSentenceIndex][currentCharacterIndex]);
                    setCurrentCharacterIndex(prevIndex => prevIndex + 1);
                } else if (currentSentenceIndex < sentences.length - 1) {
                    setCurrentSentenceIndex(prevIndex => prevIndex + 1);
                    setCurrentCharacterIndex(0);
                } else {
                    clearInterval(interval);
                    setAnimationComplete(true);
                }
            }, 200);

            return () => clearInterval(interval);
        }
    }, [currentSentenceIndex, currentCharacterIndex, animationComplete]);

    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.proviode-service-container');
            const windowHeight = window.innerHeight;
            const revealPoint = 0;

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
    return (
        <>
            <div className="serviceptn-container">
                <div className="service-count-container">6</div>
                <div className="service-count-panel"></div>
                <h1 className='h1Tage-service'>{text}</h1>

                <div className="proviode-service-container">
                    <Link to="/gstregistration" className="service-portal portal-1">
                        <img src={portalOne} alt="" />
                        <div className="portal-text">
                            Company Registration's
                        </div>
                    </Link>
                    <Link to="/gstregistration" className="service-portal portal-2">
                        <img src={portalTwo} alt="" />
                        <div className="portal-text">
                            GST Registration's
                        </div>
                    </Link>
                    <Link to="/gstregistration" className="service-portal portal-3">
                        <img src={portalThree} alt="" />
                        <div className="portal-text">
                            GST Filling
                        </div>
                    </Link>
                    <Link to="/gstregistration" className="service-portal portal-4">
                        <img src={portalFour} alt="" />
                        <div className="portal-text">
                            Income Filling
                        </div>
                    </Link>
                    <Link to="/gstregistration" className="service-portal portal-5">
                        <img src={portalFive} alt="" />
                        <div className="portal-text">
                            Trade Mark Registration's
                        </div>
                    </Link>
                    <Link to="/gstregistration" className="service-portal portal-6">
                        <img src={portalSix} alt="" />
                        <div className="portal-text">
                            Virtual Accountant
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Service