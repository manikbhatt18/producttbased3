import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p2a.png";
import img2 from "../../images/p2b.png";


import related1 from "../../images/p1a.png";
import related2 from "../../images/p3a.jpg";
import related3 from "../../images/p4a.jpg";
import related4 from "../../images/p4a.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  // const images = [img1, img2, img3];
  //  copy code from here
  const images = [img1, img2];

  const ROTATE_MS = 2000;                   

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
      title: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)",
      link: "/product-detail/detail3",
    },
    {
      img: related3,
      title: "Clamp-ON (Fixed) ULTRASONIC UF 1500 Series",
      link: "/product-detail/detail4",
    },
    {
      img: related4,
      title: "Clamp-ON (Portable) ULTRASONIC PF 222/333",
      link: "/product-detail/detail5",
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
            <h3 className="fw-semibold">INLINE ULTRASONIC ROBUST Series</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; Robust™ Inline Ultrasonic Water Flow Meter</li>
              <li className="mb-2">&#9679; No Moving Parts, 10-Year Battery</li>
              <li className="mb-2">
                &#9679; Smart ultrasonic water meter for residential & industrial use. IP67, 10-year
                battery, NFC app, LoRa/GSM communication & built-in data logger.
              </li>
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
                  <li>
                    Struggling with frequent failures in mechanical water meters? Say goodbye to
                    costly downtime, moving part replacements, and clogging issues with the IOTAFLOW
                    Inline Ultrasonic Flow Meter – Robust Series.
                  </li>
                  <li>
                    Designed for precision water flow measurement in harsh and high-demand
                    environments.
                  </li>
                  <li>
                    Offers long-lasting reliability and superior accuracy, even in low-flow or
                    particle-heavy water lines.
                  </li>
                  <li>Uses ultrasonic transit-time technology — no internal obstructions.</li>
                  <li>
                    Compatible with raw water, treated water, DM water, hot water, and condensate up
                    to 130°C, even with sand or suspended solids.
                  </li>

                  <li>
                    <strong>Target Applications:</strong>
                    <ul>
                      <li>Residential water metering for cold/hot domestic water</li>
                      <li>
                        Industrial water flow monitoring in manufacturing, chemical, and food
                        processing
                      </li>
                      <li>Irrigation systems in agriculture and landscape management</li>
                      <li>DM water and condensate flow measurement in pharmaceutical and boiler plants</li>
                      <li>
                        Water consumption tracking in buildings, commercial complexes, and smart
                        cities
                      </li>
                      <li>District cooling and heating systems, HVAC water distribution</li>
                      <li>Utility water supply networks and non-revenue water (NRW) control</li>
                      <li>CGWA flow meter for groundwater abstraction plants</li>
                      <li>CPCB/PCB/NIC data logger compliant water metering systems</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Compliance Features:</strong>
                    <ul>
                      <li>
                        <strong>Sand/Particle Interference? NO PROBLEM</strong> – Rugged design
                        handles poor-quality water effortlessly.
                      </li>
                      <li>
                        <strong>No External Power? NO PROBLEM</strong> – 10-year lithium battery
                        life with optional 24V DC supply.
                      </li>
                      <li>
                        <strong>Hot Water/Condensate? NO PROBLEM</strong> – Operates reliably up to
                        130°C.
                      </li>
                      <li>
                        <strong>No Connectivity? NO PROBLEM</strong> – Supports RS485, Modbus
                        (wired/wireless), GSM/GPRS, LoRaWAN, and NFC.
                      </li>
                      <li>
                        <strong>Outdoor Use? NO PROBLEM</strong> – IP67/IP68-rated enclosure for
                        extreme weather conditions.
                      </li>
                      <li>
                        <strong>Low Flow Conditions? NO PROBLEM</strong> – Incredible 1:125 turndown
                        ratio, ideal for residential and industrial low-demand scenarios.
                      </li>
                      <li>
                        <strong>Built-in Data Logger</strong> – Stores hourly data for 1440 hours,
                        daily data for 460 days, and monthly data for 48 months.
                      </li>
                      <li>
                        <strong>Smart Monitoring via NFC & Mobile App</strong> – Instantly access
                        real-time readings, usage trends, and diagnostics by tapping an Android
                        phone to the meter. Perfect for remote monitoring and smart utility
                        integration.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <ul>
  <li>Rugged design handles poor-quality water effortlessly – Sand/Particle interference is not an issue.</li>
  <li>10-year lithium battery life with optional 24V DC supply – No external power required.</li>
  <li>Reliable operation up to 130°C – Suitable for hot water and condensate conditions.</li>
  <li>Supports multiple connectivity protocols – RS485, Modbus (wired/wireless), GSM/GPRS, LoRaWAN, and NFC.</li>
  <li>IP67/IP68-rated enclosure – Perfect for extreme weather and outdoor installations.</li>
  <li>1:125 turndown ratio – Ideal for low flow residential and industrial scenarios.</li>
  <li>Built-in data logger – Stores hourly data for 1440 hours, daily data for 460 days, and monthly data for 48 months.</li>
  <li>Smart monitoring via NFC & mobile app – Access real-time readings, historical usage trends, and diagnostics with a tap.</li>
</ul>
          )}

          {activeTab === "Technical data" && (
            <ul>
              <li>
                <strong>Pipe Range:</strong> DN32 – DN300 / up to DN1000
              </li>
              <li>
                <strong>NFC Communication:</strong> Enabled
              </li>
              <li>
                <strong>Accuracy:</strong> ± 2.0% of MV
              </li>
              <li>
                <strong>Maximum Pipeline Pressure:</strong> 2.5 MPa / 25 bar
              </li>
              <li>
                <strong>Fluid Temperature Range:</strong> 50°C to 130°C (Hot Water)
              </li>
              <li>
                <strong>Ambient Temperature Range:</strong> 5°C to 65°C
              </li>
              <li>
                <strong>Protection Rating:</strong> IP67 (IP68 optional)
              </li>
              <li>
                <strong>End Connection:</strong> ASME/ANSI B16.5 Class 150, Tri-Clover, PN16
              </li>
              <li>
                <strong>Compliance:</strong> ISO 4064
              </li>
              <li>
                <strong>Interfaces:</strong> Pulse, RS485, Analog 4–20mA (Optional), In‑built
                LoRaWAN (Optional)
              </li>
              <li>
                <strong>Power Supply:</strong> Battery (3.6V Lithium, 10 years) or optional mains
              </li>
              <li>
                <strong>Measurement Data Logging:</strong>
                <ul>
                  <li>1440 Hourly Logs</li>
                  <li>460 Daily Logs</li>
                  <li>48 Monthly Logs</li>
                </ul>
              </li>
              <li>
                <strong>Certifications:</strong> CE, MID Certified
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
