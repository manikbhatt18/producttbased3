import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./lean-resources.css";
import ProductCard from "./ProductCard";

import img1 from "../images/Lean resource 2.jpg"; // Hero banner
import img2 from "../images/gifgif.gif";
import img3 from "../images/Lean resource 1.jpg";

// Emoticon icons
import oilIcon from "../images/Emoticon 1.png";
import waterIcon from "../images/Emoticon 2.png";
import airIcon from "../images/Emoticon 3.png";
import gasIcon from "../images/Emoticon 4.png";
import steamIcon from "../images/Emoticon 5.png";
import chemicalIcon from "../images/Emoticon 6.png";
import waste7 from "../images/Emoticon 7.png";
import waste8 from "../images/Emoticon 8.png";

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
              <br />
              <br />
              At IOTAFLOW, Lean is more than a process, it’s a journey we’ve
              lived together since October 2021,
              <br />
              and a Godsend opportunity to make a real difference in people’s
              lives. We once worked like machines,
              <br />
              focused only on output, but Lean has transformed us, putting the
              training, growth, and well-being of
              <br />
              our people at the heart of everything we do. What began with
              learning the 8 Wastes, 2 Second Lean,
              <br />
              Kanban Cards, the Supermarket Concept, and One-Piece Flow soon
              became a shared belief that Lean is
              <br />
              for people, and people only. It’s about lifting stress from the
              shop floor, creating smoother
              <br />
              flows of work, and finding joy in solving problems side by side.
              Lean hasn’t just improved quality
              <br />
              and on-time delivery, it’s turned our workplace into a community
              where everyone feels valued,
              <br />
              challenges are faced together, and every small improvement is a
              step toward a better day for us all.
            </p>
          </div>
        </section>

        {/* Empty section background */}
        <section>
          <img src={img3} alt="Lean Journey" className="journey" />
        </section>

        {/* Emoticon Section */}
        <Container className="py-5">
          <h3 className="fw-bold mb-4 text-center">
            <span style={{ paddingLeft: "10px" }}>8 Wastes In Lean Blocks</span>
          </h3>

          <Row className="g-3 justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-8">
            {[
              { icon: oilIcon, title: "Defect" },
              { icon: waterIcon, title: "Waiting Time" },
              { icon: airIcon, title: "Extra Motion" },
              { icon: gasIcon, title: "Extra Inventory" },
              { icon: steamIcon, title: "Extra Process" },
              { icon: chemicalIcon, title: "Extra Transportation" },
              { icon: waste7, title: "Non Utilized Talent" },
              { icon: waste8, title: "Overproduction" },
            ].map((item, idx) => (
              <Col key={idx} className="emoticon-col">
                <div className="emoticon-item">
                  <div className="emoticon-card">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="emoticon-img"
                    />
                  </div>
                  <span className="emoticon-title">{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Lean Journey GIF */}
        <section className="hero-wrapperr">
          <img src={img2} alt="Lean Banner" className="lean-journey" />
        </section>

        {/* Videos Section */}
        <Container className="mt-5">
          <h3 className="section-heading text-center mb-4">
            Our Lean Journey in Action
          </h3>

          <Row className="g-4 mb-2 forBg">
            {[
              {
                title:
                  "GembaTalk S1 E6: How 'What's in it for me' revolutionized IOTAFLOW's culture with Pankaj Malik",
                caption: "",
                link: "https://www.youtube.com/embed/KYnoL-nWr4w",
              },
              {
                title:
                  "IOTAFLOW is grateful to have the opportunity to be part of Paul Akers’ 2 Second Lean Tour series.",
                caption:
                  "What began with small, daily improvements has AME 2 Second Lean Tour",
                link: "https://www.youtube.com/embed/q8x-1hRcjhA",
              },
              {
                title:
                  "Mistakes are rewarded in Iotaflow culture | Lean culture | Corporate positivity | Employees welfare",
                caption: "",
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
