import "./Logincomp.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Signupcomp.css"
const Signupcomp = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Make an API call to create a new user
        const apiUrl = 'add_client'; // Replace with your API endpoint
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the API response, set responseMessage accordingly
                setResponseMessage(data.result || 'An error occurred. Please try again.');
            })
            .catch((error) => {
                console.error('Error:', error);
                setResponseMessage('An error occurred. Please try again.');
            });
    };
    return (
        <div>
            <div className="signup-inner-container">
                <h2 className="h3-signup">Sign Up</h2>
                <br />
                <div className="signup-fields-con">
                    <label className="label-signup" >Name </label>
                    <br />
                    <input
                        className="input-signup"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                    <label className="label-signup">Phone Number</label>
                    <br />
                    <input
                        className="input-signup"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <br />
                    <label className="label-signup">Email</label>
                    <br />
                    <input
                        className="input-signup"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />
                    <label className="label-signup">Password</label>
                    <br />
                    <input
                        className="input-signup"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                </div>
                <button className="button-signup">Create</button>
                {responseMessage && (
          <div className="response-message">{responseMessage}</div>
        )}
            </div>



        </div>





    )
}
export default Signupcomp;