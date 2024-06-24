import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Auth from './pages/Auth/Auth'
import Payments from './pages/payment/Payments'
import Order from './pages/Orders/Order'
import Cart from './pages/cart/Cart'
import Results from './pages/results/Results'
import Productdetail from './pages/productdetails/Productdetail'
import {Elements } from '@stripe/react-stripe-js';
import {loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe('pk_test_51PMur6K6WpWAWEW0nl6ieTHlJeVAq1bMWETousR2u0H35wihdBUH9KRmSjYVYk256YQU74DltYcX99jlc6ezq14G002IWb2OaZ');
function Routering() {
  return (
    <Router>
        <Routes>
            <Route path="/"element={<Landing/>} />
            <Route path="/auth"element={<Auth/>} />
            <Route path="/Payments"element={
             <ProtectedRoute msg={"You must log in to pay"} redirect={"/payments"}>;
            <Elements stripe={stripePromise}>
            <Payments />
            </Elements>
           </ProtectedRoute>
            }
            />
            
            <Route path="/Order"element={
          <ProtectedRoute msg={"You must log in to access order"} redirect={"/order"}>;
          <Order />
         
         </ProtectedRoute>
          
          } />
            
            <Route path="/category/:catagoryName"element={<Results/>} />
            <Route path="/products/:productid"element={<Productdetail/>} />
            <Route path="/cart"element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routering