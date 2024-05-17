import React, { useState } from 'react';

function Dataset() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataEncoded = new URLSearchParams();
    for (const key in formData) {
      formDataEncoded.append(key, formData[key]);
    }

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataEncoded
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
    <div>
      <h2>Submit Your Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dataset;