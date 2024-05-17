import React from "react";
import './contactus.css';

const ContactUs = () => {
    return (
        <>
            <div className="contact-container-blog">
                <div className="contact-container-fill-form">
                    <h1>Contact Us</h1>
                    <div className="contact-content-text">
                        Feel free to contact us any time. we will get
                        back you as soon as we can.
                    </div>
                    <div className="form-details-container">
                        <form>
                            <input type="text" id="contact-name" placeholder="Name" required />
                            <input type="email" id="contact-email" placeholder="Email" required />
                            <textarea id="conatct-message" placeholder="Message"></textarea>
                            <button type="submit" className="form-button-blogs">SEND</button>
                        </form>
                    </div>
                </div>
                <div className="background-shadow-contact"></div>
                <div className="socialMedia-contact-blog">
                    <a href="#"><ion-icon className="fb-tw-ins-class" name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon className="fb-tw-ins-class" name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon className="fb-tw-ins-class" name="logo-instagram"></ion-icon></a>
                </div>
                <div className="contact-container-details">
                    <h1 className="header-contact-details-container">Info</h1>
                    <div className="container-contactInfo">
                        <div className="mailId-container info-management">
                            <ion-icon name="mail-outline"></ion-icon>
                            <h4>barathandassociates@gmail.com</h4>
                        </div>
                        <div className="contact-number-container info-management">
                            <ion-icon name="call-outline"></ion-icon>
                            <h4>+91 422 4547479</h4>
                        </div>
                        <div className="address-container info-management">
                            <ion-icon name="business-outline"></ion-icon>
                            <h4>9/3, Chandrakalyan,1st Floor, Nanneri Kazhagam St No.2, Coimbatore - 641 001</h4>
                        </div>
                        <div className="timing-container info-management">
                            <ion-icon name="time-outline"></ion-icon>
                            <h4>09:00 - 18:00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;