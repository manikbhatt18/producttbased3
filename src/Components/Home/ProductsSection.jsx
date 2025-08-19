import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCardd';

import waterIcon from '../../images/icon2.png';
import airIcon from '../../images/icon3.png';
import oilIcon from '../../images/icon1.png';

import gasIcon from '../../images/icon4.png';
import steamIcon from '../../images/icon5 (2).png';
import chemicalIcon from '../../images/icon6.png';

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
          icon={waterIcon}
          title="Water Flow Meter"
          details="We consider all the drivers of change - from the ground up and we'll motivate and support you to make the change."
          
        />
        <ProductCard
          icon={airIcon}
          title="Air Flow Meter"
          details="Design repeatable growth models and innovation pipelines that generate new products with higher potential and lower risks of failure."
        />
        <ProductCard
          icon={oilIcon}
          title="Oil Flow Meter"
          details="Company that offers design and build services for you from initial sketches to the final production. "
        />
        
      </Row>
            <Row>
        <ProductCard
          icon={gasIcon}
          title="Gas Flow Meter"
          details="We work buy-side and sell-side and give our clients hard-hitting and objective answers and focus hard on the best opportunities."
        />
        <ProductCard
          icon={steamIcon}
          title="Steam Flow Meter"
          details="We work across all the major geographies, meaning we understand the underlying drivers in construction markets."
        />
        <ProductCard
          icon={chemicalIcon}
          title="Chemicals Flow Meter"
          details="Scheduled transport operations, from broad market trends and strategy to the development of integrated commercial strategies."
        />
      </Row>
      
    </Container>
  );
}

export default ProductsSection;
