import React from 'react';
import Header from '../components/Header';

const Booking = () => {
const isLoggedIn=sessionStorage.getItem('isLoggedIn');


  return (
    <div>
      <nav><Header/></nav>
      <h1>Welcome Booking page{isLoggedIn}</h1>
      <p>We offer various services to meet your needs.</p>
    </div>
  );
}

export default Booking;
