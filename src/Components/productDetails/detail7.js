import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p7a.jpg";
import img2 from "../../images/2000x2000.jpg";
import img3 from "../../images/p7c.png";
import img4 from "../../images/p7d.png";
import "../ProductDetailCustom.css";




import related1 from "../../images/p6a.png";
import related2 from "../../images/p8a.png";
import related3 from "../../images/p7a.jpg";
import related4 from "../../images/p10a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3,img4];

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
      title: "CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters",
      link: "/product-detail/detail8",
    },
    {
      img: related3,
      title: "MF-TER Electromagnetic Flow Meter",
      link: "/product-detail/detail7b",
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
             <div ref={imgWrapperRef} className=" d-flex img-canvas img-fade-in mt-7">
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
            <p className="text-muted">Electromagnetic Flow Meter</p>
            <h3 className="fw-semibold">MF-PRO Electromagnetic Flow Meter</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Ideal for Effluent, Water & Slurry Applications</li>
              <li className="mb-2">&#9679;CGWA Compliant</li>
              
            
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
The <b>MF-PRO Electromagnetic Flow Meter</b> by IOTAFLOW Systems is a highly robust, full-bore inline meter engineered for precise flow measurement of conductive liquids, slurries, and wastewater in industrial and municipal applications. Designed for harsh flow environments, it delivers reliable performance with no moving parts, minimal maintenance, and a wide velocity range from 0.3 to 10 m/s.
</p>
<p>
MF-PRO complies with CGWA guidelines for flow monitoring and can transmit flow data to CPCB, State Pollution Control Boards (SPCB), and NIC portals, making it ideal for regulated effluent and water discharge applications.
</p>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <>
            <ul>
  <li>Based on <b>Faraday’s Law</b> for high-accuracy conductive liquid measurement</li>
  <li>Full-bore inline design with negligible pressure drop</li>
  <li>Velocity range: 0.3 to 10 m/s</li>
  <li>Pipe sizes from DN10 to DN2000</li>
  <li>Accuracy: ±0.5% of reading (standard)</li>
  <li>Electrode materials: SS316L, Hastelloy, Titanium, Tantalum</li>
  <li>Liner materials: PTFE, Rubber, Ebonite – suitable for chemical and slurry media</li>
  <li>Output signals: RS485, Modbus RTU, 4–20 mA, pulse, HART Communication</li>
  <li>Battery-powered options for remote flow monitoring</li>
  <li>Display with totalizer, diagnostics, and status indicators</li>
  <li>IP65/IP68 protection class</li>
  <li>Fully <b>CGWA compliant</b> – compatible with real-time data transmission to CPCB/SPCB/NIC</li>
  <li>CE, ISO certified</li>
</ul>

<p><b>Applications</b></p>
<ul>
  <li>Effluent discharge flow monitoring for CGWA compliance</li>
  <li>Slurry flow measurement in cement, paper, and mineral processing</li>
  <li>Raw and treated water metering in industrial and municipal networks</li>
  <li>STP/ETP wastewater flow monitoring</li>
  <li>Cooling water, chemical dosing, and process lines</li>
  <li>Utility flow auditing in large industrial setups</li>
  <li>Irrigation canals and agricultural distribution pipelines</li>
</ul>
</>


          )}

          {activeTab === "Technical data" && (
          <table>
  <tr>
    <td><b>Parameter</b></td>
    <td><b>Value</b></td>
  </tr>
  <tr>
    <td>Pipe Size Range</td>
    <td>DN10 to DN2000 mm</td>
  </tr>
  <tr>
    <td>Nominal Pressure</td>
    <td>0.6 MPa to 4.0 MPa</td>
  </tr>
  <tr>
    <td>Accuracy</td>
    <td>±0.5% of reading (standard), ±0.3% optional</td>
  </tr>
  <tr>
    <td>Velocity Range</td>
    <td>0.3 to 10 m/s (500:1 turndown ratio)</td>
  </tr>
  <tr>
    <td>Liner Materials</td>
    <td>PTFE (Teflon), PFA, F46, Neoprene, Polyurethane</td>
  </tr>
  <tr>
    <td>Electrode Material Options</td>
    <td>SS316, Hastelloy B, Hastelloy C, Titanium, Tantalum, Platinum-Iridium, SS + Tungsten Coat</td>
  </tr>
  <tr>
    <td>Electrode Type</td>
    <td>General type, Scraper type, Replaceable type</td>
  </tr>
  <tr>
    <td>Structure Type</td>
    <td>Integral type, Remote type, Insertion (for DN200 and above)</td>
  </tr>
  <tr>
    <td>Medium Conductivity</td>
    <td>≥ 5.0 µS/cm</td>
  </tr>
  <tr>
    <td>Ambient Temperature</td>
    <td>-25°C to +60°C</td>
  </tr>
  <tr>
    <td>Operating Temperature</td>
    <td>Up to 150°C (liner-dependent)</td>
  </tr>
  <tr>
    <td>Protection Class</td>
    <td>IP65 / IP68 (remote type submersible)</td>
  </tr>
  <tr>
    <td>Power Supply</td>
    <td>24V DC, Lithium Battery (optional for remote sites)</td>
  </tr>
  <tr>
    <td>Output Signals</td>
    <td>RS485, Modbus RTU, 4–20 mA, Pulse, Relay, GSM/GPRS</td>
  </tr>
  <tr>
    <td>Display Unit</td>
    <td>LCD with totalizer, diagnostics, and flow rate display</td>
  </tr>
  <tr>
    <td>Optional Features</td>
    <td>Insertion type, data logger, telemetry-ready</td>
  </tr>
  <tr>
    <td>Certifications</td>
    <td>CE, ISO, CGWA Compliant</td>
  </tr>
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
