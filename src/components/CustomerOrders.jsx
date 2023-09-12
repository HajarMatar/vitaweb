import React, { useEffect, useState } from 'react';
import "./CustomerOrders.css"
import { get, post } from '../services/httpService';
import { useTranslation } from 'react-i18next';

const CustomerOrderscomponent = () => {
  const { t, i18n } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [buttonClickCount, setButtonClickCount] = useState(0);


  useEffect(() => {
    // Make an API call to fetch the data
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    let url = '/view_client_orders' + '?id=' + user.id;
    get(url) // Example endpoint for login
      .then((response) => {
        console.log('get client orders response', response);
        setOrders(response);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  }, [buttonClickCount]);

  const cancelOrder = (orderId) => {
    // Implement cancel order functionality here
    // You can make another API call to cancel the order or update its state
    let url = '/delete_order';
    post(url, { 'id': orderId }) // Example endpoint for login
      .then((response) => {
        console.log('delete order response', response);
        setButtonClickCount((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  };

  const acceptOffer = (orderId, offerId) => {
    // Implement accept offer functionality here
    // You can update the status of the offer locally
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        const updatedOffers = order.offers.map((offer) => {
          if (offer.id === offerId) {
            return { ...offer, status: 'accepted' };
          }
          return offer;
        });
        return { ...order, offers: updatedOffers };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const rejectOffer = (orderId, offerId) => {
    // Implement reject offer functionality here
    // You can update the status of the offer locally
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        const updatedOffers = order.offers.map((offer) => {
          if (offer.id === offerId) {
            return { ...offer, status: 'rejected' };
          }
          return offer;
        });
        return { ...order, offers: updatedOffers };
      }
      return order;
    });
    setOrders(updatedOrders);
  };


  return (
    <div>
      <div className='header-contactus'></div>
      <div className='body-contact-container'>
        <h1 className='contact-h1'>{t('Customer orders')}
        </h1>


        <div className='innner-body-contact'>

          <div className="orders-container">
            {orders.map((order, index) => (
              <div key={index} className="order-card">
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
                  <strong>Created At:</strong> {order.created_at || 'N/A'}
                </div>

                {order.state === 'pending' && (
                  <div className="button-container">
                    <button className="cancel-button" onClick={() => cancelOrder(order.id)}>
                      Cancel Order
                    </button>
                    {/* <strong>Supplier Offers:</strong>
                    <ul>
                      {order.offers.map((offer) => (
                        <li key={offer.id}>
                          Offer Price: {offer.price}, Status: {offer.status}
                          {offer.status === 'pending' && (
                            <div className="button-container">
                              <button
                                className="accept-button"
                                onClick={() => acceptOffer(order.id, offer.id)}
                              >
                                Accept
                              </button>
                              <button
                                className="reject-button"
                                onClick={() => rejectOffer(order.id, offer.id)}
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul> */}
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
