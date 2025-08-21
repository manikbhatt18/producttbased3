import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p20a.png";
import img2 from "../../images/p20b.png";









import related1 from "../../images/p16a.jpg";
import related2 from "../../images/p16a.jpg";
import related3 from "../../images/p19a.png";
import related4 from "../../images/p21a.png";

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
            <h3 className="fw-semibold">Ultra-NXT Ultrasonic Gas Flow Meter  </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Smart ultrasonic gas metering with real-time temperature and pressure compensation</li>
              <li className="mb-2">&#9679;Ideal for utilities, industrial plants, and commercial gas distribution</li>
              <li className="mb-2">&#9679;Maintenance-free, explosion-proof, and IIoT-ready for future scalability</li>
              
            
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
  <li><strong>Product:</strong> Ultra-Nxt Ultrasonic Gas Flow Meter</li>
  <li><strong>Application:</strong> Precision gas measurement for industrial, commercial, and utility sectors</li>
  <li><strong>Technology:</strong> Multi-beam ultrasonic design with wide dynamic range up to 1:200</li>
  <li><strong>Compensation:</strong> Real-time correction for temperature, pressure, and gas compressibility</li>
  <li><strong>Replacement:</strong> Ideal substitute for legacy membrane, rotary, and turbine meters</li>

  <li><strong>Industry Applications:</strong>
    <ul>
      <li><em>Natural Gas Distribution & Utilities:</em> Accurate city gas metering, smart grid integration, low-pressure drop, silent operation</li>
      <li><em>Industrial Gas Flow Monitoring:</em> Suitable for oil & gas, chemicals, metals, pharmaceuticals; durable solid-state alternative</li>
      <li><em>Commercial Infrastructure:</em> Bulk monitoring in complexes with integration to BMS systems</li>
      <li><em>Hazardous Environments:</em> Explosion-proof, resistant to magnetic fields and humidity; fits refineries, LNG terminals</li>
    </ul>
  </li>

  <li><strong>Advantages:</strong>
    <ul>
      <li>12+ year service life with MTBF of 60,000+ hours</li>
      <li>Compatible with SCADA and IoT platforms</li>
      <li>Reduces installation and operational costs</li>
      <li>Smart grid and IIoT ready for future-proof deployments</li>
    </ul>
  </li>

  <li><strong>Tagline:</strong> Smart, scalable, and sustainable choice for modern gas metering</li>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>Product Name:</strong> Ultra-Nxt Ultrasonic Gas Flow Meter</li>
  <li><strong>Measurement Principle:</strong> Multi-beam ultrasonic technology for high-accuracy flow and volume measurement</li>
  <li><strong>Compensation:</strong> Real-time correction for temperature, pressure, and gas compressibility</li>
  <li><strong>Dynamic Range:</strong> Wide range up to 1:200 for varied flow conditions</li>
  <li><strong>Deployment:</strong> Designed for industrial gas measurement, natural gas utilities, and commercial metering systems</li>
  <li><strong>Legacy Replacement:</strong> Ideal replacement for membrane, rotary, and turbine gas meters</li>
  <li><strong>Industry Applications:</strong></li>
  <ul>
    <li><strong>Natural Gas Distribution & Utilities:</strong> Accurate city gas metering, smart grid integration, and utility billing with minimal pressure drop and silent operation</li>
    <li><strong>Industrial Gas Flow Monitoring:</strong> Used in oil & gas, chemical, metal, and pharmaceutical sectors; solid-state alternative to turbine and rotary meters</li>
    <li><strong>Commercial Infrastructure:</strong> Bulk gas monitoring in buildings, complexes, and industrial parks; integrates with BMS for centralized energy efficiency</li>
    <li><strong>Hazardous Environments:</strong> Explosion-proof design; resistant to magnetic fields and high humidity; suitable for refineries, petrochemical plants, and LNG terminals</li>
  </ul>
  <li><strong>Why Choose Ultra-Nxt?</strong></li>
  <ul>
    <li>12+ year service life with MTBF over 60,000 hours</li>
    <li>Seamless integration with SCADA and IoT platforms</li>
    <li>Lower installation and operational costs</li>
    <li>Future-ready with smart grid and IIoT compatibility</li>
    <li>Smart, scalable, and sustainable choice for modern gas metering</li>
  </ul>
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
      <td>G 6 up to G 4000</td>
    </tr>
    <tr>
      <td>Measurement Accuracy Options</td>
      <td>&plusmn;1.2% to &plusmn;2%</td>
    </tr>
    <tr>
      <td>Flow Range Turndown</td>
      <td>1:200</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>-40&deg;C to +60&deg;C</td>
    </tr>
    <tr>
      <td>Maximum Pressure</td>
      <td>16 Bar</td>
    </tr>
    <tr>
      <td>Outputs</td>
      <td>RS-232, RS-485, and optical ports</td>
    </tr>
    <tr>
      <td>Modem Options</td>
      <td>Built-in or external GSM/3G modems</td>
    </tr>
    <tr>
      <td>Protection</td>
      <td>IP66</td>
    </tr>
    <tr>
      <td>Explosion-proof</td>
      <td>1Ex ib IIB T4 Gb X</td>
    </tr>
    <tr>
      <td>Measurable Gases</td>
      <td>Natural &amp; Fuel Gases</td>
    </tr>
    <tr>
      <td>Built-in Corrections</td>
      <td>Temperature, Pressure &amp; Gas correction built-in</td>
    </tr>
    <tr>
      <td>External Corrector Required</td>
      <td>No</td>
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
