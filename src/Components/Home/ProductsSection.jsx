import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

// Import your icons
import waterIcon from '../../images/Buf lite1.png';
import oilIcon from '../../images/contoil.png';
import gasIcon from '../../images/m1.png';

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
          details="Used in industries for water flow monitoring and control.loremsvshxisuxdbajlxajxauox hxbshxusyxgusyx gaagxouagsiuash avxaxgauogx xbaouxga "
        />
        <ProductCard
          icon={oilIcon}
          title="Oil Flow Meter"
          details="Precise oil flow measurement for industrial applications."
        />
        <ProductCard
          icon={gasIcon}
          title="Gas Flow Meter"
          details="Reliable gas flow monitoring solutions."
        />
      </Row>
            <Row>
        <ProductCard
          icon={waterIcon}
          title="Water Flow Meter"
          details="Used in industries for water flow monitoring and control."
        />
        <ProductCard
          icon={oilIcon}
          title="Oil Flow Meter"
          details="Precise oil flow measurement for industrial applications."
        />
        <ProductCard
          icon={gasIcon}
          title="Gas Flow Meter"
          details="Reliable gas flow monitoring solutions."
        />
      </Row>
      
    </Container>
  );
}

export default ProductsSection;
