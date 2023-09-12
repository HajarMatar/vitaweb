import "./Logincomp.css"

import { Link } from "react-router-dom";
import "./Signupcomp.css"
const Editcomp = () => {

return(
<div>




<div className="signup-inner-container">



<h2 className="h3-signup">Edit</h2>
<br />
<div className="signup-fields-con">
<label className="label-signup" >NEW NAME 
 </label>
<br />
<input className="input-signup" type="text" />
<br />
<label className="label-signup">OLD PHONE NUMBER
</label>
<br />
<input className="input-signup" type="text" />
<br />
<label className="label-signup" > NEW EMAIL
</label>
<br />
<input className="input-signup" type="text" />
<br />
<label className="label-signup" >NEW PHONE NUMBER
</label>
<br />
<input className="input-signup" type="text" />


</div>
<button className="button-signup">Save</button>

</div>



</div>





)}
export default Editcomp;