import React from 'react';
import './ClientsSection.css';

import cl2 from "../../images/Client logo icon_2.png";
import cl3 from "../../images/Client logo icon_3.png";
import cl4 from "../../images/Client logo icon_4.png";
import cl6 from "../../images/Client logo icon_6.png";
import cl7 from "../../images/Client logo icon_7.png";
import cl8 from "../../images/Client logo icon_8.png";
import cl9 from "../../images/Client logo icon_9.png";
import cl12 from "../../images/Client logo icon_12.png";
import cl13 from "../../images/Client logo icon_13.png";
import cl14 from "../../images/Client logo icon_14.png";
import cl15 from "../../images/Client logo icon_15.png";
import cl16 from "../../images/Client logo icon_16.png";
import cl17 from "../../images/Client logo icon_17.png";
import cl18 from "../../images/Client logo icon_18.png";
import cl19 from "../../images/Client logo icon_19.png";
import cl20 from "../../images/Client logo icon_20.png";
import cl21 from "../../images/Client logo icon_21.png";
import cl22 from "../../images/Client logo icon_22.png";
import cl23 from "../../images/Client logo icon_23.png";

const logos = [cl2,cl3,cl4,cl6,cl7,cl8,cl9,cl12,cl13,cl14,cl15,cl16,cl17,cl18,cl19,cl20,cl21,cl22,cl23
];

function ClientsSection() {
  return (
    <section className="clients-section py-5">
      <h5 className="section-title"><span></span> OUR CLIENTS</h5>
      <div className="container text-center">
        
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
