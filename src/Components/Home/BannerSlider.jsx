import React, { useRef } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import slide1 from '../../images/bg1.jpg';
import slide2 from '../../images/bg2.jpg';
import slide3 from '../../images/img3.jpg';

function BannerSlider() {
  const carouselRef = useRef(null);

  const slides = [
    {
      img: slide1,
      heading: 'UTILITIES are most Valuable',
      subHeading: 'When they stay INVISIBLE',
      text: 'Un-regulated / Un-Monitored utility expenses are draining your Money.',
    },
    {
      img: slide2,
      heading: 'To Master It,',
      subHeading: 'First Measure It.',
      text: 'Step one, Take Charge. Step two, Measure with confidence.',
    },
    {
      img: slide3,
      heading: 'Tailored Technologies:',
      subHeading: 'Our Products Fit Your Application, Not Vice Versa.',
      text: 'Rejecting the notion of a one-size-fits-all approach.',
    },
  ];

  return (
    <div className="position-relative">
      <Carousel fade controls={false} indicators={false} interval={4000} ref={carouselRef}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              <img src={slide.img} className="d-block w-100" alt={`Slide ${idx}`} />
              <Carousel.Caption className="text-start mb-5">
                <h1 className="fw-bold text-warning">{slide.heading}</h1>
                <h2 className="fw-bold text-white">{slide.subHeading}</h2>
                <p className="fs-5">{slide.text}</p>
                <Button variant="outline-light" className="rounded-0 px-4 py-2">Our Products &gt;</Button>
              </Carousel.Caption>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Controls */}
      <Button
        variant="light"
        className="position-absolute bottom-0 end-0 m-3"
        onClick={() => carouselRef.current.prev()}
      >
        &lt;
      </Button>
      <Button
        variant="warning"
        className="position-absolute bottom-0 end-0 m-3 ms-5"
        onClick={() => carouselRef.current.next()}
      >
        &gt;
      </Button>
    </div>
  );
}

export default BannerSlider;
