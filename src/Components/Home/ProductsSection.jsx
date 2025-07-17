import React from 'react';

function ProductsSection() {
  return (
    <div className="products">
      <h4>OUR PRODUCTS</h4>
      <div className="product-grid">
        <div className="product-card">
          <div className="icon water"></div>
          <button>Water Flow Meter</button>
        </div>
        <div className="product-card">
          <div className="icon air"></div>
          <button>Air Flow Meter</button>
        </div>
        <div className="product-info">
          <p>Positive Displacement (PD) meters accurately measure oil flow, suitable for hydrocarbons, oils, diesel, fuels, and solvents.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;