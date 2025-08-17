import React from 'react';
import './ProductCardd.css';

function ProductCard({ icon }) {
  return (
    <div className="product-card text-center">
      <div className="iconn-box py-4">
        <img src={icon} alt="product-icon" className="img-fluid" />
      </div>
    </div>
  );
}

export default ProductCard;
