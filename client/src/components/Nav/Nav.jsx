import React from "react";
import homeImg from '../../image/icon-navigation/homeIcon.png';
import serviceImg from '../../image/icon-navigation/serviceIcon.png';
import careerImg from '../../image/icon-navigation/careerIcon.png';
import aboutImg from '../../image/icon-navigation/aboutInfoIcon.png';
import contactImg from '../../image/icon-navigation/contactIcon.png';
import '../Navbar.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navigation">
                <ul className="navigationUL">
                    <li><Link className="navAngar" to="/"><img src={homeImg} alt="" /><p>home</p></Link></li>
                    <li><Link className="navAngar" to="/about"><img src={aboutImg} alt="" /><p>about us</p></Link></li>
                    <li><Link className="navAngar servicePanel" to="/service"><img src={serviceImg} alt="" /><p>service</p><ion-icon className="addService" name="add"></ion-icon></Link></li>
                    <li><Link className="navAngar" to="/"><img src={careerImg} alt="" /><p>blogs</p></Link></li>
                    <li><Link className="navAngar" to="/contactus"><img src={contactImg} alt="" /><p>contact us</p></Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;