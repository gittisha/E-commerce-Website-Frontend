import React from 'react';
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="Offers">
      <div className="offers">
        <div className="offers-left">
            <h1> Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SERLLERS PRRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;