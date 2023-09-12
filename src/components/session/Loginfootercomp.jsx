import "./Logincomp.css"

import { Link } from "react-router-dom";

const Loginfootercomp = () => {
    return(
        <div>


<div className="loginn-foot-con">

<Link to="/Signup" className="Link-login-foot"> Sign up</Link>
 
<Link to="/Changepass" className="Link-login-foot"> Change Password</Link>
<Link to="/EditPage" className="Link-login-foot"> Edit </Link>
</div>


        </div>
    )
}
export default Loginfootercomp;