import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/sja.png";
import img2 from "../../images/sjb.png";
import img3 from "../../images/sjc.png";
import img4 from "../../images/sjd.png";
import img5 from "../../images/sje.png";
import img6 from "../../images/sjf.png";




import related1 from "../../images/p6a.png";
import related2 from "../../images/p7a.jpg";
import related3 from "../../images/p8a.png";
import related4 from "../../images/p10a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3,img4,img5,img6];

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
    { img: related1, title: "Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes", link: "/product-detail/detail6" },
    {
      img: related2,
      title: " MF-PRO Electromagnetic Flow Meter",
      link: "/product-detail/detail7",
    },
    {
      img: related3,
      title: "  CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters",
      link: "/product-detail/detail8",
    },
    {
      img: related4,
      title: "Woltmann Water Meters, Aqua-Re Series",
      link: "/product-detail/detail10",
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
            <h3 className="fw-semibold">Smart Single Jet Water Meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Apator Powogaz Smart D+ Single-Jet Water Meter | AMR-Ready</li>
              <li className="mb-2">&#9679;High-accuracy single-jet water meter DN15/DN20 for residential, commercial & municipal projects in India.</li>
              <li className="mb-2">&#9679;AMR-ready, durable brass body, low start flow.</li>
             
            
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
                <section>
  <p>
    The <strong>Apator Powogaz Smart D+</strong> Single-Jet Water Meter delivers precise metering for cold and hot water in residential, commercial, and industrial applications. Built with advanced <strong>vane-wheel technology</strong>, a <strong>hermetically sealed counter</strong>, and robust <strong>tamper protection</strong>, it ensures long-term reliability in challenging environments.
  </p>
  <p>
    With <strong>MID compliance</strong>, <strong>R200 measurement range</strong>, and compatibility with wired or wireless <strong>AMR communication modules</strong>, the Smart D+ is ideal for modern water management. Designed for <strong>horizontal and vertical installations</strong> without straight pipe run requirements (<strong>U0D0</strong>), it offers <strong>low starting flow</strong>, <strong>high accuracy</strong>, and <strong>resistance to external magnetic fields</strong>.
  </p>
</section>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
           <ul>
  <li><strong>High-accuracy metering:</strong> R200 horizontal / R80 vertical measurement range</li>
  <li><strong>MID-compliant and EN-ISO 4064 certified:</strong> For potable water applications</li>
  <li><strong>Hermetically sealed counter:</strong> Fog-resistant, clear dual-colour numeric display</li>
  <li><strong>Tamper protection:</strong> Snap ring cover, deformation pin for unauthorized interference detection</li>
  <li><strong>Low starting flow:</strong> Accurate measurement of small consumption volumes</li>
  <li><strong>No straight pipe runs required:</strong> U0D0 installation flexibility</li>
  <li><strong>Dual reading technologies:</strong> Optical and inductive for AMR integration</li>
  <li><strong>Communication compatibility:</strong> Wireless M-Bus, M-Bus, pulse output for remote data collection</li>
  <li><strong>Durable construction:</strong> Brass body and high-quality internal components for extended service life</li>
  <li><strong>Electronic diagnostics:</strong> Operational monitoring and fault detection</li>
  <li><strong>Target Applications:</strong>
    <ul>
      <li>Residential – single-family and multi-family housing water supply</li>
      <li>Commercial – hotels, office complexes, retail facilities</li>
      <li>Industrial – factories, processing plants requiring accurate water tracking</li>
      <li>Municipal – cold and hot water distribution systems</li>
      <li>Smart metering projects – integrated with AMR/AMI systems for automated billing</li>
    </ul>
  </li>
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
      <td>Nominal Diameter (DN)</td>
      <td>15 mm / 20 mm</td>
    </tr>
    <tr>
      <td>Measurement Range</td>
      <td>R200 (H), R80 (V)</td>
    </tr>
    <tr>
      <td>Permanent Flow Rate (Q3)</td>
      <td>1.6 / 2.5 / 4 m³/h</td>
    </tr>
    <tr>
      <td>Maximum Flow Rate (Q4)</td>
      <td>2 / 3.125 / 5 m³/h</td>
    </tr>
    <tr>
      <td>Minimum Flow Rate (Q1)</td>
      <td>0.01 – 0.025 m³/h</td>
    </tr>
    <tr>
      <td>Starting Flow</td>
      <td>5 – 12 dm³/h</td>
    </tr>
    <tr>
      <td>Temperature Class</td>
      <td>Cold water up to 50°C, hot water up to 90°C</td>
    </tr>
    <tr>
      <td>Pressure Rating</td>
      <td>PN16 (16 bar)</td>
    </tr>
    <tr>
      <td>Installation Positions</td>
      <td>Horizontal (H), Vertical (V)</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>±2% (0.1–30°C), ±3% (&gt;30°C)</td>
    </tr>
    <tr>
      <td>Ingress Protection</td>
      <td>IP65</td>
    </tr>
    <tr>
      <td>Communication Options</td>
      <td>Optical, inductive, M-Bus, wireless M-Bus, pulse output</td>
    </tr>
    <tr>
      <td>Body Material</td>
      <td>Brass</td>
    </tr>
    <tr>
      <td>Standards Compliance</td>
      <td>EN-ISO 4064, OIML R49, MID Directive 2014/32/EU</td>
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
