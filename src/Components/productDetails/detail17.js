import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p17a.png";
import img2 from "../../images/p17b.png";
import img3 from "../../images/p17c.png";
import "../ProductDetailCustom.css";








import related1 from "../../images/p16a.jpg";
import related2 from "../../images/p19a.png";
import related3 from "../../images/p20a.png";
import related4 from "../../images/p21a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3];

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
    { img: related1, title: "IVF Insertion Vortex flow meter", link: "/product-detail/detail18" },
    {
      img: related2,
      title: " EQZ/EQZK Radial Turbine Gas Meters  ",
      link: "/product-detail/detail19",
    },
    {
      img: related3,
      title: "Ultra-NXT Ultrasonic Gas Flow Meter",
      link: "/product-detail/detail20",
    },
    {
      img: related4,
      title: " GasPro RPD Gas Meter",
      link: "/product-detail/detail21",
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
        <div className="col-lg-6 product-detail-right">
            <p className="text-muted">Ultrasonic Flow Meter</p>
            <h3 className="fw-semibold">Ultrasonic BTU meter (Heat & Energy measurement)  </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;AAccurate heat & energy metering with zero pressure drop.</li>
              <li className="mb-2">&#9679;Smart, maintenance-free BTU measurement for every system.</li>
              <li className="mb-2">&#9679;Seamless billing-grade metering for heating & cooling networks.</li>
              
            
            </ul>
            <button className="my-2 btn-enquiry">
              <span>Enquiry Now</span>
            </button>
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
      </div>

 

      {/* Tab content */}
      <div className="container">
        <div ref={tabContentRef} className="p-4 border shadow-sm bg-white fade-in">
          {activeTab === "Description" && (
            <div className="row">
              <div className="col-md-6">
<p>
The Micronics PF 222/333 Portable Ultrasonic Flow Meter is a compact, battery-powered clamp-on flow measurement solution designed for non-invasive, real-time monitoring of liquid flow in full pipes. Represented in India by IOTAFLOW Systems Pvt. Ltd., this portable ultrasonic meter is ideal for engineers and technicians seeking instant, high-accuracy diagnostics without cutting pipes or interrupting flow. Whether you're dealing with chilled water, raw water, RO, chemicals, oils, or clean process liquids, the Micronics PF333 delivers high-performance flow readings in demanding environments — from utilities to industrial audits.
</p>

<p><b>Authorized Channel Partner</b></p>
<p>
Authorized Channel Partner in India – IOTAFLOW Systems Pvt. Ltd. As an official Micronics channel partner in India, IOTAFLOW offers full sales, support, and technical guidance for PF 222/333 deployment in Indian industries and utilities. Contact us for demos, bulk orders, or integration with existing SCADA/BMS systems.
</p>

<p><b>Target Applications</b></p>
<ul>
  <li>Water flow auditing in industrial plants and utility pipelines</li>
  <li>HVAC commissioning and chilled water flow balancing</li>
  <li>Pump verification and energy efficiency monitoring</li>
  <li>RO and DM water flow measurement in chemical and pharmaceutical units</li>
  <li>Process water and condensate tracking in boiler and thermal systems</li>
  <li>Non-invasive flow metering for temporary setups and maintenance inspections</li>
  <li>Portable diagnostics in building services, energy audits, and facility management</li>
</ul>


              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li>Micronics Make – UK Engineered: Trusted performance and build quality, now available through IOTAFLOW in India.</li>
  <li>Portable & Lightweight: Carry it anywhere for instant flow analysis on multiple pipelines.</li>
  <li>Clamp-On Technology: No cutting, no shutdowns, no contamination – non-invasive ultrasonic sensing.</li>
  <li>Wide Pipe Compatibility: Supports pipe sizes from 13 mm to 5000 mm with multiple sensor options.</li>
  <li>High Accuracy: Delivers ±0.5% accuracy with repeatability for precise auditing and diagnostics.</li>
  <li>Battery Operation: Up to 20 hours of operation on a single charge, suitable for extended field use.</li>
  <li>Data Logging: Built-in data logger with SD card for up to 198,000 records. Export via USB.</li>
  <li>Intuitive Interface: Large backlit LCD and user-friendly menu-driven setup.</li>
  <li>Multi-Output Support: RS232, Modbus, USB, 4–20mA, pulse, and relay outputs available.</li>
  <li><b>Certified for International Standards:</b></li>
  <li>CE Certified</li>
  <li>RoHS Compliant</li>
  <li>ISO 9001 Manufacturing Standards</li>
</ul>
          )}

          {activeTab === "Technical data" && (
<ul>
  <li><b>Principle</b>: Transit Time, CE approved</li>
  <li><b>Pipe Range</b>: 13 mm ID to 10,000 mm OD</li>
  <li><b>Transducer Operating Temp</b>: -20°C to +135°C (Optional Hi-Temp -20°C to +200°C)</li>
  <li><b>Display shows</b>: flow rate, total flow, signal and battery level; non-invasive sensing</li>
  <li><b>Language options</b>: English, French, German, Spanish</li>
  <li><b>Carrying case</b>: IP67 Rated</li>
  <li><b>Battery / Mains operation</b>: Battery Life 14 Hours, 2.5 Hours charging time</li>
  <li><b>Accuracy</b>: ±0.5% to ±3% (dependent on flow and pipe size)</li>
  <li><b>Turn Down Ratio</b>: 100:1</li>
  <li><b>Data Communications</b>: USB (supports most USB 2.0 drives)</li>
  <li><b>Outputs</b>: 3 × Pulse Output, 4–20 mA Output</li>
  <li><b>Data Logging</b>: Up to 198,000 records; export via USB to CSV/Excel</li>
  <li><b>Temperature Sensors</b>: Clamp-on PT100 Class B 4-wire; range 0°C – 200°C; resolution 0.1°C; minimum ΔT 0.3°C (optional)</li>
</ul>
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
          background-color:#ffcc00;
          border: none;
          padding: 8px 20px;
          cursor: pointer;
          color:black;
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
