import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p16a.jpg";
import img2 from "../../images/p16b.png";
import img3 from "../../images/p16c.png";








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
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Vortex Flow Meters</p>
            <h3 className="fw-semibold">VFM Vortex Flow Meters  </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Accurate and maintenance-free flow monitoring for steam, gas, and liquids</li>
              <li className="mb-2">&#9679;Ideal for power plants, chemical industries, and utility management</li>
              <li className="mb-2">&#9679;Handles harsh conditions with stable signal output and wide media compatibility</li>
              
            
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
  <li><strong>Product:</strong> IOTAFLOW Vortex Flow Meter – Precision Flow Monitoring for Steam, Gas, and Liquid Applications</li>
  <li><strong>Description:</strong> High-accuracy flow measurement solution for industrial gas, steam, and liquid applications, including saturated and superheated steam</li>
  <li><strong>Technology:</strong> Based on the Karman vortex shedding principle for reliable, maintenance-free operation and robust signal stability in harsh environments</li>
  <li><strong>Design Advantage:</strong> Custom-engineered sizing to fit process lines without pipe modifications, ensuring accurate low-flow measurement and avoiding pressure drop or costly piping alterations</li>
  <li><strong>Targeted Application Areas:</strong>
    <ul>
      <li><strong>Power Plants & Boiler Systems:</strong> Steam flow measurement in turbine lines, boiler feed systems, and heat recovery loops; accurate in both saturated and superheated steam conditions</li>
      <li><strong>Chemical & Petrochemical Industries:</strong> Measurement of process gases, vapors, and utility steam in aggressive and corrosive environments such as reactors, pipelines, and heat exchangers</li>
      <li><strong>Oil & Gas Industry:</strong> Natural gas metering, compressed gas distribution, and flare gas monitoring in upstream and downstream operations</li>
      <li><strong>Food & Beverage Industry:</strong> CIP process support with hygienic-grade options; monitoring of steam, water, and CO₂ in beverage and dairy production</li>
      <li><strong>Pharmaceutical Industry:</strong> Steam control for SIP and utility management in GMP-compliant environments</li>
      <li><strong>Automotive & Metal Processing:</strong> Monitoring of cooling water, compressed air, and industrial fluids in high-heat, high-vibration manufacturing conditions</li>
      <li><strong>Pulp, Paper & Textiles:</strong> Steam and condensate flow tracking in drying processes and energy optimization in utility services</li>
      <li><strong>Water & Wastewater Treatment:</strong> Measurement of chlorine gas, aeration airflow, and process water in treatment plants and distribution networks</li>
    </ul>
  </li>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>No Moving Parts:</strong> Maintenance-free design eliminates wear, leaks, and mechanical failure, ensuring long-term reliability and low lifecycle cost</li>
  <li><strong>Custom Process Fit:</strong> Eliminates need for pipe size modification; ensures zero additional pressure drop while covering low-flow measurement requirements without sacrificing accuracy or stability</li>
  <li><strong>SS 316L Stainless Steel Construction:</strong> Rugged and corrosion-resistant with industry-standard flange and wafer connections for flexible installation</li>
  <li><strong>Steam Optimization:</strong> Engineered for high-temperature steam flow with integrated pressure and temperature compensation for accurate metering of saturated and superheated steam</li>
  <li><strong>Wide Flow Turndown Ratio:</strong> Up to 1:20 rangeability—ideal for low-flow applications in steam distribution, compressed air systems, and process gas</li>
  <li><strong>Negligible Pressure Drop:</strong> Delivers up to 90% lower pressure loss compared to orifice meters, maximizing system efficiency and reducing energy costs</li>
  <li><strong>IBR Approved:</strong> Certified for compliance with Indian Boiler Regulations for regulated steam and boiler applications</li>
  <li><strong>High Accuracy and Repeatability:</strong> ±0.5% accuracy and ±0.2% repeatability with robust performance under fluctuating process conditions</li>
  <li><strong>Universal Media Compatibility:</strong> Accurately measures air, steam, natural gas, nitrogen, and non-conductive liquids across industries</li>
  <li><strong>Digital Communication Ready:</strong> Supports RS485, MODBUS, HART, and GPRS for seamless integration with DCS, PLC, and SCADA systems</li>
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
      <td>DN20 – DN800</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>±1% FS (±0.5% FS optional)</td>
    </tr>
    <tr>
      <td>Fluid Temperature</td>
      <td>&lt;250°C (High temp &lt;350°C optional)</td>
    </tr>
    <tr>
      <td>Operating Pressure</td>
      <td>Up to 16 Bar (40 Bar on request)</td>
    </tr>
    <tr>
      <td>Temperature & Pressure Compensation</td>
      <td>Built-in (optional)</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>External 24 VDC ±10%</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>4–20 mA / RS485 / HART (on request)</td>
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
