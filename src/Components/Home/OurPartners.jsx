import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Partner.css";

// Import your icons
import aquametro from '../../images/partner1.jpg';
import apator from '../../images/partner2.jpg';
import elgas from '../../images/partner3.jpg';
import micro from '../../images/partner4.jpg';
import ultraflex from '../../images/partner5.jpg';

export function OurPartners() {
  const logos = [
   aquametro, 
   apator,
   elgas ,
   micro ,
   ultraflex,

  ];

  return (
    <section className="clients-section">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> OUR PARTNER
        </h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="client-logo-card">
                <img src={src} alt={`client-${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
export default OurPartners;
