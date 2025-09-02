import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p11a.jpg";
import img2 from "../../images/p11b.png";
import img3 from "../../images/p11c.png";
import img4 from "../../images/p11d.png";
import img5 from "../../images/p11e.jpg";
import img6 from "../../images/p11f.png";
import img7 from "../../images/p11g.png";
import img8 from "../../images/p11h.png";
import img9 from "../../images/p11i.png";
import "../ProductDetailCustom.css";





import related1 from "../../images/p12a.png";
import related2 from "../../images/p13.png";
import related3 from "../../images/p14a.png";
import related4 from "../../images/p15a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3,img4, img5,img6,img7, img8,img9];

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
    { img: related1, title: "Oval Gear Flow Meters (OGM)", link: "/product-detail/detail12" },
    {
      img: related2,
      title: " Micro Stream Flow Sensor OFZ Series ",
      link: "/product-detail/detail13",
    },
    {
      img: related3,
      title: "  TRX Ultrasonic Air Meters ",
      link: "/product-detail/detail14",
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
            <p className="text-muted">Positive Displacement Oil Meters</p>
            <h3 className="fw-semibold">Contoil / RPD Flow Meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;ContOil® Inline Oil Flow Meter -</li>
              <li className="mb-2">&#9679;For Boilers, Generators, and Engine Test Benches</li>
              <li className="mb-2">&#9679;High Accuracy Volumetric Flow Meters</li>
              
            
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
  <li><strong>Contoil® Oil Flow Meters:</strong> Precision-engineered for accurate measurement of fuel and lubrication oil in demanding industrial environments</li>
  <li><strong>Performance:</strong> Consistent accuracy regardless of fluid temperature or viscosity</li>
  <li><strong>Design:</strong> Compact form factor for easy installation in space-restricted systems</li>
  <li><strong>Integration:</strong> Ideal for power generators, boilers, burners, and closed-loop lubrication systems</li>
  <li><strong>Applications – Fuel Consumption Measurement:</strong>
    <ul>
      <li>Oil burners in heating systems and industrial furnaces</li>
      <li>Unloading applications</li>
      <li>Ships, diesel locomotives, and emergency power units</li>
      <li>Combined heat and power (CHP) systems</li>
    </ul>
  </li>
  <li><strong>Applications – Lubrication Monitoring:</strong>
    <ul>
      <li>Closed-loop systems for machinery bearings and motors</li>
      <li>Machine test benches and engine testing labs</li>
    </ul>
  </li>
  <li><strong>Remote Integration:</strong> Optional digital output for control system integration and remote monitoring</li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
          <ul>
  <li><strong>Unmatched Accuracy (±0.5%):</strong> Reliable fuel consumption monitoring with temperature- and viscosity-independent readings</li>
  <li><strong>Flexible Installation:</strong> Mount horizontally, vertically, or at an incline—even in space-constrained systems without straight inlet/outlet runs</li>
  <li><strong>Application Support:</strong> Suitable for batching, dosing, and filling operations</li>
  <li><strong>Dual-Side Pump Compatibility:</strong> Install on either the pressure or suction side of pumps</li>
  <li><strong>Operational Simplicity:</strong> Mechanical display with resettable counter and optional limiting value switch for flow rate control</li>
  <li><strong>Built-In Diagnostics:</strong> Enables quick function checks, fault analysis, and on-site repairability to reduce downtime and costs</li>
  <li><strong>Compact Design:</strong> Optimized for tight enclosures and complex piping systems</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <table>
  <thead>
    <tr>
      <th><strong>Parameter</strong></th>
      <th><strong>Value</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pipe Range</td>
      <td>DN4 – DN80</td>
    </tr>
    <tr>
      <td>Outputs</td>
      <td>Pulse, Analog 4–20 mA continuous for remote monitoring</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>External power supply with battery back-up option</td>
    </tr>
    <tr>
      <td>Connection Types</td>
      <td>Flange (DIN, ANSI, JIS), threaded ends</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>0.5% to 1%</td>
    </tr>
    <tr>
      <td>Viscosity & Temperature Effect</td>
      <td>Independent of viscosity and temperature</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>Mechanical display with resettable totalizer</td>
    </tr>
    <tr>
      <td>Straight Run Requirement</td>
      <td>No straight run required</td>
    </tr>
    <tr>
      <td>Temperature Range</td>
      <td>130°C and 180°C</td>
    </tr>
    <tr>
      <td>Nominal Pressure</td>
      <td>PN 16, 25 and 40 Bar</td>
    </tr>
    <tr>
      <td>Suitable Applications</td>
      <td>Heating fuel (extra light / light), medium, heavy naphtha, diesel, petrol, and other lubricating liquids (oils)</td>
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
