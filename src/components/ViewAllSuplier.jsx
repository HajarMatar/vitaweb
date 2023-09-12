import React, { useEffect, useState } from 'react';
import './ViewAllSuplier.css';
import { post } from '../services/httpService';
import { useTranslation } from 'react-i18next';


const AppViewAllSuplier = () => {
  const { t, i18n } = useTranslation();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint URL

    let url = '/view_client_orders';
    post(url, { 'client_id': '1', 'state': 'all' }) // Example endpoint for login
      .then((response) => {
        console.log('get client orders response', response);
        setUsers(response);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  }, []);

  return (

    <div>
      <div className='header-contactus'></div>
      <div className='body-contact-container'>
        <h1 className='contact-h1'>{t('All Suppliers')}
        </h1>


        <div className='innner-body-contact'>


          <div className="supplier">
            <div className="User-list">
              {users.map((user) => (
                <div key={user.ID} className="User-card">
                  <h2>{user.name}</h2>
                  <p>Email: {user.email}</p>
                  <p>Phone Number: {user.phone_number}</p>
                  <p>Region: {user.region}</p>
                  <p>Created At: {user.created_at}</p>
                  <p>Username: {user.username}</p>
                  <p>Password: {user.password}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppViewAllSuplier;
