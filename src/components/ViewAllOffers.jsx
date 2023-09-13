import React, { useEffect, useState } from 'react';
import './ViewAllOffers.css';
import { post } from '../services/httpService';
import { useTranslation } from 'react-i18next';


const AppViewAllOffers = () => {
  const { t, i18n } = useTranslation();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint URL

    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    let url = '/view_offers' + '?id=' + user.id;
    post(url, { client_id: user.id }) // Example endpoint for login
      .then((response) => {
        console.log('get view_offers response', response);
        setUsers(response);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  }, []);

  const acceptOffer = (offer) => {
    let url = '/accept_offer?id=' + offer.id;
    post(url, { id: offer.id, order_id: offer.order_id, supplier_id: offer.supplier_id, price: offer.price })
      .then((response) => {
        console.log('get accept_offer response', response);
        window.location.reload(); // Reload the current page
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  };

  const rejectOffer = (offer) => {
    // Implement reject offer functionality here
    // You can update the status of the offer locally
    let url = '/delete_offer?id=' + offer.id;
    post(url, { id: offer.id, order_id: offer.order_id, supplier_id: offer.supplier_id, price: offer.price })
      .then((response) => {
        console.log('get accept_offer response', response);
        window.location.reload(); // Reload the current page
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });

  };

  return (

    <div>
      <div className='header-contactus'></div>
      <div className='body-contact-container'>
        <h1 className='contact-h1'>{t('All Offers')}
        </h1>


        <div className='innner-body-contact'>


          <div className="supplier">
            <div className="User-list">
              {users.map((offer, index) => (
                <div key={index} className="User-card">
                  <h2>{offer.price} $</h2>
                  <p>Order ID: {offer.order_id}</p>
                  <p>Payment method: {offer.payment_method}</p>
                  <p>State: {offer.state}</p>
                  <p>Supplier ID: {offer.supplier_id}</p>
                  <p>Created At: {offer.created_at}</p>
                  <div className="button-container">
                    <button
                      className="accept-button"
                      onClick={() => acceptOffer(offer)}
                    >
                      Accept
                    </button>
                    <button
                      className="cancel-button"
                      onClick={() => rejectOffer(offer)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppViewAllOffers;
