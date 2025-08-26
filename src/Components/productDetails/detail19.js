import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p19a.png";
import img2 from "../../images/p19b.png";
import img3 from "../../images/p19c.png";
import img4 from "../../images/p19d.png";
import img5 from "../../images/p19e.png";








import related1 from "../../images/p16a.jpg";
import related2 from "../../images/p16a.jpg";
import related3 from "../../images/p20a.png";
import related4 from "../../images/p21a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3,img4,img5];

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
    { img: related1, title: "VFM Vortex Flow Meters", link: "/product-detail/detail16" },
    {
      img: related2,
      title: " IVF Insertion Vortex flow meter   ",
      link: "/product-detail/detail18",
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
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Natural Gas Flow Meters</p>
            <h3 className="fw-semibold">EQZ/EQZK Radial Turbine Gas Meters </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;High-precision gas metering for industrial, commercial, and CGD networks</li>
              <li className="mb-2">&#9679;Designed for Indian conditions with minimal pressure loss and long-term reliability</li>
              <li className="mb-2">&#9679;Seamlessly integrates with smart metering, telemetry, and EPC infrastructure projects</li>
              
            
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
<ul>
  <li><strong>Product Name:</strong> EQZ Radial Turbine Gas Meters by Elgas</li>
  <li><strong>Measurement Principle:</strong> High-precision volumetric flow measurement for natural gas and clean, non-corrosive gases</li>
  <li><strong>Deployment:</strong> Widely adopted across India in industrial and commercial gas distribution networks</li>
  <li><strong>Environmental Suitability:</strong> Designed for high-temperature environments and challenging climatic conditions</li>
  <li><strong>Performance:</strong> Ensures long-term reliability, minimal pressure loss, and easy integration with telemetry and smart metering systems</li>
  <li><strong>Applications in India:</strong></li>
  <ul>
    <li><strong>Industrial Gas Flow Monitoring:</strong> High-accuracy measurement in steel plants, refineries, and chemical industries; ideal for process control and energy optimization</li>
    <li><strong>City Gas Distribution (CGD) Networks:</strong> Applied in urban gas distribution under PNGRB-approved projects; ensures reliable billing and pipeline integrity</li>
    <li><strong>Power Plants & Captive Power Units:</strong> Used in gas-based thermal and combined cycle plants; supports fuel efficiency tracking and regulatory compliance</li>
    <li><strong>Commercial & Utility Metering:</strong> Installed in malls, hospitals, SEZs for accurate billing; supports LPG, PNG, and CNG distribution in shared infrastructure</li>
    <li><strong>Oil & Gas Pipelines (Upstream/Midstream):</strong> Used in custody transfer and flow measurement across pipeline networks; suitable for ONGC, GAIL, IndianOil, and EPC projects</li>
    <li><strong>EPC and Infrastructure Projects:</strong> Included in metering packages for large EPC firms like L&amp;T and Tata Projects; used in government and private sector builds</li>
    <li><strong>Research, Labs & Calibration Centers:</strong> Used in metrology labs and test benches for calibrating flow systems and developing gas control technologies</li>
    <li><strong>Rural & Remote Industrial Clusters:</strong> Installed in decentralized energy systems and agro-industries; engineered for low-maintenance operation in off-grid regions</li>
  </ul>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>Wide Flow Range for Industrial Use:</strong> Handles high gas volumes up to 10,000 m³/h; ideal for large industrial gas metering in India</li>
  <li><strong>Available in Multiple Pipe Sizes (DN 50 to DN 200):</strong> Fits standard Indian gas pipeline sizes used in CGD and industrial setups; flanged connections simplify integration</li>
  <li><strong>High Accuracy with Legal Metrology Compliance:</strong> Offers &plusmn;1% or &plusmn;1.5% accuracy; billing-grade precision certified under India's Legal Metrology Act</li>
  <li><strong>Robust Design for Harsh Indian Conditions:</strong> Built for dusty, high-temperature environments; aluminum or steel body resists corrosion, vibration, and mechanical stress</li>
  <li><strong>Pulse Output Compatibility for Smart Gas Monitoring:</strong> LF and HF pulse outputs support SCADA and AMR systems; aligns with India's smart metering goals under CGD projects</li>
  <li><strong>Digital Metering Ready with IoT Integration:</strong> Compatible with telemetry, GPRS/4G, and cloud platforms for real-time tracking; ideal for smart city, SEZ, and ULB infrastructure</li>
  <li><strong>Minimal Pressure Loss for Efficient Gas Flow:</strong> Turbine design reduces pressure drop, enhancing energy efficiency and lowering operational costs</li>
  <li><strong>Low Maintenance & Long Service Life:</strong> Engineered for extended operation with minimal servicing; suitable for remote and rural Indian EPC deployments</li>
  <li><strong>MID & EN 12261 Certified:</strong> Internationally certified for Indian PSU, CGD, and multinational tenders; backed by ISO 9001:2015 manufacturing quality</li>
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
      <td>Sizes</td>
      <td>G 16 up to G 400</td>
    </tr>
    <tr>
      <td>Dimensions</td>
      <td>DN 40, 50, 80 and 100</td>
    </tr>
    <tr>
      <td>Operating Pressure</td>
      <td>Max. 6 bar</td>
    </tr>
    <tr>
      <td>Accuracy (0.2 Qmax to Qmax)</td>
      <td>&plusmn;1.5%</td>
    </tr>
    <tr>
      <td>Accuracy (below 0.2 Qmax)</td>
      <td>&plusmn;2%</td>
    </tr>
    <tr>
      <td>Gas Temperature Range</td>
      <td>-10&deg;C up to +60&deg;C</td>
    </tr>
    <tr>
      <td>Ambient Temperature Range</td>
      <td>-10&deg;C up to +60&deg;C</td>
    </tr>
    <tr>
      <td>Type Examination Certificate</td>
      <td>FTZÚ 15 ATEX 0172X</td>
    </tr>
    <tr>
      <td>Marking of Equipment</td>
      <td>Ex II -/2G IIB T4</td>
    </tr>
    <tr>
      <td>Straight Run Requirement</td>
      <td>No straight run required</td>
    </tr>
    <tr>
      <td>Maintenance</td>
      <td>Oil-free maintenance</td>
    </tr>
    <tr>
      <td>Gas Volume Corrector (Optional)</td>
      <td>Elcor: MID Certified</td>
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
