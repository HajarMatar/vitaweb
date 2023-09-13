import React, { useEffect, useState } from 'react';
import "./SupplierViewAcceptedOrders.css"
import { get, post } from '../services/httpService';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SupplierViewAcceptedOrderscomponent = () => {
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
    let url = '/view_supplier_orders_to_serve' + '?id=' + user.id;
    get(url)
      .then((response) => {
        console.log('get view_supplier_orders_to_serve response', response);
        setOrders(response);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      });
  }, [buttonClickCount]);

  const completeOrder = (order) => {
    let url = '/complete_order?id=' + order.id + "&offer_id=" + order.offers_id;
    const user = JSON.parse(localStorage.getItem('user'));
    post(url, {}) // Example endpoint for login
      .then((response) => {
        console.log('add offer response', response);
        toast.success('Order completed successfully!', {
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
        <h1 className='contact-h1'>{t('Orders to be served!')}
        </h1>

        <div className='innner-body-contact'>

          <div className="orders-container">
            {orders.map((order, index) => (
              <div key={index} className="order-card">
                <div>
                  <strong>Customer:</strong> {order.client_name || 'N/A'}
                </div>
                <div>
                  <strong>Phone Number:</strong> {order.client_phone}
                </div>
                <div>
                  <strong>Payment Method:</strong> {order.payment_method}
                </div>
                <div>
                  <strong>Tank ID:</strong> {order.tank_id || 'N/A'}
                </div>
                <div>
                  <strong>Created At:</strong> {order.created_at || 'N/A'}
                </div>

                {order.state === 'pending' && (
                  <div className="button-container">
                    <button className="cancel-button" onClick={() => completeOrder(order)}>
                      Complete Order
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
export default SupplierViewAcceptedOrderscomponent;
