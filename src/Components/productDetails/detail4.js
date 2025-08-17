import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p4a.jpg";
import img2 from "../../images/p4b.png";
import img3 from "../../images/p4c.png";
import img4 from "../../images/p4d.png";
import img5 from "../../images/p4e.png";


import related1 from "../../images/p1a.png";
import related2 from "../../images/p2a.png";
import related3 from "../../images/p3a.jpg";
import related4 from "../../images/p5a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3,img4,img5];

  const ROTATE_MS = 2000; // change to 1500–3000 if you like

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");

  const tabContentRef = useRef(null);
  const imgWrapperRef = useRef(null);

  // Tab fade-in animation
  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.classList.remove("fade-in");
      void tabContentRef.current.offsetWidth;
      tabContentRef.current.classList.add("fade-in");
    }
  }, [activeTab]);

  // Image crossfade trigger
  useEffect(() => {
    if (imgWrapperRef.current) {
      imgWrapperRef.current.classList.remove("img-fade-in");
      void imgWrapperRef.current.offsetWidth;
      imgWrapperRef.current.classList.add("img-fade-in");
    }
  }, [mainImage]);

  // Auto-rotate images
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        setMainImage(images[next]);
        return next;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [isPaused, images, ROTATE_MS]);

  const handleThumbClick = (img, idx) => {
    setMainImage(img);
    setCurrentIndex(idx);
  };

  const relatedProducts = [
    { img: related1, title: "Ultrimis™ Domestic Ultrasonic Flow Meters", link: "/products" },
    {
      img: related2,
      title: "INLINE ULTRASONIC ROBUST Series",
      link: "/product-detail/detail2",
    },
    {
      img: related3,
      title: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels) ",
      link: "/product-detail/detail3",
    },
    {
      img: related4,
      title: "Clamp-ON (Portable) ULTRASONIC PF 222/333",
      link: "/product-detail/detail5",
    },
  ];

  return (
    <div className="text-dark">
      <div className="container py-5">
        <div className="row">
          {/* LEFT: images */}
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <div
              className="border mb-3 p-2 rounded shadow-sm position-relative overflow-hidden main-image-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div ref={imgWrapperRef} className="img-canvas img-fade-in">
                <img src={mainImage} alt="Main Meter" className="main-image" />
              </div>
            </div>

            <div className="d-flex gap-3 mt-3">
              {images.map((img, i) => (
                <div key={i} className="d-flex flex-column align-items-center">
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => handleThumbClick(img, i)}
                    className="img-thumbnail"
                    style={{
                      width: "60px",
                      height: "60px",
                      cursor: "pointer",
                      objectFit: "cover",
                      border: mainImage === img ? "2px solid #000" : "1px solid #ddd",
                      borderRadius: "0px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "60%",
                      backgroundColor: mainImage === img ? "#ffcc00" : "transparent",
                      marginTop: "3px",
                      borderRadius: "2px",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: copy */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Water Meters</p>
            <h3 className="fw-semibold"> Clamp-ON (Fixed) ULTRASONIC UF 1500 Series</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; UF-1500 Series Ultrasonic Flow Meter Clamp-On</li>
              <li className="mb-2">&#9679; Clamp‑on Ultrasonic Flow Meter available in 1‑Track, 2‑Track & 4‑Track models for non‑intrusive, precise liquid flow measurement.</li>
              <li className="mb-2">
                &#9679; Easy install, no pipe cutting
              </li>
            </ul>
            <button className="my-2 btn-enquiry">
              <span>Enquiry Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky tabs */}
      <div className="container sticky-top bg-white shadow-sm" style={{ top: "0px", zIndex: 1020 }}>
        <ul className="nav nav-tabs border-0 justify-content-center">
          {["Description", "Features", "Technical data", "Downloads"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab content */}
      <div className="container">
        <div ref={tabContentRef} className="p-4 border shadow-sm bg-white fade-in">
          {activeTab === "Description" && (
            <div className="row">
              <div className="col-md-6">
                <section id="uf-1500-overview">
  <h2>Unlock Precision with Non-Intrusive Flow Monitoring</h2>
  <p>The <strong>UF-1500 Clamp-On Ultrasonic Flow Meter</strong> is a high-performance, non-invasive solution engineered for accurate and reliable liquid flow measurement in industrial environments. Utilizing advanced transit-time ultrasonic technology, this fixed installation meter delivers precise bidirectional flow data without disrupting existing pipelines—no pipe cutting, pressure drop, or contamination risk.</p>
  <p>Designed for process fluids including hot and cold water, wastewater, acids, alkalis, and liquid foods, the UF-1500 excels in chemical processing, municipal utilities, power generation, and food & beverage industries.</p>
</section>

<section id="track-configurations">
  <h3>Available in Multiple Track Configurations</h3>
  <ul>
    <li><strong>1-Channel (Single Track):</strong> Compact or general-purpose flow monitoring</li>
    <li><strong>2-Channel (Dual Track):</strong> Enhanced signal strength and measurement stability</li>
    <li><strong>4-Channel (Four Track):</strong> High-precision, high-volume, or large-diameter pipeline applications</li>
  </ul>
  <p>Each configuration is optimized for non-intrusive installation, offering flexibility for OEM integration, multi-line systems, or redundant measurement setups.</p>
</section>

<section id="why-choose-uf1500">
  <h3>Why Choose the UF-1500 Clamp-On Ultrasonic Flow Meter?</h3>
  <p>Boost your system’s efficiency with a maintenance-free, accurate, and cost-effective flow measurement device. This plug-and-play system is the preferred choice for engineers seeking precision, flexibility, and minimal installation overhead.</p>
</section>

<section id="applications">
  <h3>Applications Across Industries</h3>
  <ul>
    <li>Water and Wastewater Treatment Plants</li>
    <li>Chemical, Petrochemical, and Pharmaceutical Industries</li>
    <li>Food and Beverage Processing (CIP/SIP compliant)</li>
    <li>HVAC and District Energy Systems</li>
    <li>Power Generation and Thermal Utilities</li>
    <li>Oil & Gas Pipelines and Hazardous Zones</li>
    <li>OEM Machine Integration and Automation Systems</li>
  </ul>
</section>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <ul>
  <li><strong>Non-Invasive Measurement:</strong> Clamp-on transducers eliminate the need for pipe penetration—ideal for sanitary and corrosive environments.</li>
  <li><strong>Flexible Track Configurations:</strong> Available in Single Track (1-Channel), Dual Track (2-Channel), and Four Track (4-Channel) configurations for enhanced measurement accuracy and application flexibility across different pipe conditions and diameters. Ideal for industrial, utility, and OEM flow monitoring systems.</li>
  <li><strong>Wide Diameter Compatibility:</strong> Models support pipe sizes from DN15 to DN6000, accommodating small to very large industrial pipelines.</li>
  <li><strong>Bidirectional Flow Capability:</strong> Measures flow in both forward and reverse directions with high accuracy up to ±1%.</li>
  <li><strong>Advanced Output Options:</strong> Includes 4–20 mA analog output, pulse output, HART protocol support, and RS-232/RS-485 digital interfaces for seamless integration into SCADA and automation systems.</li>
  <li><strong>Robust Design:</strong> IP65-rated stainless steel enclosure resists water and dust; ideal for harsh field conditions.</li>
  <li><strong>High Sensitivity:</strong> Measures flow at velocities as low as 0.01 m/s, scalable up to 20 m/s.</li>
  <li><strong>Data Logging & Configuration:</strong> Internal memory for measurement history, batching control, alarm monitoring, and parameter protection.</li>
</ul>
          )}

          {activeTab === "Technical data" && (
            <table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominal Diameter of the Pipeline</td>
      <td>DN 15–6000</td>
    </tr>
    <tr>
      <td>Measurement Principle</td>
      <td>Transit Time</td>
    </tr>
    <tr>
      <td>Measuring Channels</td>
      <td>1 to 4 (Single Track | Dual Track | Four Track)</td>
    </tr>
    <tr>
      <td>Clamp-on PEA Accuracy (%)</td>
      <td>
        <ul>
          <li>Single-beam sounding: ±2%</li>
          <li>Two-beam sounding: ±1%</li>
          <li>Four-beam sounding: ±0.5%</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Flow Velocity Range</td>
      <td>0.1 – 20 m/s</td>
    </tr>
    <tr>
      <td>Fluid Temperature Range</td>
      <td>-30°C to +160°C</td>
    </tr>
    <tr>
      <td>Ambient Temperature for Transmitter</td>
      <td>0°C to +50°C (Maximum)</td>
    </tr>
    <tr>
      <td>Pipeline Pressure</td>
      <td>2.5 MPa / 25 bar</td>
    </tr>
    <tr>
      <td>Transmitter/Transducers Protection</td>
      <td>IP54 / IP68</td>
    </tr>
    <tr>
      <td>Measurement Data Logging</td>
      <td>
        <ul>
          <li>Hourly log: 1440 records</li>
          <li>Daily log: 60 records</li>
          <li>Monthly log: Programmable up to 14,400 records</li>
          <li>Batching: 512 records</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>Power Consumption</td>
      <td>&lt;12W</td>
    </tr>
    <tr>
      <td>Transmitter Weight</td>
      <td>&lt;3 kg</td>
    </tr>
    <tr>
      <td>Transmitter Dimensions</td>
      <td>250 × 132 × 90 mm</td>
    </tr>
  </tbody>
</table>
          )}

          {activeTab === "Downloads" && (
            <p>
              Visit our documentation page to download the full technical
              specifications and data sheets.
            </p>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div style={{ backgroundColor: "#f6f8fc" }} className="py-5">
        <div className="container">
          <h5 className="fw-semibold text-center mb-4">YOU MAY ALSO BE INTERESTED IN</h5>
          <div className="row justify-content-center">
            {relatedProducts.map((product, idx) => (
              <div className="col-6 col-md-3 mb-4 text-center" key={idx}>
                <Link to={product.link} className="text-decoration-none text-dark">
                  <div
                    className="p-3 shadow-sm d-flex align-items-center justify-content-center mx-auto hover-scale"
                    style={{
                      backgroundColor: "#fff",
                      width: "180px",
                      height: "180px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      transition: "transform 0.3s",
                    }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <p className="fw-semibold mt-2" style={{ fontSize: "14px" }}>
                    {product.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.2s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ----- FIXED preview box + crossfade ----- */
        .main-image-wrapper {
          width: 100%;
          max-width: 400px;
          height: 400px; /* fixed height so it doesn't jump */
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }
        .main-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }
        .img-canvas {
          width: 100%;
          height: 100%;
        }
        .img-fade-in {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .img-fade-in {
          opacity: 1;
        }

        /* Tabs */
        .nav-tabs .nav-link {
          color: black;
          border: none;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          background-color: white;
        }

        .nav-tabs .nav-link:hover {
          background-color: #ffcc00;
          color: black;
        }

        .nav-tabs .nav-link.active-tab {
          border-bottom: 3px solid #ffcc00;
          color: black;
          background-color: white;
        }

        /* Hover Scale for Cards/Images */
        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Enquiry Button Style */
        .btn-enquiry {
          position: relative;
          overflow: hidden;
          background-color: yellow;
          border: none;
          padding: 8px 20px;
          cursor: pointer;
        }

        .btn-enquiry::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          transform: translateX(-100%);
          z-index: 1;
        }

        .btn-enquiry:hover::before {
          animation: slideInLeft 0.4s ease forwards;
        }

        .btn-enquiry:not(:hover)::before {
          animation: slideOutRight 0.4s ease forwards;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .btn-enquiry span {
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }

        .btn-enquiry:hover span {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
