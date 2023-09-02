import React from 'react';
import "./ContactUscomponent.css"
import Emailicon from "../Images/Emailicon.png"
import phoneiconblue from "../Images/phoneiconblue.png"
import facebookiconblue from "../Images/facebookiconblue.png"
import twittericonblue from "../Images/twittericonblue.png"
import Navcomp from '../components/Navcomp';
import AboutUscomponent from '../components/AboutUscomponent';
import Footer from '../components/Footer';
const ContactUscomponent = () => {
  return (
    <div>
        <div className='header-contactus'>
       </div>
      <div className='body-contact-container'>
<h1 className='contact-h1'>Contact Us
</h1>


<div className='innner-body-contact'>


<div className='inner-body-contact-left'>
<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={Emailicon} alt="" />
   <div>  
     <h3 className='h1-nomargin'>Email us</h3>
  
    <p className='h1-nomargin'>vita@gmail.com</p>

    </div>

</div>

<br />

<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={phoneiconblue} alt="" />
   <div>  
     <h3 className='h1-nomargin'>Call us</h3>
  
    <p className='h1-nomargin'>01- 33 44 55</p>

    </div>

</div>
<br />
<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={facebookiconblue} alt="" />
    
     <h3 className='at-vita' >@vita</h3>
  
 



</div>

<br />
<div className='inner-inner-contact-left'>
    <img className='img-contactus-inner' src={twittericonblue} alt="" />
    
     <h3 className='at-vita'>@vita</h3>
  
 



</div>





</div>






<div className='inner-body-contact-right'>

<h2 className='h1-inner-body-contact'>Popular Topics</h2>

<p className='parag-inner-body-contact'>Product issue or quality complaint</p>

<p className='parag-inner-body-contact'>Share your story or compliment</p>
<p className='parag-inner-body-contact'>Send us a suggestion</p>
<p className='parag-inner-body-contact'>Question about a promotion</p>
<p className='parag-inner-body-contact'>Careers</p>
<p className='parag-inner-body-contact'>Find a product</p>





</div>

</div>






      </div>
      
     

    </div>
  );
};

export default ContactUscomponent;
