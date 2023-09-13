import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
import Employment from "./pages/Employment";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import SignUp from "./pages/SignUp";
import Edit from "./pages/Edit";
import CustomerOrders from "./pages/CustomerOrders";
import ViewAllOffers from "./pages/ViewAllOffers";
import ViewAllSuplier from "./pages/ViewAllSuplier";

import SupplierViewOrders from "./pages/SupplierViewOrders"

import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import ChangepassPage from "./pages/ChangepassPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/changepassword' element={<ProtectedRoute element={<ChangePassword />} />} />
          <Route path='/edit' element={<Edit />} />
    {/* <Route path='/signup' element={<SignUp />} /> */}
    <Route path='/Employment' element={<Employment />} />
    <Route path='/AboutUs' element={<AboutUs />} />
    <Route path='/ContactUs' element={<ContactUs />} />
    <Route path='/Customer' element={<ProtectedCustomerRoute element={<Customer />} />} />
    <Route path='/CustomerOrders' element={<ProtectedCustomerRoute element={<CustomerOrders />} />} />
    <Route path='/CustomerOffers' element={<ProtectedCustomerRoute element={<ViewAllOffers />} />} />
    <Route path='/ViewAllSuplier' element={<ProtectedRoute element={<ViewAllSuplier />} />} />
    <Route path='/ViewOrders' element={<ProtectedRoute element={<SupplierViewOrders />} />} />

    <Route path='/Login' element={<Loginpage />} />
    <Route path='/Signup' element={<Signuppage />} />
    <Route path='/Changepass' element={<ChangepassPage />} />
    <Route path='/EditPage' element={<EditPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

// Custom route wrapper to protect routes
function ProtectedRoute({ element }) {
  const [authenticated, setAuthenticated] = useState(isLoggedIn());

  // Re-check authentication status on navigation
  useEffect(() => {
    setAuthenticated(isLoggedIn());
  }, []);

  return authenticated ? element : <Navigate to="/Login" />;
}

// Custom route wrapper to protect routes
function ProtectedCustomerRoute({ element }) {
  const [authenticated, setAuthenticated] = useState(isLoggedIn());

  // Re-check authentication status on navigation
  useEffect(() => {
    setAuthenticated(isLoggedIn());
  }, []);

  let type = localStorage.getItem('userType')

  return authenticated && type === 'client' ? element : <Navigate to="/Login" />;
}

// isLoggedIn function
function isLoggedIn() {
  const token = localStorage.getItem('token') || '';
  return token !== '';
}

export default App;
