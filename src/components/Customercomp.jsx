import "./Customercomp.css"

import { useState,useEffect  } from "react"
import firstcustomer from "../Images/firstcustomer.png"
import secondcustomer from "../Images/secondcustomer.png"
import thirdcustomer from "../Images/thirdcustomer.png"
import fourthcustomer from "../Images/fourthcustomer.png"
import fifthcustomer from "../Images/fifthcustomer.png"
import sixthcustomer from "../Images/sixthcustumer.png"
import customerpool1 from "../Images/customerpool1.png"
import customerpool2 from "../Images/customerpool2.png"

const Customercomp = () => {
    const [depth,setdepth]=useState(0)
    const[diameter,setdiameter]=useState(0)
    const[resultrounded,setresultrounded]=useState(0);


    const [length,setlength]=useState(0)
    const[width,setwidth]=useState(0)
    const[depthRectangular,setdepthRectangular]=useState(0)
    const[resultRectangular,setresultRectangular]=useState(0)

    useEffect(() => {
       
      },[resultrounded,resultRectangular]);

const calulateRound =()=>{
    const volume = (3.14159 * Math.pow(diameter / 2, 2) * depth) / 1000;
    setresultrounded(volume.toFixed(2))
console.log("calculated")
}

const calculateRectangular=()=>{
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
<h1 className="h1-customer">For Our Customers</h1>
        </div>


<div className="second-customer-container">
<h2 className="header-second-customer-container">WATERTANK</h2>

<div className="second-inner-container-custom">



<div className="second-inner-container-custom-div">
<p className="second-inner-container-custom-firstp">1000L</p>
<img className="second-inner-container-custom-img" src={firstcustomer} alt="dfsd" />
<p className="parag-second-inner-container-custom">1000L</p>
<p className="parag-second-inner-container-custom">20$</p>

<p className="parag-second-inner-container-custom">  (INCLUDING VAT)
 </p>
</div>







<div className="second-inner-container-custom-div">
<p className="second-inner-container-custom-firstp">1000L</p>
<img className="second-inner-container-custom-img" src={secondcustomer} alt="dfsd" />
<p className="parag-second-inner-container-custom">1000L</p>
<p className="parag-second-inner-container-custom">20$</p>

<p className="parag-second-inner-container-custom">  (INCLUDING VAT)
 </p>

</div>
<div className="second-inner-container-custom-div">

<p className="second-inner-container-custom-firstp">1000L</p>
<img className="second-inner-container-custom-img" src={thirdcustomer} alt="dfsd" />
<p className="parag-second-inner-container-custom">1000L</p>
<p className="parag-second-inner-container-custom">20$</p>

<p className="parag-second-inner-container-custom">  (INCLUDING VAT)
 </p>
</div>


<div className="second-inner-container-custom-div">

<p className="second-inner-container-custom-firstp">1000L</p>
<img className="second-inner-container-custom-img" src={fourthcustomer} alt="dfsd" />
<p className="parag-second-inner-container-custom">1000L</p>
<p className="parag-second-inner-container-custom">20$</p>

<p className="parag-second-inner-container-custom">  (INCLUDING VAT)
 </p>
</div>



<div className="second-inner-container-custom-div">

<p className="second-inner-container-custom-firstp">1000L</p>
<img className="second-inner-container-custom-img" src={fifthcustomer} alt="dfsd" />
<p className="parag-second-inner-container-custom">1000L</p>
<p className="parag-second-inner-container-custom">20$</p>

<p className="parag-second-inner-container-custom">  (INCLUDING VAT)
 </p>
</div>


<div className="second-inner-container-custom-div">

<p className="second-inner-container-custom-firstp">1000L</p>
<img className="second-inner-container-custom-img" src={sixthcustomer} alt="dfsd" />
<p className="parag-second-inner-container-custom">1000L</p>
<p className="parag-second-inner-container-custom">20$</p>

<p className="parag-second-inner-container-custom">  (INCLUDING VAT)
 </p>
</div>






</div>



</div>






{/* pool calculators  */}

<div className="third-customer-containre">

<h2 className="header-second-customer-container">SWIMMING POOL</h2>



<div className="third-customer-containre-leftandright">


<div className="third-customer-containre-leftdiv">

<img className="pool-img" src={customerpool1} alt="" />
<br />
<p className="title-pool">Calculation For The Round Pool
</p>

<table>
<thead>
  <tr>
    <td>Diameter Of The Pool</td>
    <td>
        <input 
        
        value={diameter}
        onChange={(e) => setdiameter(e.target.value)}
        type="number" /> m
    </td>
  
  </tr>
  <tr>
    <td>Average Depth Of The Pool</td>
    <td><input
      value={depth}
      onChange={(e) => setdepth(e.target.value)}
    type="number" /> m</td>
    
  </tr>
    <tr>
    <td>Your Pool Take Around</td>
    <td> {resultrounded} Liter of water</td>
    
  </tr>
  </thead>
</table>
<button onClick={()=>{calulateRound()}} className="calculate-customer">Calculate</button>

</div>







{/* right container */}



    
<div className="third-customer-containre-leftdiv">


<p className="title-pool">Calculation For The Rectangular Pool

</p>

<table>
<thead>
  <tr>
    <td>Length Of The Pool</td>

    <td>
        <input 
         value={length}
         onChange={(e) => setlength(e.target.value)}
        type="number" />m
    </td>
  
  </tr>
  <tr>
    <td>Width Of The Pool</td>
    <td><input
     value={width}
     onChange={(e) => setwidth(e.target.value)}
    type="number" /> m</td>
    
  </tr>
    <tr>
    <td>Average Depth Of The Pool</td>
    <td><input
     value={depthRectangular}
     onChange={(e) => setdepthRectangular(e.target.value)}
   
    type="number" /> m</td>
    
  </tr>
  <tr>
    <td>Your Pool Take Around</td>
    <td>{resultRectangular} Liter of water</td>
    
  </tr>
  </thead>
</table>
<button 
onClick={()=>{calculateRectangular()}}
className="calculate-customer">Calculate</button>


<img className="pool-img" src={customerpool2} alt="" />
<br />

</div>














</div>



























</div>






        
          </div>
  );
};

export default Customercomp;