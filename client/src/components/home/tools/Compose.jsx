import React from "react";
import './compose.css';

const Compose = () => {
    return (
        <>
            <div className="compose-container">
                <div className="compose-box boxOne">
                    <ion-icon name="wallet-outline" className="compose-icon"></ion-icon>
                    <div className="compose-text">
                        <h4>Reasonable</h4>
                        <div>Delivering professional service at the lowest price point.</div>
                    </div>
                </div>
                <div className="compose-box boxTwo">
                    <ion-icon name="alarm-outline" className="compose-icon"></ion-icon>
                    <div className="compose-text">
                        <h4>Support</h4>
                        <div>99% of services will be delivered within their timeline.</div>
                    </div>
                </div>
                <div className="compose-box boxThree">
                    <ion-icon name="trophy-outline" className="compose-icon"></ion-icon>
                    <div className="compose-text">
                        <h4>4.8/5 on Google rating</h4>
                        <div>99% of our customers have rated us 5 stars on Google.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Compose;