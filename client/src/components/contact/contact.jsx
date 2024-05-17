import React, { useState } from "react";
import { Link } from "react-router-dom";
import './contact.css'

function Contact() {
    const [contactData, setContactData] = useState({
        contactName: '', contactNumber: '', contactMessage: ''
    })

    const contactChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const contactSubmit = (e) => {
        e.preventDefault();

        const contactDataEncoded = new URLSearchParams();
        for (const key in contactData) {
            contactDataEncoded.append(key, contactData[key]);
        }

        fetch('/contactDataset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: contactDataEncoded
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data sent successfully:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="Contact-container">
            <div className="contact-container-blog blogcontent">
                <div className="contact-container-fill-form">
                    <h1>Contact Us</h1>
                    <div className="contact-content-text">
                        Feel free to contact us any time. we will get
                        back you as soon as we can.
                    </div>
                    <div className="form-details-container">
                        <form onSubmit={contactSubmit}>
                            <input name="contactName" type="text" id="contact-name" value={contactData.contactName} onChange={contactChange} placeholder="Name" required/>
                            <input name="contactNumber" type="text" id="contact-email" value={contactData.contactNumber} onChange={contactChange} placeholder="Email" required/>
                            <textarea name="contactMessage" id="conatct-message" value={contactData.contactMessage} onChange={contactChange} placeholder="Message"></textarea>
                            <Link to="/contactus"><button to="/" type="submit" className="form-button-blogs">SEND</button></Link>
                        </form>
                    </div>
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
        </div>
    );
}

export default Contact;