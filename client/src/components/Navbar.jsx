import React, { useState, useEffect } from 'react';
import Header from "./Nav/Header";
import Nav from "./Nav/Nav";
import Contact from "./Nav/Contact";
import './Navbar.css'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`navigationWeb ${isSticky ? 'sticky' : ''}`}>
                <Header isSticky={isSticky} />
                <Nav isSticky={isSticky} />
            </div>

            <Contact className="contactNavi" />
        </>
    );
}

export default Navbar;
