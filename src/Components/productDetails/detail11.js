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
  <li>Contoil® Oil Flow Meters — precision-engineered for accurate fuel and lubrication oil measurement in demanding industrial environments</li>
  <li>Consistent performance — unaffected by fluid temperature or viscosity</li>
  <li>Compact design — enables easy installation in space-restricted systems</li>
  <li>Ideal for integration with:
    <ul>
      <li>Power generators</li>
      <li>Boilers</li>
      <li>Burners</li>
      <li>Closed-loop lubrication systems</li>
    </ul>
  </li>
  <li>Applications Across Industries:
    <ul>
      <li><strong>Fuel Consumption Measurement:</strong>
        <ul>
          <li>Oil burners in heating systems and industrial furnaces</li>
          <li>Unloading applications</li>
          <li>Ships, diesel locomotives, and emergency power units</li>
          <li>Combined heat and power (CHP) systems</li>
        </ul>
      </li>
      <li><strong>Lubrication Monitoring:</strong>
        <ul>
          <li>Closed-loop systems for machinery bearings and motors</li>
          <li>Machine test benches and engine testing labs</li>
        </ul>
      </li>
      <li><strong>Remote Integration:</strong>
        <ul>
          <li>Optional digital output for advanced control systems</li>
          <li>Compatible with remote monitoring platforms</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
           <ul>
  <li>Unmatched Accuracy (0.5%) — reliable fuel consumption monitoring, unaffected by temperature and viscosity variations</li>
  <li>Flexible Installation:
    <ul>
      <li>Mount horizontally, vertically, or at an incline</li>
      <li>Operates without straight inlet/outlet runs</li>
      <li>Suitable for batching, dosing, and filling operations</li>
    </ul>
  </li>
  <li>Dual-Side Pump Compatibility — install on either the pressure or suction side of pumps</li>
  <li>Operational Simplicity:
    <ul>
      <li>Mechanical display with resettable counter</li>
      <li>Optional limiting value switch for flow rate control</li>
    </ul>
  </li>
  <li>Built-In Diagnostics — enables quick function checks, fault analysis, and on-site repairability</li>
  <li>Compact Design — ideal for tight enclosures and complex piping systems</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Pipe Range: DN4 – DN80</li>
  <li>Outputs:
    <ul>
      <li>Pulse</li>
      <li>Analog 4–20 mA (continuous for remote monitoring)</li>
    </ul>
  </li>
  <li>Power Options:
    <ul>
      <li>External power supply</li>
      <li>Battery backup (optional)</li>
    </ul>
  </li>
  <li>Connection Types:
    <ul>
      <li>Flanges — DIN, ANSI, JIS</li>
      <li>Threaded ends</li>
    </ul>
  </li>
  <li>Accuracy: 0.5% to 1%</li>
  <li>Performance: Independent of fluid viscosity and temperature</li>
  <li>Display: Mechanical with resettable totalizer</li>
  <li>Straight Run Requirement: None</li>
  <li>Temperature Range Options: 130°C and 180°C</li>
  <li>Nominal Pressure Ratings: PN 16, PN 25, PN 40</li>
  <li>Suitable Applications:
    <ul>
      <li>Heating Fuel — Extra light / Light</li>
      <li>Medium and Heavy naphtha</li>
      <li>Diesel, petrol, and other lubricating oils</li>
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
