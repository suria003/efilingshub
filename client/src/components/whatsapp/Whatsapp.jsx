import React from "react";
import whatsappImg from '../../image/whatsapp-content-info.png';
import gmailImg from '../../image/gmail-contact.png';
import './whatsapp.css';

const Whatsapp = () => {
    return (
        <>
            <div className="message-container">
                <a href="https://api.whatsapp.com/send?phone=+91&text=Hi%20BRO,%20HOW%20ARE%20YOU" target="_blank">
                    <img className="whatsappImage-container" src={whatsappImg} alt="" />
                    <div className="whatsappContent">Message us!</div>
                </a>
                <a href="/api">
                    <img src={gmailImg} alt="" className="mailImage-container" />
                    <div className="mailContetn">Email us!</div>
                </a>
            </div>
        </>
    );
}

export default Whatsapp;