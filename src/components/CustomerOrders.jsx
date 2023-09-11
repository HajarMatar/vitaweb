import React, { useEffect, useState } from 'react';
import "./CustomerOrders.css"
import { post } from '../services/httpService';

import { useTranslation } from 'react-i18next';

const CustomerOrderscomponent = () => {
  const { t, i18n } = useTranslation();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Make an API call to fetch the data
    const exampleData = [
      {
        "client_id": 1,
        "created_at": null,
        "id": 4,
        "offer_id": 3,
        "payment_method": "cash",
        "price": 50,
        "state": "accepted",
        "supplier_id": 1,
        "tank_id": 2,
        "updated_at": "Mon, 28 Aug 2023 11:33:30 GMT"
      },
      {
        "client_id": 1,
        "created_at": null,
        "id": 5,
        "offer_id": 2,
        "payment_method": "cash",
        "price": 50,
        "state": "pending",
        "supplier_id": 1,
        "tank_id": 2,
        "updated_at": "Sat, 26 Aug 2023 12:47:47 GMT"
      },
      {
        "client_id": 1,
        "created_at": null,
        "id": 6,
        "offer_id": 3,
        "payment_method": "cash",
        "price": 60,
        "state": "accepted",
        "supplier_id": 1,
        "tank_id": 2,
        "updated_at": "Sat, 26 Aug 2023 12:47:47 GMT"
      },
      // Add more example data here...
    ];
    setOrders(exampleData);


    let url = '/view_client_orders';
    post(url, { 'client_id': '1', 'state': 'all' }) // Example endpoint for login
      .then((response) => {
        console.log('login response', response);
        setOrders(response.dataa);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  }, []);

  const cancelOrder = (orderId) => {
    // Implement cancel order functionality here
    // You can make another API call to cancel the order or update its state
  };


  return (
    <div>
      <div className='header-contactus'></div>
      <div className='body-contact-container'>
        <h1 className='contact-h1'>{t('Customer orders')}
        </h1>


        <div className='innner-body-contact'>

          <div className="orders-container">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div>
                  <strong>Offer ID:</strong> {order.offer_id || 'N/A'}
                </div>
                <div>
                  <strong>Payment Method:</strong> {order.payment_method}
                </div>
                <div>
                  <strong>Price:</strong> {order.price || 'N/A'}
                </div>
                <div>
                  <strong>State:</strong> {order.state}
                </div>
                <div>
                  <strong>Updated At:</strong> {order.updated_at || 'N/A'}
                </div>
                {order.state === 'pending' && (
                  <div className="button-container">
                    <button className="cancel-button" onClick={() => cancelOrder(order.id)}>
                      Cancel Order
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default CustomerOrderscomponent;
