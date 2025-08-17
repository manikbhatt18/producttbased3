import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./lean-resources.css";
import ProductCard from './ProductCard';

import img2 from '../images/Lean Journey.gif';


import oilIcon from '../images/Emoticon 1.jpg';
import waterIcon from '../images/Emoticon 2.jpg';
import airIcon from '../images/Emoticon 3.jpg';
import gasIcon from '../images/Emoticon 4.jpg';
import steamIcon from '../images/Emoticon 5.jpg';
import chemicalIcon from '../images/Emoticon 6.jpg';
import waste7 from "../images/Emoticon 7.jpg";
import waste8 from "../images/Emoticon 8.jpg";


// Placeholder icons for the 8 wastes
import waste1 from "../images/Emoticon 1.jpg";
import waste2 from "../images/Emoticon 2.jpg";
import waste3 from "../images/Emoticon 3.jpg";
import waste4 from "../images/Emoticon 4.jpg";
import waste5 from "../images/Emoticon 5.jpg";
import waste6 from "../images/Emoticon 6.jpg";
// import waste7 from "../images/Emoticon 7.jpg";
// import waste8 from "../images/Emoticon 8.jpg";


function LeanResourcesPage() {
  const wastes = [
    { img: waste1, title: "Defects" },
    { img: waste2, title: "Waiting" },
    { img: waste3, title: "Transportation" },
    { img: waste4, title: "Motion" },
    { img: waste5, title: "Over Production" },
    { img: waste6, title: "Non-utilized Talent" },
    { img: waste7, title: "Inventory" },
    { img: waste8, title: "Extra Processing" },
  ];

  return (
    <div className="lean-page">
      {/* Hero Section */}
      <section className=" text-white py-5 hero-section"></section>

      {/* What is Lean Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">What is Lean?</h2>
          <p className="lead">
            At IOTAFLOW, Lean is our way of working and living.

            At IOTAFLOW, Lean is more than a process, it’s a journey we’ve lived together since October 2021, and a Godsend opportunity to make a real difference in people’s lives. We once worked like machines, focused only on output, but Lean has transformed us, putting the training, growth, and well-being of our people at the heart of everything we do. What began with learning the 8 Wastes, 2 Second Lean, Kanban Cards, the Supermarket Concept, and One-Piece Flow soon became a shared belief that Lean is for people, and people only. It’s about lifting stress from the shop floor, creating smoother flows of work, and finding joy in solving problems side by side. Lean hasn’t just improved quality and on-time delivery, it’s turned our workplace into a community where everyone feels valued, challenges are faced together, and every small improvement is a step toward a better day for us all.

          </p>
        </div>
      </section>

      {/* My Story Section */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 mt-4 mt-md-0">
              <h2>My Story</h2>
              <p>Almost a decade ago I went home from work really frustrated...</p>
              <p>Today our company is unrecognisable from where it was a decade ago...</p>
            </div>
          </div>
        </div>
      </section> */}
       <section className="bg-light text-white py-5 "> <div className="container journey"></div></section>
       <Container className="py-5">
      <h5 className="fw-bold mb-4 text-start">
        <span style={{ borderLeft: '3px solid #ffcc00', paddingLeft: '10px' }}>
         EMOTICON
        </span>
      </h5>
      <Row className="g-4">
  {[
    oilIcon,
    waterIcon,
    airIcon,
    gasIcon,
    steamIcon,
    chemicalIcon,
    waste7,
    waste8,
  ].map((icon, idx) => (
    <Col xs={6} md={3} key={idx} className="d-flex justify-content-center">
      <ProductCard icon={icon} />
    </Col>
  ))}
</Row>

      
    </Container>
       <section className="bg-light text-white py-5  "> <img src={img2} alt="Lean" srcset="" className="journey2" /></section>

      {/* 8 Wastes Icons Section */}
     
      <Container>
  <h3 className="section-heading">
    <span className="heading-bar" /> Our Prominent
  </h3>

  <Row className="g-4 mb-2 forBg">
    {[
      {
        title: "Rewarding Mistakes in IOTAflow Culture",
        caption: "Mistakes are rewarded in Iotaflow culture",
        link:"https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title:
          "GembaTalk S1 E6: How 'What's in it for me' revolutionized IOTAFLOW's culture",
        caption: "with Pankaj Malik",
        link:"https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "2023 2 Second Lean Summit",
        caption: "Seating matters - Ireland",
        link:"https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
    ].map((video, idx) => (
      <Col key={idx} xs={12} sm={6} lg={4}>
        <div className="video-card">
          <div className="ratio ratio-16x9 video-frame">
            <iframe
              src={video.link}
              title={`video-${idx}`}
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h5>{video.title}</h5>
            <p>{video.caption}</p>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>

      
    </div>
  );
}

export default LeanResourcesPage;
