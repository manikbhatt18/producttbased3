import React from "react";
import "./HeroSection.css";
import bgImage from "../../images/metere.jpg"; 
export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="yellow-overlay">
        <div className="hero-content">
        <h1 className="fade-slide">
          IOTAFLOW <span className="systems-badge">Systems</span>
        </h1>
        <h2 className="fade-slide delay1">
          FLOW METER | IOT/AMR | <span className="highlight">Calibration</span>
        </h2>
        <p className="fade-slide delay2">
          We measure success by the way we touch the lives of the people.
          Be it our Team, our customers, our vendors or our bankers.
        </p>
        <button className="explore-btn fade-slide delay3">
         <span> Explore the experience</span>
        </button>
      </div>
      </div>

     
    </section>
  );
}
