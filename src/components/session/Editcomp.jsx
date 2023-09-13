import "./Logincomp.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Signupcomp.css"
const Editcomp = () => {
    const [formData, setFormData] = useState({
        newName: '',
        oldPhoneNumber: '',
        newEmail: '',
        newPhoneNumber: '',
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
        // Make an API call to save the form data
        const apiUrl = 'edit_client'; // Replace with your API endpoint
        fetch(apiUrl, {
            method: 'POST', // or 'PUT' or 'PATCH' depending on your API
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the API response, set responseMessage accordingly
                setResponseMessage(data.message);
            })
            .catch((error) => {
                console.error('Error:', error);
                setResponseMessage('An error occurred. Please try again.');
            });
    };
    return (
        <div>
            <div className="signup-inner-container">
                <h2 className="h3-signup">Edit</h2>
                <br />
                <div className="signup-fields-con">
                    <label className="label-signup" >NEW NAME</label>
                    <br />
                    <input
                     className="input-signup" 
                     type="text" 
                     name="newName"
                     value={formData.newName}
                     onChange={handleChange}
                    />
                    <br />
                    <label className="label-signup">OLD PHONE NUMBER</label>
                    <br />
                    <input 
                    className="input-signup" 
                    type="text" 
                    name="oldPhoneNumber"
                    value={formData.oldPhoneNumber}
                    onChange={handleChange}
                    />
                    <br />
                    <label className="label-signup" > NEW EMAIL</label>
                    <br />
                    <input 
                    className="input-signup" 
                    type="text" 
                    name="newEmail"
                    value={formData.newEmail}
                    onChange={handleChange}
                    />
                    <br />
                    <label className="label-signup" >NEW PHONE NUMBER</label>
                    <br />
                    <input 
                    className="input-signup" 
                    type="text" 
                    name="newPhoneNumber"
                    value={formData.newPhoneNumber}
                    onChange={handleChange}
                    />
                </div>

                <button className="button-signup">Save</button>
                {responseMessage && (
          <div className="response-message">{responseMessage}</div>
        )}
            </div>
        </div>





    );
};
export default Editcomp;