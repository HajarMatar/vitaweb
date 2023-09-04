import React from 'react';
import "./ContactUscomponent.css"
import Emailicon from "../Images/Emailicon.png"
import phoneiconblue from "../Images/phoneiconblue.png"
import facebookiconblue from "../Images/facebookiconblue.png"
import twittericonblue from "../Images/twittericonblue.png"
import Navcomp from '../components/Navcomp';
import AboutUscomponent from '../components/AboutUscomponent';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const ContactUscomponent = () => {
  const { t, i18n } = useTranslation();

   const changeLanguage = lng => {
     i18n.changeLanguage(lng);
   };
  return (
    <div>
        <div className='header-contactus'>
       </div>
      <div className='body-contact-container'>
<h1 className='contact-h1'>{t('contactus.contact')}
</h1>


<div className='innner-body-contact'>


<div className='inner-body-contact-left'>
<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={Emailicon} alt="" />
   <div>  
     <h3 className='h1-nomargin'>{t('contactus.email')}</h3>
  
    <p className='h1-nomargin'>vita@gmail.com</p>

    </div>

</div>

<br />

<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={phoneiconblue} alt="" />
   <div>  
     <h3 className='h1-nomargin'>{t('contactus.call')}</h3>
  
    <p className='h1-nomargin'>01- 33 44 55</p>

    </div>

</div>
<br />
<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={facebookiconblue} alt="" />
    
     <h3 className='at-vita' >{t('contactus.fb')} </h3>
  
 



</div>

<br />
<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={twittericonblue} alt="" />
    
     <h3 className='at-vita'>{t('contactus.twt')}</h3>
  
 



</div>





</div>






<div className='inner-body-contact-right'>

<h2 className='h1-inner-body-contact'>{t('contactus.popular')}</h2>

<p className='parag-inner-body-contact'>{t('contactus.product')}</p>

<p className='parag-inner-body-contact'>{t('contactus.share')}</p>
<p className='parag-inner-body-contact'>{t('contactus.send')}</p>
<p className='parag-inner-body-contact'>{t('contactus.question')}</p>
<p className='parag-inner-body-contact'>{t('contactus.careers')}</p>
<p className='parag-inner-body-contact'>{t('contactus.find')}</p>





</div>

</div>






      </div>
      
     

    </div>
  );
};

export default ContactUscomponent;
