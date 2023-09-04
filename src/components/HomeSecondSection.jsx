import React from 'react';
import { Link } from 'react-router-dom'

import "./HomeSecondSection.css"
import Phone from "../Images/Phone.png"
import AppStore from "../Images/AppStore.png"
import Googleplay from "../Images/GooglePlay.png"
import mapimg from "../Images/maping.png"
import vitabox from "../Images/vitalogobox.png"
import { useTranslation } from 'react-i18next';

const HomeSecondSection = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
  return (
    <div className='Home-SecondSection-container'>

<div className='LeftSecondSection'>
    <h1 className='header-SecondSection'>{t('homesecond.selling')}</h1>
<p className='parag-SectionSection'>{t('homesecond.direction')}</p>

<p className='parag-SecondSecSection'>{t('homesecond.with')}</p>

<div className='inter-phone'>
    <p className='p-interSecondSection'>{t('homesecond.be')}</p>
    <img className='phonee' src={Phone} alt="" />
</div>



    <h1 className='Download-secondSection'>{t('homesecond.down')}</h1>
    
    <div className='download-holder'>
        <div className='images-button-stores'>
        <Link to="https://www.apple.com/app-store/" target="_blank"><img className='store-buttons' src={AppStore} alt="" /></Link>
        <Link to="https://play.google.com/store/apps" target="_blank"><img className="store-buttons" src={Googleplay} alt="" /></Link>
        </div>
       
        <div className='box-holder'>
            <img className='vitabox' src={vitabox} alt="" />
        </div>


    
    </div>

</div>
<div className='right-secondSection'>

<img className='mapimg' src={mapimg} alt="" />

</div>


  </div>
  );
}

export default HomeSecondSection;