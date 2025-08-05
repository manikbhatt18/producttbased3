import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

// Import your icons
import aquametro from '../../images/partner1.jpg';
import apator from '../../images/partner2.jpg';
import elgas from '../../images/partner3.jpg';
import micro from '../../images/partner4.jpg';
import ultraflex from '../../images/partner5.jpg';

function OurPartners() {
  return (
    <Container className="py-5">
      <h5 className="fw-bold mb-4 text-start">
        <span style={{ borderLeft: '3px solid #ffcc00', paddingLeft: '10px' }}>
          OUR PARTNERS
        </span>
      </h5>
      <Row>
        <ProductCard
          icon={aquametro}
          title="Aquametro"
          details="A leading company for fuel oil consumption measurement and performance monitoring systems in marine applications, burners, fuel monitoring solutions for all diesel engines."
        />
        <ProductCard
          icon={apator}
          title="Apator Powogaz"
          details="ApatorPowogaz SA (former FabrykaWodomierzyPoWoGaz SA – Water Meter Company) is one of the largest water meter manufacturers in Poland and Europe.."
        />
        <ProductCard
          icon={elgas}
          title="Elgas"
          details="Elgas, s. r. o. is the private Czech company, which develops and manufactures the accurate measuring systems for custody transfer mainly for customers in gas industry."
        />
      </Row>
            <Row>
        <ProductCard
          icon={micro}
          title="Micronics"
          details="Our ultrasonic flow meters are mainly used in the retrofit Building Services and Energy Management market."
        />
        <ProductCard
          icon={ultraflex}
          title="Ultraflux"
          details="Ultraflux has specialised in ultrasound instrumentation since 1974, developing, manufacturing and selling solutions based on the ultrasonic transit time difference principle."
        />
        
      </Row>
      
    </Container>
  );
}

export default OurPartners;
