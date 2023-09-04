import React from 'react';
import "./Footer.css"
import logo from "../Images/Logo.png"
import vitalogowhite from "../Images/vitalogowhite.png"
import phoneicon from "../Images/phoneicon.png"
import facebookicon from "../Images/facebookicon.png"
import instagramicon from "../Images/instagramicon.png"
import twittericon from "../Images/twittericon.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };



    const redirectToFacebook = () => {
        window.location.href = 'http://www.facebook.com/profile.php?id=100095150926360&mibextid=ZbWKwl';    
    };

    const redirectToInstagram = () => {
        window.location.href = 'http://instagram.com/vita_waterdistribution?igshid=MzR1ODBiNWFlZA==';
    };

    const redirectToTwitter = () => {
        window.location.href = 'http://twitter.com/matarvita?s=11&t=klaSgCJbQjJepStUvsiKYw';
    };
    
    
  return (
     <div className='Footer-container'>

    <div className='left-footer'>
    <Link to="/"> <button className='button-left-footer'>{t('footer.home')} </button></Link>
    <Link to="/AboutUs"> <button className='button-left-footer'>{t('footer.about Us')}</button></Link>
    <Link to="/ContactUs"> <button className='button-left-footer'>{t('footer.contact Us')}</button></Link>

    </div>

    <div className='middle-footer'>

    <Link to="/Employment"> <button className='button-left-footer'>{t('footer.employment')}</button></Link>
    <Link to="/Customer"><button className='button-left-footer'>{t('footer.customer')}</button></Link>
        <button className='button-left-footer desapear'>{t('footer.term of use')}</button>


    </div>
    
    <div className='middle-footer'>

<button className='button-left-footer desapear'>{t('footer.privacy')}</button>
    <button className='button-left-footer desapear'>{t('footer.help')}</button>


</div>
    




    <div className='topright-footer'>
        <div className='logo-footer'>
<img className='img-logo-foot' src={vitalogowhite} alt="" />
        </div>

<div className='icons-container'>
<img className='icons-footerr' src={phoneicon} alt="" />
<img onClick={()=>{redirectToFacebook()}} className='icons-footerr' src={facebookicon} alt="" />
<img onClick={()=>{redirectToInstagram()}} className='icons-footerr' src={instagramicon} alt="" />
<img onClick={()=>{redirectToTwitter()}} className='icons-footerr' src={twittericon} alt="" />


</div>
<div className='container-last-footer'>
    <h3 className='last-footer-h3'>1225</h3>
    <h3 className='last-footer-h3'>@vita</h3>
</div>



    </div>
    




    </div>
  );
}

export default Footer;
