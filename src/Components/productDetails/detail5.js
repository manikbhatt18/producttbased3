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
import related4 from "../../images/p6a.png";

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
    { img: related1, title: "Domestic Ultrasonic Flow Meters", link: "/products" },
    {
      img: related2,
      title: "INLINE ULTRASONIC ROBUST Series",
      link: "/product-detail/detail2",
    },
    {
      img: related3,
      title: " INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)",
      link: "/product-detail/detail3",
    },
    {
      img: related4,
      title: " Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes",
      link: "/product-detail/detail6",
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
            <h3 className="fw-semibold"> Clamp-ON (Portable) ULTRASONIC PF 222/333</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; Micronics™ PF333 Portable Ultrasonic Flow Meter</li>
              <li className="mb-2">&#9679;(Distributed in India by IOTAFLOW Systems Pvt. Ltd.)</li>
              <li className="mb-2">&#9679;Micronics PF333 portable ultrasonic flow meter with clamp-on sensors, ±0.5% accuracy, CE certified.  </li>
              <li className="mb-2">&#9679;Non-invasive, data-logging, and available in India via IOTAFLOW</li>
            
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
                <ul>
  <li>Compact, battery-powered clamp-on ultrasonic flow meter for real-time liquid monitoring in full pipes</li>
  <li>Non-invasive design enables instant diagnostics without cutting pipes or interrupting flow</li>
  <li>Suitable for chilled water, raw water, RO, chemicals, oils, and clean process liquids</li>
  <li>Delivers high-performance readings across utilities and industrial audits</li>
  <li>Represented in India by IOTAFLOW Systems Pvt. Ltd. – official channel partner offering sales, support, and SCADA/BMS integration</li>
</ul>

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
  <li>Micronics Make – UK engineered for trusted performance and build quality, distributed by IOTAFLOW in India</li>
  <li>Portable and lightweight for instant flow analysis on multiple pipelines</li>
  <li>Clamp-on technology enables non-invasive ultrasonic sensing—no cutting or contamination</li>
  <li>Supports pipe sizes from 13 mm to 5000 mm with a range of sensor options</li>
  <li>High accuracy: ±0.5% with excellent repeatability for diagnostics and audits</li>
  <li>Battery-operated with up to 20 hours of runtime on a single charge—ideal for field use</li>
  <li>Built-in data logger with SD card storage for up to 198,000 records, exportable via USB</li>
  <li>Large backlit LCD and intuitive menu-driven interface</li>
  <li>Multi-output support: RS232, Modbus, USB, 4–20mA, pulse, and relay options</li>
  <li>Complies with international standards:
    <ul>
      <li>CE Certified</li>
      <li>RoHS Compliant</li>
      <li>ISO 9001 Manufacturing Standards</li>
    </ul>
  </li>
</ul>
          )}

          {activeTab === "Technical data" && (
            <ul>
  <li>Principle: Transit Time, CE approved</li>
  <li>Pipe range: 13mm ID to 10,000mm OD</li>
  <li>Transducer operating temperature: -20°C to +135°C (optional high-temp: -20°C to +200°C)</li>
  <li>Display shows flow rate, total flow, signal, and battery level with non-invasive sensing</li>
  <li>Language options: English, French, German, Spanish</li>
  <li>Carrying case: IP67 rated</li>
  <li>Power: Battery or mains operation (Battery life: 14 hours, charging time: 2.5 hours)</li>
  <li>Accuracy: ±0.5% to ±3%, depending on flow and pipe size</li>
  <li>Turn down ratio: 100:1</li>
  <li>Data communications: USB, supports most USB 2.0 BOM drives</li>
  <li>Output: 3 x pulse output, 4–20 mA analog output</li>
  <li>Data logging: 100 million data points, 12 named sites; downloadable via USB to CSV for Excel export</li>
  <li>Temperature sensors: Clamp-on PT100 Class B 4-wire
    <ul>
      <li>Range: 0°C – 200°C (32°F – 392°F)</li>
      <li>Resolution: 0.1°C (0.18°F)</li>
      <li>Minimum delta T: 0.3°C (optional)</li>
    </ul>
  </li>
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
