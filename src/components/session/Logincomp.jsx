import "./Logincomp.css"

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import { useTranslation } from 'react-i18next';

import { post } from '../../services/httpService';
import { login, decodeToken } from '../../services/authService';


const Logincomp = () => {
  const { t, i18n } = useTranslation();

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



  const handleLogin2 = () => {
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

  const handleLogin = () => {
    let url = '';
    let type = 'client';
    if (type === 'client') {
      url = '/client_login'
    } else {
      url = '/supplier_login'
    }
    post(url, { phone_number: phoneNumber, password: password }) // Example endpoint for login
      .then((response) => {
        console.log('login response', response);
        // const data = response[0]; // Response returned as array but data is in first element
        const data = response;
        if (data.result === "Successful") { 

          console.log('Logged in successfully:', token);
          const newToken = "User logged in"
          setIsLoggedIn(true);
          setError('');
          localStorage.setItem('token', newToken); // storage for web like database
          setToken(newToken);
          // Store token or set it in a state, depending on your architecture
          navigate('/'); // Navigate to the home pag

        } else if (data.result === "Wrong Password") {
          setError('Authentication failed');
        } else if (data.result === "Username Not Found") {
          setError('Username Not Found');
        } else {
          setError(t('login.serverError'))
        }
      })
      .catch((error) => {
        setError('Network error');

        // Remove once API work 
          // console.log('Logged in successfully:', token);
          // const newToken = "User logged in"
          // setIsLoggedIn(true);
          // setError('');
          // localStorage.setItem('token', newToken); // storage for web like database
          // setToken(newToken);
          // // Store token or set it in a state, depending on your architecture
          // navigate('/'); // Navigate to the home pag
        
      });
  };

  const handleLogout = () => {
    console.log('handle handleLogout');

    localStorage.removeItem('token');
    setToken('');
    setIsLoggedIn(false);
    setPhoneNumber('');
    setPassword('');
    setError('');
  };


  return (
    <div>
      <div className='login-header-container'></div>
      <div className='login-body-container'>
        {isLoggedIn ? (
          <div>
            <p>{t('login.welcome')}, {phoneNumber}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
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
        )}
        <div className="nav-buttons">
          <Link to="/changepassword"><button className='button-navbar'>change password</button></Link>
          <Link to="/Edit"> <button className='button-navbar'>Edit </button></Link>
          <Link to="/signup"><button className='button-navbar'>signup</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Logincomp;