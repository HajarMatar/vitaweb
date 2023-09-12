import "./Logincomp.css"

import { Link } from "react-router-dom";
import "./Signupcomp.css"
const Signupcomp = () => {

return(
<div>




<div className="signup-inner-container">



<h2 className="h3-signup">Sign Up</h2>
<br />
<div className="signup-fields-con">
<label className="label-signup" >Name </label>
<br />
<input className="input-signup" type="text" />
<br />
<label className="label-signup">Phone Number</label>
<br />
<input className="input-signup" type="text" />
<br />
<label className="label-signup" >Email</label>
<br />
<input className="input-signup" type="text" />
<br />
<label className="label-signup" >Password</label>
<br />
<input className="input-signup" type="text" />


</div>
<button className="button-signup">Create</button>

</div>



</div>





)}
export default Signupcomp;