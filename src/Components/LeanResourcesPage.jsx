import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./lean-resources.css";
import ProductCard from './ProductCard';

import img1 from '../images/lb.png';        // Hero banner
import img2 from '../images/Lean Journey.gif';
import img3 from '../images/myJ.png';

// Emoticon icons
import oilIcon from '../images/Emoticon 1.jpg';
import waterIcon from '../images/Emoticon 2.jpg';
import airIcon from '../images/Emoticon 3.jpg';
import gasIcon from '../images/Emoticon 4.jpg';
import steamIcon from '../images/Emoticon 5.jpg';
import chemicalIcon from '../images/Emoticon 6.jpg';
import waste7 from "../images/Emoticon 7.jpg";
import waste8 from "../images/Emoticon 8.jpg";

function LeanResourcesPage() {
  return (
    <>
      {/* 🔹 Hero Banner */}
      <section className="hero-wrapper">
        <img src={img1} alt="Lean Banner" className="hero-image" />
      </section>

      <div className="lean-page">
        {/* What is Lean Section */}
        <section className="py-5 text-center">
          <div className="container">
            <h2 className="mb-4">What is Lean?</h2>
            <p className="lead">
              At IOTAFLOW, Lean is our way of working and living.
              <br /><br />
              At IOTAFLOW, Lean is more than a process, it’s a journey we’ve lived together since October 2021,<br />
               and a Godsend opportunity to make a real difference in people’s lives. We once worked like machines, <br />
               focused only on output, but Lean has transformed us, putting the training, growth, and well-being of<br />
                our people at the heart of everything we do. What began with learning the 8 Wastes, 2 Second Lean, <br />
                Kanban Cards, the Supermarket Concept, and One-Piece Flow soon became a shared belief that Lean is<br />
                 for people, and people only. It’s about lifting stress from the shop floor, creating smoother <br />
                 flows of work, and finding joy in solving problems side by side. Lean hasn’t just improved quality<br />
                  and on-time delivery, it’s turned our workplace into a community where everyone feels valued,<br /> 
                  challenges are faced together, and every small improvement is a step toward a better day for us 
                  all.
            </p>
          </div>
        </section>

        {/* Empty section background */}
        <section className="bg-light text-white py-5">
          <img src={img3} alt="Lean Journey" className="journey" />
        </section>

        {/* Emoticon Section */}
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

        {/* Lean Journey GIF */}
        <section className="bg-light text-white py-5">
          <img src={img2} alt="Lean Journey" className="journey2" />
        </section>

        {/* Videos Section */}
        <Container>
          <h3 className="section-heading">
            <span className="heading-bar" /> Our Prominent
          </h3>

          <Row className="g-4 mb-2 forBg">
            {[
              {
                title: "Rewarding Mistakes in IOTAflow Culture",
                caption: "Mistakes are rewarded in Iotaflow culture",
                link: "https://www.youtube.com/embed/q8x-1hRcjhA",
              },
              {
                title: "GembaTalk S1 E6: How 'What's in it for me' revolutionized IOTAFLOW's culture",
                caption: "with Pankaj Malik",
                link: "https://www.youtube.com/embed/KYnoL-nWr4w",
              },
              {
                title: "2023 2 Second Lean Summit",
                caption: "Seating matters - Ireland",
                link: "https://www.youtube.com/embed/JJZCCWxysTk",
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
    </>
  );
}

export default LeanResourcesPage;
