import React, { useEffect, useState } from 'react';
import "./SupplierViewOrders.css"
import { get, post } from '../services/httpService';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SupplierViewOrderscomponent = () => {
  const { t, i18n } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [price, setPrice] = useState(50);

  const handleInputChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    // Make an API call to fetch the data
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    let url = '/view_supplier_orders' + '?id=' + user.id;
    get(url)
      .then((response) => {
        console.log('get view_supplier_orders response', response);
        setOrders(response);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  }, [buttonClickCount]);

  const addOffer = (order) => {
    // Implement cancel order functionality here
    // You can make another API call to cancel the order or update its state
    let url = '/add_offer';
    const user = JSON.parse(localStorage.getItem('user'));
    post(url, { order_id: order.order_id, supplier_id: user.id, tank_id: order.tank_id, payment_method: order.payment_method, price: price || 50 }) // Example endpoint for login
      .then((response) => {
        console.log('add offer response', response);
        toast.success('Offer sent to the customer!', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setButtonClickCount((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  };


  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='header-contactus'></div>
      <div className='body-contact-container'>
        <h1 className='contact-h1'>{t('Customers orders')}
        </h1>

        <div className='innner-body-contact'>

          <div className="orders-container">
            {orders.map((order, index) => (
              <div key={index} className="order-card">
                <div>
                  <strong>Customer:</strong> {order.client_name || 'N/A'}
                </div>
                <div>
                  <strong>Payment Method:</strong> {order.payment_method}
                </div>
                <div>
                  <strong>Tank ID:</strong> {order.tank_id || 'N/A'}
                </div>
                <div>
                  <strong>State:</strong> {order.state}
                </div>
                <div>
                  <strong>Created At:</strong> {order.created_at || 'N/A'}
                </div>

                {order.state === 'pending' && (
                  <div className="button-container">
                    <p className="parag-second-inner-container-custom">Offer:&nbsp;
                      <input
                        type="text"
                        onBlur={handleInputChange}
                        placeholder="Price $"
                      />
                    </p>
                    <button className="cancel-button" onClick={() => addOffer(order)}>
                      Add Offer
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
export default SupplierViewOrderscomponent;
