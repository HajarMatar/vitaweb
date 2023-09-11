import "./Customercomp.css"

import { useState, useEffect } from "react"
import firstcustomer from "../Images/firstcustomer.png"
import secondcustomer from "../Images/secondcustomer.png"
import thirdcustomer from "../Images/thirdcustomer.png"
import fourthcustomer from "../Images/fourthcustomer.png"
import fifthcustomer from "../Images/fifthcustomer.png"
import sixthcustomer from "../Images/sixthcustumer.png"
import customerpool1 from "../Images/customerpool1.png"
import customerpool2 from "../Images/customerpool2.png"
import { useTranslation } from 'react-i18next';

const Customercomp = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const [depth, setdepth] = useState(0)
  const [diameter, setdiameter] = useState(0)
  const [resultrounded, setresultrounded] = useState(0);


  const [length, setlength] = useState(0)
  const [width, setwidth] = useState(0)
  const [depthRectangular, setdepthRectangular] = useState(0)
  const [resultRectangular, setresultRectangular] = useState(0)

  useEffect(() => {

  }, [resultrounded, resultRectangular]);

  const calulateRound = () => {
    const volume = (3.14159 * Math.pow(diameter / 2, 2) * depth) / 1000;
    setresultrounded(volume.toFixed(2))
    console.log("calculated")
  }

  const calculateRectangular = () => {
    const lengthInMeters = length / 100;
    const widthInMeters = width / 100;
    const depthRectangularInMeters = depthRectangular / 100;

    // Calculate the volume in cubic meters
    const volumerectangular = lengthInMeters * widthInMeters * depthRectangularInMeters;

    // Convert the volume from cubic meters to liters
    const volumeInLiters = volumerectangular * 1000;
    setresultRectangular(volumeInLiters);

  }







  return (
    <div>
      <div className="customer-first-container">
        <h1 className="h1-customer">{t('cust.title')}</h1>
      </div>


      <div className="second-customer-container">
        <h2 className="header-second-customer-container"> {t('cust.watertank')}</h2>
        <div className="second-inner-container-custom">
          <div className="second-inner-container-custom-div">
            <p className="second-inner-container-custom-firstp">1000L</p>
            <img className="second-inner-container-custom-img" src={firstcustomer} alt="dfsd" />
            <p className="parag-second-inner-container-custom">1000L</p>
            <button>{t('cust.order')}</button>
            <p className="parag-second-inner-container-custom">  {t('cust.vat')}
            </p>
          </div>







          <div className="second-inner-container-custom-div">
            <p className="second-inner-container-custom-firstp">2000L</p>
            <img className="second-inner-container-custom-img" src={secondcustomer} alt="dfsd" />
            <p className="parag-second-inner-container-custom">2000L</p>
            <button>{t('cust.order')}</button>
            <p className="parag-second-inner-container-custom">  {t('cust.vat')}
            </p>

          </div>
          <div className="second-inner-container-custom-div">
            <p className="second-inner-container-custom-firstp">3000L</p>
            <img className="second-inner-container-custom-img" src={thirdcustomer} alt="dfsd" />
            <p className="parag-second-inner-container-custom">3000L</p>
            <button>{t('cust.order')}</button>
            <p className="parag-second-inner-container-custom">  {t('cust.vat')}
            </p>
          </div>


          <div className="second-inner-container-custom-div">
            <p className="second-inner-container-custom-firstp">4000L</p>
            <img className="second-inner-container-custom-img" src={fourthcustomer} alt="dfsd" />
            <p className="parag-second-inner-container-custom">4000L</p>
            <button>{t('cust.order')}</button>
            <p className="parag-second-inner-container-custom">  {t('cust.vat')}
            </p>
          </div>



          <div className="second-inner-container-custom-div">
            <p className="second-inner-container-custom-firstp">5000L</p>
            <img className="second-inner-container-custom-img" src={fifthcustomer} alt="dfsd" />
            <p className="parag-second-inner-container-custom">5000L</p>
            <button>{t('cust.order')}</button>
            <p className="parag-second-inner-container-custom">  {t('cust.vat')}
            </p>
          </div>


          <div className="second-inner-container-custom-div">

            <p className="second-inner-container-custom-firstp">6000L</p>
            <img className="second-inner-container-custom-img" src={sixthcustomer} alt="dfsd" />
            <p className="parag-second-inner-container-custom">6000L</p>
            <button>{t('cust.order')}</button>
            <p className="parag-second-inner-container-custom">  {t('cust.vat')}
            </p>
          </div>
        </div>
      </div>

      <div>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="calculate-customer">{t('cust.view1')}</button>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <button className="calculate-customer">{t('cust.view2')}</button>

      </div>

      {/* pool calculators  */}

      <div className="third-customer-containre">

        <h2 className="header-second-customer-container">{t('cust.swimming')}</h2>



        <div className="third-customer-containre-leftandright">


          <div className="third-customer-containre-leftdiv">

            <img className="pool-img" src={customerpool1} alt="" />
            <br />
            <p className="title-pool">{t('cust.cal1')}
            </p>

            <table>
              <thead>
                <tr>
                  <td>{t('cust.diameter')}</td>
                  <td>
                    <input

                      value={diameter}
                      onChange={(e) => setdiameter(e.target.value)}
                      type="number" /> m
                  </td>

                </tr>
                <tr>
                  <td>{t('cust.avg')}</td>
                  <td><input
                    value={depth}
                    onChange={(e) => setdepth(e.target.value)}
                    type="number" /> m</td>

                </tr>
                <tr>
                  <td>{t('cust.pool')}</td>
                  <td> {resultrounded} {t('cust.liter')}</td>

                </tr>
              </thead>
            </table>
            <button onClick={() => { calulateRound() }} className="calculate-customer">{t('cust.calc')}</button>

          </div>







          {/* right container */}




          <div className="third-customer-containre-leftdiv">


            <p className="title-pool">{t('cust.cal2')}

            </p>

            <table>
              <thead>
                <tr>
                  <td>{t('cust.length')}</td>

                  <td>
                    <input
                      value={length}
                      onChange={(e) => setlength(e.target.value)}
                      type="number" />m
                  </td>

                </tr>
                <tr>
                  <td>{t('cust.width')}</td>
                  <td><input
                    value={width}
                    onChange={(e) => setwidth(e.target.value)}
                    type="number" /> m</td>

                </tr>
                <tr>
                  <td>{t('cust.avg')}</td>
                  <td><input
                    value={depthRectangular}
                    onChange={(e) => setdepthRectangular(e.target.value)}

                    type="number" /> m</td>

                </tr>
                <tr>
                  <td>{t('cust.pool')}</td>
                  <td>{resultRectangular} {t('cust.liter')}</td>

                </tr>
              </thead>
            </table>
            <button
              onClick={() => { calculateRectangular() }}
              className="calculate-customer">{t('cust.calc')}</button>


            <img className="pool-img" src={customerpool2} alt="" />
            <br />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Customercomp;