import React, { useEffect } from 'react';
import './workessential.css';
import start from '../../../image/howDoWork/start.jpeg';
import connect from '../../../image/howDoWork/connect.jpeg';
import complete from '../../../image/howDoWork/completer.jpeg';

const Workessential = () => {
    useEffect(() => {
        const handleScroll = () => {
            const div1Reveals = document.querySelectorAll('.red-work');
            const div2Reveals = document.querySelectorAll('.yellow-work');
            const div3Reveals = document.querySelectorAll('.green-work');
            const windowHeight = window.innerHeight;
            const revealPoint = 250;

            div1Reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('activeOne');
                } else {
                    reveal.classList.remove('activeOne');
                }
            });

            div2Reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('activeTwo');
                } else {
                    reveal.classList.remove('activeTwo');
                }
            });

            div3Reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('activeThree');
                } else {
                    reveal.classList.remove('activeThree');
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
            <div className="workBackground-container">
                <h1 className="work-text">How It Works</h1>
                <div className="red-work">
                    <div className="logo-style-work">
                        <img src={start} alt="" />
                    </div>
                    <div className="red-drop-content">
                        <h1>Fill in your contact details</h1>
                        <div className="content-text">With just a few details regarding your contact and requirements - just sit back and relax.</div>
                    </div>
                    <div className="line-red-work"></div>
                </div>
                <div className="yellow-work">
                    <div className="logo-style-work yellow-container">
                        <img src={connect} alt="" />
                    </div>
                    <div className="yellow-drop-content">
                        <h1>Let's connect</h1>
                        <div className="content-text">We'll take the initiative to reach out to you, offering world-class solutions tailored to your needs.</div>
                    </div>
                    <div className="line-yellow-work"></div>
                </div>
                <div className="green-work">
                    <div className="logo-style-work green-container">
                        <img src={complete} alt="" />
                    </div>
                    <div className="green-drop-content">
                        <h1>And delivered</h1>
                        <div className="content-text">And once you're content with your solution - we go ahead and deliver it on time.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Workessential;
