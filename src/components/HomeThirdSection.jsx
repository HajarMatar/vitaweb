import React from 'react';
import "../components/HomeThirdSection.css"
import phoneicon from "../Images/phoneicon.png"
import tanks from "../Images/tanks.png"
import homethirdsectionimg from "../Images/homethirdsection.jpg"
import homethirdsectionimgg from "../Images/homethirdsection2.jpg"
import { useTranslation } from 'react-i18next';

const HomeThirdSection = () => {
  const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
  return (
    <div className='HomeThirdSection-container'>
<h1 className='header-ThirdSection'>{t('homethird.filling')}</h1>


<div className='middile-thirdSection'>


<div className='left-middile-thirdSection'>
    <h1 className='parag-left-middile-thirdSection'>
    {t('homethird.just')} <br /></h1>

<div className='left-middile-thirdSection'>
    <h1 className='parag-left-middile-thirdSection'>
    {t('homethird.us')} <br /></h1>

<div className='left-middile-thirdSection'>
    <h1 className='parag-left-middile-thirdSection'>
    {t('homethird.call')} <br /></h1>
 <br />
 <br />

</div>
</div>

<div className='displayflex-row'>
<img className='phoneicon' src={phoneicon} alt="" />
<h1 className='parag-left-middile-thirdSection1225'>1225</h1>
</div>
</div>



<div className='right-middile-thirdSection'>

<img  className='tankspng' src={tanks} alt="" />

</div>






</div>


<div className='final-thirdsection'>

<div className='left-final-thirdsection'>

<h1 className='header-final-thirdsection'>{t('homethird.storage')} </h1>
<img className='img-final-thirdsection' src={homethirdsectionimg} alt="" />
<h3 className='parag-final-thirdsection'>{t('homethird.provide')} </h3>
</div>
<div className='right-final-thirdsection'>

<h1 className='header-final-thirdsection-Swimming'>{t('homethird.pools')}</h1>
<img className='img-final-thirdsection' src={homethirdsectionimgg} alt="" />
<h3 className='paragright-final-thirdsection'>{t('homethird.pool')}</h3>
</div>



</div>




    </div>
  );
}

export default HomeThirdSection;