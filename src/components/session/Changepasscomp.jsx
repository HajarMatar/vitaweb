import "./Logincomp.css"
import react,{ useState} from 'react';
import { Link } from "react-router-dom";
import "./Changepasscomp.css"
const Changepasscomp = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        oldPassword: '',
        newPassword: '',
      });
    
      const [responseMessage, setResponseMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = () => {
        // Make an API call to save the form data
        const apiUrl = 'change_client_password'; // Replace with your API endpoint
        fetch(apiUrl, {
          method: 'POST', // or 'PUT' or 'PATCH' depending on your API
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response, set responseMessage accordingly
            setResponseMessage(data.message);
          })
          .catch((error) => {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again.');
          });
      };
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