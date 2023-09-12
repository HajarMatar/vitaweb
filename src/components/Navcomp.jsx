import React, { useState } from 'react';
import "./Nav.css"
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Navcomp = () => {
   const { t, i18n } = useTranslation();

   const changeLanguage = lng => {
     i18n.changeLanguage(lng);
   };

   const [selectedOption, setSelectedOption] = useState('English');

   // Array of options for the dropdown
   const options = ['English', 'العربية'];
 
   // Event handler for when the dropdown selection changes
   const handleSelectChange = (e) => {
     setSelectedOption(e.target.value);
      console.log("setSelectedOption", e.target.value, selectedOption );
     if(e.target.value === 'English'){
      i18n.changeLanguage('en');
     } else{
      i18n.changeLanguage('ar');

     }
   };

  return (
    <div>

 <div className='navbar-container'>
    <div className='logo'><img className='logo-image' src={Logo}  /></div>
    <div className='navbar-content'>

       <Link to="/"> <button className='button-navbar'> {t('nav.home')} </button></Link>
       <Link to="/Employment">  <button className='button-navbar'> {t('nav.employment')} </button></Link>
       <Link to="/Customer"><button className='button-navbar'>{t('nav.customer')} </button></Link>
       <Link to="/AboutUs"><button className='button-navbar'>{t('nav.about Us')}</button></Link>
       <Link to="/ContactUs"> <button className='button-navbar'>{t('nav.contact Us')}</button></Link>
        <div className="button-navbar">
         <label htmlFor="dropdown">Langauge:</label>
         <br/>
         <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
         {options.map((option, index) => (
            <option key={index} value={option}>
               {option}
            </option>
         ))}
         </select>
         </div> 
    </div>
 </div>



    </div>
  );
}

export default Navcomp;
