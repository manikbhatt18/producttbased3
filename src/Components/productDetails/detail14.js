import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p14a.png";
import img2 from "../../images/p14b.png";
import img3 from "../../images/p14c.png";
import img4 from "../../images/p14d.png";







import related1 from "../../images/p11a.jpg";
import related2 from "../../images/p12a.png";
import related3 from "../../images/p13.png";
import related4 from "../../images/p15a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3,img4];

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
    { img: related1, title: "Contoil / RPD Flow Meters", link: "/product-detail/detail11" },
    {
      img: related2,
      title: " Oval Gear Flow Meters (OGM) ",
      link: "/product-detail/detail12",
    },
    {
      img: related3,
      title: " Micro Stream Flow Sensor OFZ Series",
      link: "/product-detail/detail13",
    },
    {
      img: related4,
      title: " Thermal Mass Flow Sensors",
      link: "/product-detail/detail15",
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
            <p className="text-muted">Air Flow Meters</p>
            <h3 className="fw-semibold">TRX Ultrasonic Air Meters </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;</li>
              <li className="mb-2">&#9679;</li>
              <li className="mb-2">&#9679;</li>
              
            
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
  <li><strong>Ultrasonic Air Flow Meter (TRX/TRZ Series)</strong> — Accurate, efficient, maintenance-free solution</li>
  <li>High-precision, non-invasive ultrasonic sensing for compressed air and industrial gas applications</li>
  <li>Engineered for long-term stability with zero pressure drop</li>
  <li>Exceptional resistance to oil, moisture, and dust</li>
  <li>Optimized for demanding production environments</li>
</ul>

<h3>📈 Applications</h3>
<ul>
  <li>Compressed air energy audits</li>
  <li>Factory air leakage detection systems</li>
  <li>Industrial gas consumption monitoring</li>
  <li>HVAC and pneumatic system optimization</li>
  <li>Multi-factory air transfer analysis</li>
</ul>

<h3>🔑 Why Choose the TRX Ultrasonic Air Flow Meter?</h3>
<ul>
  <li>Reduces compressed air costs and supports predictive maintenance</li>
  <li>Monitors compressor efficiency in real time</li>
  <li>Offers unmatched performance, reliability, and cost-efficiency</li>
  <li>No system interruption or pressure loss during operation</li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>No Pressure Loss:</strong> Clear flow path and no moving parts ensure zero pressure drop and energy loss for optimal system efficiency</li>
  <li><strong>Long-Term Accuracy & Maintenance-Free:</strong> High-accuracy measurements with no recalibration, filter changes, or maintenance for up to 10 years</li>
  <li><strong>Exceptional Durability:</strong> Reliable operation in contaminated air lines, resistant to oil mist, moisture, and dust</li>
  <li><strong>Leak Detection & Low Flow Sensitivity:</strong> Wide turndown ratio (1:60) enables precise detection of air leaks and low flow for energy savings</li>
  <li><strong>Reverse Flow Measurement:</strong> Supports bi-directional flow for loop piping and multi-factory air distribution systems</li>
  <li><strong>Multiple Gas Compatibility:</strong> Works with air, nitrogen, and inert gases; supports RS485 Modbus, analog (4-20 mA), pulse, and alarm outputs</li>
  <li><strong>Energy Optimization:</strong> Calculates air/power ratio (kW/m³) in real time when paired with a watt-hour meter, providing insight into compressor efficiency</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Pipe Range: DN25 - DN80</li>
  <li>Accuracy: ± 1.3%RD (0.5MPa, ordinary temperature and, dry air or nitrogen)</li>
  <li>Fluid temperature: -10 ~ 60 °C</li>
  <li>Working: Pressure: 0 ~ Less than 1MPa (Gauge pressure)</li>
  <li>Built-In Temp. & Pressure compensation</li>
  <li>Power Supply: External 24VDC±10％</li>
  <li>Output: 4-20mA (±0.5%FS) / RS485</li>
  <li>Measurable Fluids: Compressed Air, Nitrogen</li>
  <li>Certifications: RoHS, CE, UKCA</li>
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
