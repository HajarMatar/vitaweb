import React from 'react';
import "./Nav.css"
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Navcomp = () => {
   const { t, i18n } = useTranslation();

   const changeLanguage = lng => {
     i18n.changeLanguage(lng);
   };

  return (
    <div>

 <div className='navbar-container'>
    <div className='logo'><img className='logo-image' src={Logo}  /></div>
    <div className='navbar-content'>

       <Link to="/"> <button className='button-navbar'> {t('nav.home')} </button></Link>
       <Link to="/Employment">  <button className='button-navbar'> {t('nav.employment')} Employment (توظيف)</button></Link>
       <Link to="/Customer"><button className='button-navbar'>Customer (عملاء)</button></Link>
       <Link to="/AboutUs"><button className='button-navbar'>About us (معلومات عنا)</button></Link>
       <Link to="/ContactUs"> <button className='button-navbar'>Contact us (اتصل بنا) </button></Link>
       <Link to="/changepassword"><button className='button-navbar'>change password</button></Link>
       <Link to="/Edit"> <button className='button-navbar'>Edit </button></Link>
       <Link to="/signup"><button className='button-navbar'>signup</button></Link>
       <button className="button-navbar" onClick={() => changeLanguage('en')}>English</button>
       <button className="button-navbar" onClick={() => changeLanguage('ar')}>Arabic</button>

    </div>
 </div>



    </div>
  );
}

export default Navcomp;
