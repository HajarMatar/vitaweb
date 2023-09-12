import "./Logincomp.css"

import { Link } from "react-router-dom";
import "./Changepasscomp.css"
const Changepasscomp = () => {

return(
    <div>




<div className="signup-inner-container">
    <h2 className="h3-changepass">Change Password</h2>


<div className="change-input-labels-con">
<div className="changepass-row">
<label className="labels-changepass" >Phone number</label>
<input className="inputs-changepass" type="text" />
</div>
<br />

<div className="changepass-row">

<label className="labels-changepass" > Old Password</label>
<input className="inputs-changepass" type="text" />
</div>


<br />

<div className="changepass-row">

<label  className="labels-changepass">New Password</label>
<input className="inputs-changepass" type="text" />
</div>

</div>


<button className="changepass-save">Save</button>


</div>






    </div>
)}
export default Changepasscomp;