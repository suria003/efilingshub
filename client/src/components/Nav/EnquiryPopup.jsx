import React, { useState } from "react";
import './enquiryPopup.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const EnquiryPopup = () => {
  const [enquiryData, setEnquiryData] = useState({
    enquiryName: '', enquiryNumber: '', enquiryEmail: '', enquiryService: ''
  });

  const enquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const enquirySubmit = (e) => {
    e.preventDefault();

    const enquiryDataEncoded = new URLSearchParams();
    for (const key in enquiryData) {
      enquiryDataEncoded.append(key, enquiryData[key]);
    }

    fetch('/enquiryDataset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: enquiryDataEncoded
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
      <div className="popup-container">
        <h1>Enquiry Now</h1>
        <h2>Let's Grow Your Business</h2>
        <form onSubmit={enquirySubmit} className="enquiry-form-container">
          <input type="text" name="enquiryName" id="enquiry-name" value={enquiryData.enquiryName} onChange={enquiryChange} placeholder="Name" required />
          <input type="text" name="enquiryNumber" id="enquiry-number" value={enquiryData.enquiryNumber} onChange={enquiryChange} placeholder="Number" required />
          <input type="email" name="enquiryEmail" id="enquiry-email" value={enquiryData.enquiryEmail} onChange={enquiryChange} placeholder="Email Address" required />
          <select name="enquiryService" id="need-service-container" value={enquiryData.enquiryService} onChange={enquiryChange}>
            <option>Select SERVICE</option>
            <option value="GST Registration">GST Registration</option>
            <option value="GST Filling">GST Filling</option>
            <option value="Company Registration">Company Registration</option>
            <option value="Income Tax Filling">Income Tax Filling</option>
            <option value="Trade Market Registration">Trade Market Registration</option>
            <option value="Virtual Accountant">Virtual Accountant</option>
          </select>
          <button type="submit">Enquiry</button>
        </form>
      </div>
    </>
  );
}

export default EnquiryPopup;