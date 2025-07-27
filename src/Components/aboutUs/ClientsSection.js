import React from 'react';
import './ClientsSection.css';

import ultraTech from '../../images/ab1.png';
import mahindra from '../../images/ab2.png';
import motherDairy from '../../images/ab3.png';
import ntpc from '../../images/ab1.png';
import oilIndia from '../../images/ab2.png';
import iitRoorkee from '../../images/ab3.png';

const logos = [ultraTech, mahindra, motherDairy, ntpc, oilIndia, iitRoorkee];

function ClientsSection() {
  return (
    <section className="clients-section py-5">
      <div className="container text-center">
        <h5 className="section-title"><span></span> OUR CLIENTS</h5>
        <div className="slider-wrapper mt-4">
          <div className="slider-track">
            {[...logos, ...logos].map((logo, idx) => (
              <div className="client-logo" key={idx}>
                <img src={logo} alt={`Client ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
