import "./Logincomp.css"

import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import { useTranslation } from 'react-i18next';
import Loginfootercomp from "./Loginfootercomp";

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

  const [isToggled, setIsToggled] = useState(false);
  const [type, setType] = useState('client');

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if(!isToggled){
      setType('supplier')
    } else{
      setType('client')
    }
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  useEffect(() => {
    setType('client')
    setIsToggled(false);

    if (isLoggedIn) {
      setType(localStorage.getItem('userType'));
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('user', user);
      setPhoneNumber(user.name);
    }

  }, []);


  const handleLogin = () => {
    let url = '';
    console.log('login', type);
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
          localStorage.setItem('userType', type);
          localStorage.setItem('user', JSON.stringify(response.client || response.supplier)); // storage for web like database
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
        console.log('error', error)
        if (error?.response?.data?.result){
          setError(error?.response?.data?.result);
        }else {
          setError('Network error');
        }

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
    setType('client')
    setIsToggled(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('user');
    setToken('');
    setIsLoggedIn(false);
    setPhoneNumber('');
    setPassword('');
    setError('');
  };


  return (



    <div>


      <div className="login-first-container"> </div>

      {isLoggedIn ? (
        <div>
          <p style={{ textAlign: 'center' }}>{t('login.welcome')}, {phoneNumber}!</p>
          <br />
          <button className="button-login" onClick={handleLogout}>Logout</button>
        </div>
      ) : (

        <div>
          <h1 className="h1-text-align"> Login</h1>
          <div className="Login-inner-container">
          <label className="labels-login" >User type</label>

            <br/>
          <button className="toggle-button" onClick={handleToggle}>
        {isToggled ? 'Supplier' : 'Customer'}
      </button>
      <br/>

            <label className="labels-login" > Phone number</label>
            <br />
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <br />
            <label className="labels-login">password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <button onClick={handleLogin} className="button-login">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>


      )}



      <Loginfootercomp />
      <br />
      <br />




    </div>

  )

}
export default Logincomp;