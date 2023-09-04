import React from 'react';
import "./AboutUscomponent.css"
import { useTranslation } from 'react-i18next';

const AboutUscomponent = () => {
  const { t, i18n } = useTranslation();

   const changeLanguage = lng => {
     i18n.changeLanguage(lng);
   };
  return (
    <div>
       <div className='header-aboutus'>
       </div>
      
      <div className='about-body-container'>

        <h1 className='about-h1'>
        {t('aboutus.about')}
        </h1>
        <br />
        <p  className='about-p'> {t('aboutus.info1')}
<br />
</p>
<p  className='complet it-p'> {t('aboutus.info2')} </p>
      </div>
        

    </div>
  );
};

export default AboutUscomponent;
