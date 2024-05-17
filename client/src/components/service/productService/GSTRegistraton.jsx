import React, { useState } from "react";
import './gstregistration.css';

function GSTRegistration() {
    const [activeContent, setActiveContent] = useState(1);
    const [clickedButton, setClickedButton] = useState(null);

    const showContent = (index) => {
        setActiveContent(index);
        setClickedButton(index);
    };

    const [serviceData, setServiceData] = useState({
        serviceEnquiryName: '', serviceEnquiryNumber: '', serviceEnquiryEmail: '', serviceenquiryService: '', serviceenquiryPlan: ''
    });

    const serviceChange = (e) => {
        const { name, value } = e.target;
        setServiceData({ ...serviceData, [name]: value });
    };

    const serviceSubmit = (e) => {
        e.preventDefault();

        const serviceDataEncode = new URLSearchParams();
        for (const key in serviceData) {
            serviceDataEncode.append(key, serviceData[key]);
        }

        fetch('/serviceDataset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serviceDataEncode
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
        <>
            <div className="GSTRegistration-service">
                <div className="service-template">
                    <div className="service-Overview">
                        <h2>Online GST Registration</h2>
                        <div className="revice-rating">
                            <h4>4.8</h4>
                            <h5>5836 Customers Reviews</h5>
                        </div>
                        <div className="service-button-container">
                            <button className={`button ${clickedButton === 1 ? 'active' : ''}`} onClick={() => showContent(1)}>Basic</button>
                            <button className={`button ${clickedButton === 2 ? 'active' : ''}`} onClick={() => showContent(2)}>Essential</button>
                            <button className={`button ${clickedButton === 3 ? 'active' : ''}`} onClick={() => showContent(3)}>Advance</button>
                        </div>
                        <div className="price-details-service">
                            <div className="content" id="content1" style={{ display: activeContent === 1 ? 'flex' : 'none' }}>
                                <div className="marketPrice-content">
                                    <h3>Market Price :</h3>
                                    <h3>₹ 4000</h3>
                                </div>
                                <div className="ourprice-content">
                                    <h3>Our Price :</h3>
                                    <div className="pricing-details-basic">
                                        <h2>₹ 2457 Excl GST</h2>
                                        <h3>₹ 2899 Incl GST</h3>
                                    </div>
                                </div>
                                <div className="save-content">
                                    <h3>You Save :</h3>
                                    <h3>₹ 1543 (38%) </h3>
                                </div>
                            </div>
                            <div className="content" id="content2" style={{ display: activeContent === 2 ? 'flex' : 'none' }}>
                                <div className="marketPrice-content">
                                    <h3>Market Price :</h3>
                                    <h3>₹ 6000</h3>
                                </div>
                                <div className="ourprice-content">
                                    <h3>Our Price :</h3>
                                    <div className="pricing-details-basic">
                                        <h2>₹ 3999 Excl GST</h2>
                                        <h3>₹ 4719 Incl GST</h3>
                                    </div>
                                </div>
                                <div className="save-content">
                                    <h3>You Save :</h3>
                                    <h3>₹ 2001 (33%) </h3>
                                </div>
                                <h5>GST Registration + 3 Month GST Return Filing </h5>
                            </div>
                            <div className="content" id="content3" style={{ display: activeContent === 3 ? 'flex' : 'none' }}>
                                <div className="marketPrice-content">
                                    <h3>Market Price :</h3>
                                    <h3>₹ 12000</h3>
                                </div>
                                <div className="ourprice-content">
                                    <h3>Our Price :</h3>
                                    <div className="pricing-details-basic">
                                        <h2>₹ 8340 Excl GST</h2>
                                        <h3>₹ 9799 Incl GST</h3>
                                    </div>
                                </div>
                                <div className="save-content">
                                    <h3>You Save :</h3>
                                    <h3>₹ 3696 (31%) </h3>
                                </div>
                                <h5>GST Registration + 1 Year GST Return Filing </h5>
                            </div>
                        </div>
                    </div>
                    <div className="service-line"></div>
                    <div className="service-enquiry">
                        <h1>Any Enquiry!</h1>
                        <form onSubmit={serviceSubmit}>
                            <input type="text" name="serviceEnquiryName" id="serviceEnquiry" value={serviceData.serviceEnquiryName} onChange={serviceChange} placeholder="Name" required />
                            <input type="text" name="serviceEnquiryNumber" id="serviceEnquiryNumber" value={serviceData.serviceEnquiryNumber} onChange={serviceChange} placeholder="Number" required />
                            <input type="email" name="serviceEnquiryEmail" id="serviceEnquiryEmail" value={serviceData.serviceEnquiryEmail} onChange={serviceChange} placeholder="Email" required />
                            <input type="text" name="serviceenquiryService" id="serviceRequired" value={serviceData.serviceenquiryService} onChange={serviceChange} placeholder="GST Registration" readOnly />
                            <select name="serviceenquiryPlan" value={serviceData.serviceenquiryPlan} onChange={serviceChange}>
                                <option>Select Plan</option>
                                <option value="Basic">Basic</option>
                                <option value="Essential">Essential</option>
                                <option value="Advance">Advance</option>
                            </select>
                            <button type="submit">GET NOW!</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GSTRegistration;
