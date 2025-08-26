import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p21a.png";
import img2 from "../../images/p21b.png";









import related1 from "../../images/p16a.jpg";
import related2 from "../../images/p16a.jpg";
import related3 from "../../images/p19a.png";
import related4 from "../../images/p22a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2];

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
      title: "EQZ/EQZK Radial Turbine Gas Meters ",
      link: "/product-detail/detail19",
    },
    {
      img: related4,
      title: " UF-Biosonic (Ultrasonic Flow Measurement for Biogas)",
      link: "/product-detail/detail22",
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
            <h3 className="fw-semibold">GasPro RPD Gas Meter</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;IOTAFLOW GasPro RPD gas meter for PNG, LPG, biogas in CGD & industries. </li>
              <li className="mb-2">&#9679;DN25–DN200, 1600 m³/h. MID, ATEX, CGWA, RS485, EVC & Modbus ready.</li>
              <li className="mb-2">&#9679;Made in India.</li>
              
            
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
  <li><strong>Product Name:</strong> GasPro RPD Gas Meter by IOTAFLOW Systems</li>
  <li><strong>Measurement Principle:</strong> Rotary displacement for high-accuracy gas flow metering</li>
  <li><strong>Measurable Gases:</strong> Natural gas, LPG, biogas, hydrogen, nitrogen, and industrial gases</li>
  <li><strong>Size Range:</strong> DN15 to DN200 (G6 to G400)</li>
  <li><strong>Accuracy:</strong> &plusmn;1.5%</li>
  <li><strong>Output Options:</strong> Pulse, 4–20 mA, RS-485 Modbus</li>
  <li><strong>Volume Correction:</strong> Optional ELCOR corrector for MID-certified pressure and temperature compensation</li>
  <li><strong>Hazardous Zone Compliance:</strong> ATEX-approved for explosive environments</li>
  <li><strong>Remote Monitoring:</strong> Supports 2G/3G/4G/NB-IoT for telemetry and AMR/AMI systems</li>
  <li><strong>Applications:</strong></li>
  <ul>
    <li><strong>City Gas Distribution (CGD):</strong> Municipal utility metering with billing-grade accuracy</li>
    <li><strong>Industrial Consumption:</strong> Refineries, power plants, food &amp; beverage, and pharma sectors</li>
    <li><strong>Commercial Infrastructure:</strong> Centralized metering in malls, hospitals, and commercial buildings</li>
    <li><strong>OEM & Process Industries:</strong> LPG, biogas, CNG, hydrogen, and nitrogen metering</li>
    <li><strong>Energy Billing Systems:</strong> Integrated temperature/pressure compensation for accurate billing</li>
    <li><strong>Remote Telemetry:</strong> AMR/AMI systems with Modbus or GSM integration</li>
    <li><strong>Hazardous Areas:</strong> ATEX-compatible metering in explosive zones</li>
    <li><strong>EVC Compatibility:</strong> Supports ELCOR and ELCORplus volume correctors</li>
  </ul>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>Technology:</strong> Rotary piston displacement for high-accuracy gas flow measurement</li>
  <li><strong>Flow Range:</strong> Wide turndown ratios up to 120:1; flow rates up to 1600 m³/h</li>
  <li><strong>Size Options:</strong> DN25 to DN200</li>
  <li><strong>Material Options:</strong> Aluminum alloy, cast steel, stainless steel (based on pressure class)</li>
  <li><strong>Pressure Ratings:</strong> 1.0 – 1.6 MPa</li>
  <li><strong>Sensors:</strong> Integrated pressure and temperature sensors for real-time compensation</li>
  <li><strong>Communication Interfaces:</strong> RS-485 Modbus, pulse output, 4–20 mA analog</li>
  <li><strong>Power Supply:</strong> Battery-powered (up to 11 years) or external power options</li>
  <li><strong>Telemetry Integration:</strong> Compatible with IOTAFLOW’s EVCs and dataloggers for remote reading</li>
  <li><strong>Performance:</strong> Low pressure drop, minimal maintenance, long service life</li>
  <li><strong>Certifications:</strong> MID and ATEX certified variants available</li>
  <li><strong>Operating Conditions:</strong> Ambient temperature -25°C to +80°C; gas media up to +60°C</li>
  <li><strong>Security:</strong> Tamper-proof construction for field reliability</li>
  <li><strong>Applications:</strong> CGD networks, industrial plants, and utility-grade metering</li>
</ul>
 )}

          {activeTab === "Technical data" && (
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pipe Size Range</td>
      <td>DN15 to DN200</td>
    </tr>
    <tr>
      <td>Flow Sizes</td>
      <td>G6 to G400</td>
    </tr>
    <tr>
      <td>Medium Temperature</td>
      <td>&minus;20&deg;C to +80&deg;C</td>
    </tr>
    <tr>
      <td>Nominal Pressure</td>
      <td>10 bar (16 bar available as an option)</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>&plusmn;1.5%</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>External &plusmn;24VDC &plusmn;15%</td>
    </tr>
    <tr>
      <td>Signal Outputs</td>
      <td>4&ndash;20 mA, Pulse, RS-485 Modbus</td>
    </tr>
    <tr>
      <td>Communication Interface</td>
      <td>Optional modem: 2G / 3G / 4G / NB-IoT</td>
    </tr>
    <tr>
      <td>Volume Correction (EVC)</td>
      <td>MID-certified ELCOR gas volume corrector (optional)</td>
    </tr>
    <tr>
      <td>Mounting Orientation</td>
      <td>Horizontal or vertical</td>
    </tr>
    <tr>
      <td>Enclosure Protection</td>
      <td>IP66-rated casing (dust- and moisture-resistant)</td>
    </tr>
    <tr>
      <td>Material of Construction</td>
      <td>High-grade aluminum alloy or optional stainless steel</td>
    </tr>
    <tr>
      <td>Compliances</td>
      <td>CE, MID, ATEX, CGD-compliant</td>
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
