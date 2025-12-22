import React from 'react';
import './ClientsSection.css';

import adani from '../../images/adani.png';
import Cairn from '../../images/Cairn.png';
import client2 from '../../images/client2.jpg';
import client3 from '../../images/client3.png';
import client4 from '../../images/client4 (1).jpg';
import client41 from '../../images/client4-180x96.png';
import client51 from '../../images/client5-180x96.png';
import client5 from '../../images/client5.jpg';
import client61 from '../../images/client6-180x96.png';
import client6 from '../../images/client6.jpg';
import client7 from '../../images/client7-180x96.png';
import client81 from '../../images/client8-180x96.png';
import client8 from '../../images/client8.jpg';
import client9 from '../../images/client9-180x96.png';
import client10 from '../../images/client10-180x96.png';
import client11 from '../../images/client11-180x96.png';
import client12 from '../../images/client12-180x96.png';
import drreddy from '../../images/Dr.-Reddys.png';
import essar from '../../images/essar-steel.png';
import Gaar from '../../images/Gaar.png';
import hindustan from '../../images/hindustan.png';
import itc from '../../images/itc-hotels.png';
import jindal from '../../images/jindal.png';
import Mahindra from '../../images/Mahindra-rise.png';
import mother from '../../images/mother-dairy.png';
import NTPC from '../../images/NTPC.png';
import ocm from '../../images/ocm-lxury.png';
import oilltd from '../../images/oilltd.png';
import roorkee from '../../images/roorkee.png';
import Schneider from '../../images/Schneider.png';
import smec from '../../images/smec.png';
import sterling from '../../images/sterling-wilson.png';
import Taj from '../../images/Taj.png';
import ultratech from '../../images/ultratech-cement.png';
import voltas from '../../images/voltas.png';
import lt from '../../images/lt_logo.png';


const logos = [adani, Cairn, client2, client3, client4, client41,client51,client5,client61,client6,client7,client81,client8,client9,client10,client11,client12,drreddy,essar,Gaar,itc,hindustan,jindal,Mahindra,mother,NTPC,ocm,oilltd,roorkee,Schneider,smec,sterling,Taj,ultratech,voltas,lt];

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
