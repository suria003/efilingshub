import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="topViewFooter">
                    <div className="footer-content-one">
                        <div className="divOne">
                            <h1>eFiLiNgS HuB</h1>
                        </div>
                        <div className="divTwo">
                            <h2 className="aboutinfo">About Us</h2>
                            <div>Description</div>
                        </div>
                        <div className="divThree">
                            <h2 className="contactInfo">Contact Us</h2>
                            <div className="number-footer">
                                <ion-icon name="call"></ion-icon>
                                <p>+91 422 4547479</p>
                            </div>
                            <div className="email-footer">
                                <ion-icon name="mail"></ion-icon>
                                <p>barathandassociates@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content-two">
                        <h1>Information</h1>
                        <ul>
                            <li><Link to="/service">service</Link></li>
                            <li><Link to="">blogs</Link></li>
                            <li><Link to="/about">about us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-content-three">
                        <h1>Links</h1>
                        <ul>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">disclaimer</a></li>
                            <li><a href="#">terms & conditions</a></li>
                            <li><a href="#">contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="line-container"></div>
                <div className="bootmViewFooter">
                    <div className="socialIcon">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                    <div className="copyright">
                        2024 © Agam Technology Services All Right reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;