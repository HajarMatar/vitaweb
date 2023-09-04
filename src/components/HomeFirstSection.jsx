import React from 'react';
import Navcomp from '../components/Navcomp';
import "./HomeFirstSection.css"
import Truck from "../Images/Truck.png"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomeFirstSection() {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className='firstsection-back'>

            <div className='background-firstsection'>
                <div className='left-firstsection'>

                    <h1 className='header-firstsection'> {t('homefirst.water')} </h1> <br></br>
                    <p className='parag-firstsection'>{t('homefirst.delivery')} </p>






                </div>

                <div className='right-firstsection'>

                    <img className='truck-firstsection' src={Truck} alt="" />

                </div>







            </div>

            <div className='second-first-container'>

                <div className='left-second-first'>
                    <h1 className='left-second-header'> {t('homefirst.supplying')} </h1>
                    <p className='parag-left-second'> {t('homefirst.moreinfo')} </p>
                </div>
                <div className='right-second-first'>
                    <Link className='links-home' to="/Employment"><button className='right-second-first-button'>{t('homefirst.seller')}</button></Link>
                    <Link className='links-home' to="/Customer"> <button className='right-second-first-button'>{t('homefirst.buyer')}</button></Link>

                </div>






            </div>




        </div>
    );
}

export default HomeFirstSection;
