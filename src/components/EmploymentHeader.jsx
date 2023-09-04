import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navcomp from '../components/Navcomp';
import './EmploymentHeader.css';
import Employmentpic from '../Images/Employmentpic.jpg';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const EmploymentHeader = () => {
  
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    const [businessType, setBusinessType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [waterTankVolume, setWaterTankVolume] = useState('');

    const handleFormSubmit = (e) => {
      e.preventDefault();

      const emailData = {
        businessType,
        firstName,
        lastName,
        phoneNumber,
        email,
        businessAddress,
        waterTankVolume,
      };

      // Replace the placeholders with your actual EmailJS service, template, and user ID
      emailjs
        .send('service_eawoitn', 'template_rzqj547', emailData, 'zTVcrVdsiRWBDv_9D')
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert("the form have been submitted")
          // Handle success, e.g., show a success message to the user
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          // Handle error, e.g., show an error message to the user
        });
    };

    return (
      <div>
        <div className='empl-header-container'>
          <div className='empl-inner-container'>
            <div className='empl-inner-left'>
              <h3 className='empl-inner-left-h3'>{t('emp.become')}</h3>
              <p className='empl-inner-left-p'>{t('emp.empinfo')}
                
              </p>
            </div>
            <div className='empl-inner-right'>
            {/* You can add content to the right side of the header if needed */}
          </div>
          </div>
        </div>

        <div className='empl-body-container'>
          <h1 className='empl-body-h1'>{t('emp.businessInfo')}</h1>
          <form onSubmit={handleFormSubmit}>
            <label className='label-100'>{t('emp.businessType')}</label>
            <br />
            <input
              className='input-100'
              type='text'
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
            <br />
            <br />
            <div className='empl-body-first'>
              <div className='empl-body-labelsmid'>
                <label className='label-100'>{t('emp.first')}</label>
                <br />
                <input
                  className='input-101'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className='empl-body-labelsmid'>
                <label className='label-100'>{t('emp.last')}</label>
                <br />
                <input
                  className='input-101'
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className='empl-body-labelsmid'>
                <label className='label-100'>{t('emp.phone')}</label>
                <br />
                <input
                  className='input-101'
                  type='text'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className='empl-body-labelsmid'>
                <label className='label-100'>{t('emp.email')}</label>
                <br />
                <input
                  className='input-101'
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <br />
            <label className='label-100'>{t('emp.address')}</label>
            <br />
            <input
              className='input-100'
              type='text'
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
            />
            <br />
            <br />
            <label className='label-100'>{t('emp.tank')}</label>
            <br />
            <input
              className='input-100'
              type='text'
              value={waterTankVolume}
              onChange={(e) => setWaterTankVolume(e.target.value)}
            />
            <br />
            <br />
            <button className='empl-Submit-btn-body' type='submit'>
            {t('emp.submit')}
            </button>
          </form>
        </div>

        <Footer />
      </div>
    );
  };

  export default EmploymentHeader;
