import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import slide1 from "../../images/banner 25.jpg";
import slide2 from "../../images/bg2.jpg";
import slide3 from "../../images/Flow web banner  (1600 x 833 px).jpg";
import "./BannerSlider.css";


function BannerSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: slide2,
      heading: "UTILITIES are most Valuable,",
      subHeading: "When they stay INVISIBLE.",
      text: "Un-regulated / Un-Monitored utility expenses are draining your Money.",
    },
    {
      img: slide1,
      heading: "Protecting Your Reputation,",
      subHeading: "Always.",
      text: "With IOTAFLOW, you gain a lean, reliable partner ensuring accuracy, efficiency, and peace of mind in flow measurement — year after year.",
    },
    {
      img: slide3,
      heading: "Your Process is Unique,",
      subHeading: "So Are Our Solutions.",
      text: "We don’t believe in one-size-fits-all. At IOTAFLOW, every customer gets custom flow measurement solutions designed to fit their unique needs — without compromise.",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="position-relative">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={4000}
        pause={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            >
              <img
                src={slide.img}
                className="d-block w-100 shadow-lg banner-img"
                alt={`Slide ${idx}`}
              />
              <Carousel.Caption className="text-start mb-5">
                <div className="caption-bg">
                  <h1 className="fw-bold text-warning">{slide.heading}</h1>
                  <h2 className="fw-bold text-white">{slide.subHeading}</h2>
                  <p className="fs-5">{slide.text}</p>
                  <Button variant="warning" className="btnClass">
                    <span>Our Products</span>
                  </Button>
                </div>
              </Carousel.Caption>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Controls */}
     <div
  className="carousel-controls d-flex d-none d-md-flex"
  style={{
    position: "absolute",
    bottom: "20px",
    right: "20px",
    zIndex: 10,
    gap: "8px",
  }}
>
  <Button variant="light" onClick={handlePrev}>
    &lt;
  </Button>
  <Button variant="warning" onClick={handleNext}>
    &gt;
  </Button>
</div>
 
    </div>
  );
}

export default BannerSlider;
