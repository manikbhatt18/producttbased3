import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p13.png";







import related1 from "../../images/p11a.jpg";
import related2 from "../../images/p12a.png";
import related3 from "../../images/p14a.png";
import related4 from "../../images/p15a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1];

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
            <h3 className="fw-semibold">Micro Stream Flow Sensor OFZ Series </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;OF-Z Microstream Flow Sensor – Oval Gear Sensor for Oil & AdBlue | Aichi Tokei Japan</li>
              <li className="mb-2">&#9679;AdBlue & oil flow sensor for Indian OEMs. Aichi OF-Z sensor by IOTAFLOW. 0.5–200 L/h range.</li>
              <li className="mb-2">&#9679;±0.5% accuracy, compact, easy to install</li>
              
            
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
  <li><strong>Product:</strong> OF-Z Microstream Flow Sensor from Aichi Tokei Denki, Japan</li>
  <li><strong>Type:</strong> Compact, high-precision oval gear flow sensor for low flow rate measurement</li>
  <li><strong>Fluid Compatibility:</strong> Viscous fluids such as AdBlue, kerosene, heavy oil, and lubricants</li>
  <li><strong>Use Case:</strong> Ideal for applications requiring excellent repeatability, precise control, and reliable fluid dispensing in industrial and automotive environments</li>
  <li><strong>Technology:</strong> Aichi’s micro-flow technology for accurate volumetric measurement unaffected by viscosity or pulsation</li>
  <li><strong>Design:</strong> Simple mechanical structure for long-term stability and easy installation in narrow or confined spaces</li>
  <li><strong>Distribution:</strong> Offered in India by IOTAFLOW Systems for OEMs, industrial users, and process control engineers</li>
  <li><strong>Applications:</strong>
    <ul>
      <li>AdBlue (DEF) dispensing systems for automotive OEMs</li>
      <li>Fuel dosing systems using kerosene, heavy oil, and diesel</li>
      <li>Lubrication systems in industrial machinery</li>
      <li>Process control in chemical dosing for additives and stabilizers</li>
      <li>Thermal power plant chemical injection</li>
      <li>Printing, textile, and packaging industries requiring accurate liquid flow metering</li>
      <li>OEM manufacturing lines needing embedded flow control sensors</li>
      <li>Low flow monitoring in skid-mounted systems</li>
    </ul>
  </li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li><strong>Design:</strong> Compact and robust oval gear flow sensor for micro and low-flow applications</li>
  <li><strong>Accuracy:</strong> High repeatability with ±0.5% accuracy for stable flow control</li>
  <li><strong>Fluid Compatibility:</strong> Viscous fluids including AdBlue, DEF, kerosene, oils, and chemical additives</li>
  <li><strong>Installation:</strong> No need for straight pipe runs—suitable for tight piping layouts</li>
  <li><strong>Performance:</strong> Minimal pressure loss and excellent response to pulsating flows</li>
  <li><strong>Flow Range:</strong> 0.5 L/h to 200 L/h (model-dependent)</li>
  <li><strong>Connection Sizes:</strong> Rc ¼, Rc ⅜</li>
  <li><strong>Temperature Resistance:</strong> Up to 80°C fluid temperature</li>
  <li><strong>Structure:</strong> Simple mechanical design—no power required for basic models</li>
  <li><strong>Digital Options:</strong> Optional digital output models for remote monitoring or OEM integration</li>
  <li><strong>Origin:</strong> Made in Japan – Aichi Tokei Denki precision quality</li>
  <li><strong>Availability:</strong> Offered in India by IOTAFLOW Systems Pvt. Ltd.</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <table>
  <thead>
    <tr>
      <th><strong>Parameter</strong></th>
      <th><strong>Specification</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pipe Size Range</td>
      <td>DN5 to DN10</td>
    </tr>
    <tr>
      <td>Connection Size</td>
      <td>R1/4" to R1/2" threaded</td>
    </tr>
    <tr>
      <td>Maximum Pressure</td>
      <td>5 bar</td>
    </tr>
    <tr>
      <td>Maximum Fluid Temperature</td>
      <td>70°C</td>
    </tr>
    <tr>
      <td>Output Signal</td>
      <td>Voltage pulses / Open collector (choose at ordering) with 0.5 m cable</td>
    </tr>
    <tr>
      <td>Pulse Value</td>
      <td>0.46 ml/pulse</td>
    </tr>
    <tr>
      <td>Applied Voltage Range</td>
      <td>3 to 24 VDC</td>
    </tr>
    <tr>
      <td>Power Consumption</td>
      <td>0.2 VA or less</td>
    </tr>
    <tr>
      <td>Material of Construction</td>
      <td>Case & Rotor: PPS; Shaft: SS304; O-ring: NBR</td>
    </tr>
    <tr>
      <td>Installation Orientation</td>
      <td>Any (horizontal or vertical); no straight pipe length required</td>
    </tr>
    <tr>
      <td>Fluid Compatibility</td>
      <td>Urea (AdBlue/DEF), light oil, heavy oil, kerosene, cool/hot water, weak acid/alkali</td>
    </tr>
    <tr>
      <td>Country of Origin</td>
      <td>Japan</td>
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
