import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (120)</div>
      </div>
      <div className="descriptionbox-descripton">
        <p>An e-commerce website is an online platform for buying and selling products, services, and digital goods. It features an online storefront, product galleries, a shopping cart, a checkout system, and backend functionality for processing payments, shipping, and marketing. </p>
        <p> The site should have clear menus and categories that are intuitive for users. Customers should be able to easily filter and sort products by relevant characteristics</p>
      </div>
    </div>
  );
};

export default DescriptionBox;