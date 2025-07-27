import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

// Import your icons
import oilIcon from '../../images/oil.png';
import waterIcon from '../../images/water.png';
import airIcon from '../../images/Air.png';
import gasIcon from '../../images/gas.png';
import steamIcon from '../../images/steam.png';
import chemicalIcon from '../../images/chemical.png';

function ProductsSection() {
  return (
    <Container className="py-5">
      <h5 className="fw-bold mb-4 text-start">
        <span style={{ borderLeft: '3px solid #ffcc00', paddingLeft: '10px' }}>
          OUR PRODUCTS
        </span>
      </h5>
      <Row>
        <ProductCard
          icon={oilIcon}
          title="Oil"
          details="Company that offers design and build services for you from initial sketches to the final production. "
        />
        <ProductCard
          icon={waterIcon}
          title="Water"
          details="We consider all the drivers of change - from the ground up and we'll motivate and support you to make the change."
        />
        <ProductCard
          icon={airIcon}
          title="Air"
          details="Design repeatable growth models and innovation pipelines that generate new products with higher potential and lower risks of failure."
        />
        
      </Row>
            <Row>
        <ProductCard
          icon={gasIcon}
          title="Gas"
          details="We work buy-side and sell-side and give our clients hard-hitting and objective answers and focus hard on the best opportunities."
        />
        <ProductCard
          icon={steamIcon}
          title="Steam"
          details="We work across all the major geographies, meaning we understand the underlying drivers in construction markets."
        />
        <ProductCard
          icon={chemicalIcon}
          title="Chemicals"
          details="Scheduled transport operations, from broad market trends and strategy to the development of integrated commercial strategies."
        />
      </Row>
      
    </Container>
  );
}

export default ProductsSection;
