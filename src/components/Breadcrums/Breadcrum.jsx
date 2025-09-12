import React from 'react';
import './Breadcrum.css';
import arrow_icons from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="Breadcrum">
        Home <img src={arrow_icons} alt="" /> SHOP <img src={arrow_icons} alt="" /> {product.category} <img src={arrow_icons} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;