import React, { useState } from 'react';
import Navcomp from '../../components/Navcomp';
import './ChangePassword.css';
import Employmentpic from '../../Images/Employmentpic.jpg';
import Footer from './../Footer';

const ChangePasswordComp = () => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [OldPassword, setOldPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const handleFormSubmit = () => {

  }


  return (
    <div>
      <div className='ChangePassword-header-container'>
        <div className='ChangePassword-inner-container'>
          <div className='ChangePassword-inner-left'>
            <h3 className='ChangePassword-inner-left-h3'>Become a vita Partner</h3>
            <p className='ChangePassword-inner-left-p'>
              Enter your information below in order to be contacted by a vita representative to
              complete your registration.
            </p>
          </div>
          <div className='ChangePassword-inner-right'>
            {/* You can add content to the right side of the header if needed */}
          </div>
        </div>
      </div>

      <div className='ChangePassword-body-container'>
        <h1 className='ChangePassword-body-h1'>Change Password</h1>
        <form onSubmit={handleFormSubmit}>
          <label className='label-100'>Phone Number</label>
          <br />
          <input
            className='input-100'
            type='text'
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <br />
          <div className='ChangePassword-body-first'>
            <div className='ChangePassword-body-labelsmid'>
              <label className='label-100'>OldPassword</label>
              <br />
              <input
                className='input-100'
                type='text'
                value={OldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
             
          
            </div>
          </div>
          <br />
          <br />

          <div className='ChangePassword-body-labelsmid'>
            <label className='label-100'>NewPassword</label>
            <br />
            <input
              className='input-100'
              type='text'
              value={NewPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>


          <br />
          <br />
          <button className='ChangePassword-Submit-btn-body' type='submit'>
            SAVE
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ChangePasswordComp;