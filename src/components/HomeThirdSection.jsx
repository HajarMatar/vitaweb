import React from 'react';
import "../components/HomeThirdSection.css"
import phoneicon from "../Images/phoneicon.png"
import tanks from "../Images/tanks.png"
import homethirdsectionimg from "../Images/homethirdsection.jpg"
import homethirdsectionimgg from "../Images/homethirdsection2.jpg"

const HomeThirdSection = () => {
  return (
    <div className='HomeThirdSection-container'>
<h1 className='header-ThirdSection'>Filling all different sizes</h1>


<div className='middile-thirdSection'>


<div className='left-middile-thirdSection'>
    <h1 className='parag-left-middile-thirdSection'>
JUST GIVE <br />
US <br />
A CALL <br />
</h1>
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

<h1 className='header-final-thirdsection'>Storage Tanks</h1>
<img className='img-final-thirdsection' src={homethirdsectionimg} alt="" />
<h3 className='parag-final-thirdsection'>Providing potable
water to irrigate crops
at reasonable prices</h3>
</div>
<div className='right-final-thirdsection'>

<h1 className='header-final-thirdsection-Swimming'>Swimming Pools</h1>
<img className='img-final-thirdsection' src={homethirdsectionimgg} alt="" />
<h3 className='paragright-final-thirdsection'>Give us a call to arrange to deliver water for
your swimming pool quickly and for a
fair price. We also can fill or pond as well</h3>
</div>



</div>




    </div>
  );
}

export default HomeThirdSection;