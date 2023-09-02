import React from 'react';
import Navcomp from '../components/Navcomp';
import HomeFirstSection from '../components/HomeFirstSection';
import HomeSecondSection from '../components/HomeSecondSection';
import HomeThirdSection from '../components/HomeThirdSection';
import Footer from "../components/Footer"
function  Home  ()  {
  return (
    <div>
<Navcomp/>
<HomeFirstSection/>
<HomeSecondSection/>
<HomeThirdSection/>
<Footer/>

    </div>
  );
}

export default Home;
