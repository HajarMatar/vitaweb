import "./Edit.css"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { post } from '../../services/httpService';
import { login, decodeToken } from '../../services/authService';


const EditComp = () => {
  const navigate = useNavigate(); // Get the navigate function

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const decodedToken = decodeToken(token);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(token !== '');
  const [error, setError] = useState('');
  
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleLogin = () => {
    const newToken = login(phoneNumber, password);
    console.log('handle login', newToken);

    if (newToken) {
      setIsLoggedIn(true);
      setError('');
      localStorage.setItem('token', newToken);
      setToken(newToken);
    } else {
      setError('Invalid PhoneNumber or password');
    }
  };

  const handleLogin2 = () => {
    post('/token', { phoneNumber: phoneNumber, password: password }) // Example endpoint for login
      .then((response) => {
        console.log('login response', response);
        if (response.success) {
          const token = login(phoneNumber, password);
          // const token = response.token; hyde l sa7

          if (token) {
            // Store token or set it in a state, depending on your architecture
            console.log('Logged in successfully:', token);
            navigate('/'); // Navigate to the home page

          } else {
            setError('Authentication failed');
          }
        } else {
          setError('Server error');
        }
      })
      .catch((error) => {
        setError('Network error');
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setIsLoggedIn(false);
    setPhoneNumber('');
    setPassword('');
    setError('');
  };


  return (
    <div>
       <div className='Edit-header-container'></div>
       <div className='Edit-body-container'>
        
          <div>
            <h2>Edit</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
      
      </div>
    </div>
  );
}

export default EditComp;