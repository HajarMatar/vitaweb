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
import CustomerOrders from "./pages/CustomerOrders"
import ViewAllSuplier from "./pages/ViewAllSuplier"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/changepassword' element={<ProtectedRoute element={<ChangePassword />} />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Employment' element={<Employment />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Customer' element={<ProtectedRoute element={<Customer />} />} />
          <Route path='/CustomerOrders' element={<ProtectedRoute element={<CustomerOrders />} />} />
          <Route path='/ViewAllSuplier' element={<ProtectedRoute element={<ViewAllSuplier />} />} />

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

// isLoggedIn function
function isLoggedIn() {
  const token = localStorage.getItem('token') || '';
  return token !== '';
}

export default App;
