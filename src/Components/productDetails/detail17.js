import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p17a.png";
import img2 from "../../images/p17b.png";
import img3 from "../../images/p17c.png";
import "../ProductDetailCustom.css";








import related1 from "../../images/p16a.jpg";
import related2 from "../../images/p19a.png";
import related3 from "../../images/p20a.png";
import related4 from "../../images/p21a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3];

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
    { img: related1, title: "IVF Insertion Vortex flow meter", link: "/product-detail/detail18" },
    {
      img: related2,
      title: " EQZ/EQZK Radial Turbine Gas Meters  ",
      link: "/product-detail/detail19",
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
        <div className="col-lg-6 product-detail-right">
            <p className="text-muted">Ultrasonic Flow Meter</p>
            <h3 className="fw-semibold">Ultrasonic BTU meter (Heat & Energy measurement)  </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;AAccurate heat & energy metering with zero pressure drop.</li>
              <li className="mb-2">&#9679;Smart, maintenance-free BTU measurement for every system.</li>
              <li className="mb-2">&#9679;Seamless billing-grade metering for heating & cooling networks.</li>
              
            
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
The IOTAFLOW Ultrasonic BTU Meter, intelligently integrated with the Apator FAUN electronic BTU calculator, offers a seamless solution for high-accuracy thermal energy metering in HVAC systems, district heating, chilled water networks, and industrial energy monitoring. Leveraging transit-time ultrasonic flow technology, it guarantees zero pressure drop, long-term stability, and maintenance-free operation—even in harsh conditions. 
</p>
<p>
The FAUN calculator enhances functionality with its large, clear display, two-button operation, and full configuration capabilities via PC or local input. It computes energy usage (BTU, kWh, GJ, MWh) by processing flow data from the ultrasonic sensor and paired Pt100/Pt500 temperature inputs. The calculator features robust data logging, two independent tariff registers, configurable communication modules, and up to 12 years of battery life—all in line with MID and EN-1434 C/E1/M1 compliance.
</p>

<p><b>Target Applications</b></p>
<ul>
  <li>HVAC cooling and heating system metering</li>
  <li>District heating and cooling networks</li>
  <li>Industrial process heat monitoring</li>
  <li>Chilled water consumption tracking</li>
  <li>Energy audits and building management systems</li>
</ul>


              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li>Transit-time ultrasonic measurement — no moving parts; ensures reliability and minimal maintenance</li>
  <li>Clamp-on option available — non-invasive installation ideal for retrofit upgrades</li>
  <li>Wide dynamic range with high accuracy and stability for variable-flow systems</li>
  <li>Communication-ready with multiple protocol support: M-Bus, Modbus RTU, RS232, RS485, Wireless M-Bus, LON, and pulse/analog outputs</li>
  <li>Long battery lifespan (up to 12 years) or optional 230 VAC power supply</li>
  <li>High ingress protection — configurable to IP54, IP65, or IP68 for durability</li>
  <li>Advanced diagnostics — error detection (air locks, weak signal, flow reversal) and failure logs</li>
  <li>Configurable via PC software or front buttons for tailored operation</li>
</ul>
          )}

          {activeTab === "Technical data" && (
<table>
  <tr>
    <td><b>Parameter</b></td>
    <td><b>Value</b></td>
  </tr>
  <tr>
    <td>Measurement Principle</td>
    <td>Transit-time ultrasonic</td>
  </tr>
  <tr>
    <td>Flow Range</td>
    <td>Wide range per meter size DN</td>
  </tr>
  <tr>
    <td>Pipe Sizes</td>
    <td>Multiple DN options for commercial & industrial use</td>
  </tr>
  <tr>
    <td>Accuracy Class</td>
    <td>±1% (flow) and ±0.1°C (temperature)</td>
  </tr>
  <tr>
    <td>Temperature Range</td>
    <td>Compatible with hot and chilled water</td>
  </tr>
  <tr>
    <td>Communication</td>
    <td>Modbus, RS485, M-Bus, GSM/GPRS, NFC</td>
  </tr>
  <tr>
    <td>Power Supply</td>
    <td>Battery (long life) or external 24V DC</td>
  </tr>
  <tr>
    <td>Ingress Protection</td>
    <td>IP65 or higher</td>
  </tr>
  <tr>
    <td>Special Features</td>
    <td>Low pressure drop, no moving parts, Apator BTU calculator integration</td>
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
