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
            <p className="text-muted">Gas Flow Meters</p>
            <h3 className="fw-semibold">EQZ/EQZK Radial Turbine Gas Meters </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;</li>
              <li className="mb-2">&#9679;</li>
              <li className="mb-2">&#9679;</li>
              
            
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
  <li><strong>Product Description:</strong> The EQZ radial turbine gas meters by Elgas are engineered for high-precision measurement of natural gas and other clean, non-corrosive gases.</li>
  <li><strong>Deployment:</strong> Widely adopted across India for industrial and commercial gas distribution networks.</li>
  <li><strong>Design Strength:</strong> Built for performance in high-temperature environments and challenging climatic conditions.</li>
  <li><strong>Reliability:</strong> Ensures long-term durability with minimal pressure loss and easy integration into telemetry and smart metering systems.</li>

  <li><strong>Applications:</strong></li>
  <ul>
    <li><strong>Industrial Gas Flow Monitoring:</strong> Used for high-accuracy measurement of natural gas in steel plants, refineries, and chemical industries. Ideal for process control and energy optimization in large-scale industrial operations.</li>
    <li><strong>City Gas Distribution (CGD) Networks:</strong> Widely applied in urban gas distribution under CGD projects approved by PNGRB in India. Ensures reliable flow data for billing and pipeline integrity.</li>
    <li><strong>Power Plants & Captive Power Units:</strong> Used in gas-based thermal and combined cycle power plants for metering fuel gas input. Enables fuel efficiency tracking and compliance with CEA and DISCOM regulations.</li>
    <li><strong>Commercial & Utility Metering:</strong> Installed in commercial complexes, malls, hospitals, and SEZs for accurate utility gas billing. Supports LPG, PNG, and CNG distribution in multi-tenant setups.</li>
    <li><strong>Oil & Gas Pipelines (Upstream/Midstream):</strong> Deployed in custody transfer and flow measurement of natural gas across pipeline networks. Suitable for ONGC, GAIL, IndianOil, and EPC contractor applications.</li>
    <li><strong>EPC and Infrastructure Projects:</strong> Integrated into gas metering packages used by major EPC firms like L&T and Tata Projects in government and private sector builds.</li>
    <li><strong>Research, Labs & Calibration Centers:</strong> Employed in metrology labs and test benches for calibrating flow systems and developing gas control technologies. Supports precision testing for R&D in Indian institutes.</li>
    <li><strong>Rural & Remote Industrial Clusters:</strong> Installed in decentralized energy systems, agro-industries, and remote industrial gas networks. Designed for low-maintenance operation in off-grid or semi-urban regions.</li>
  </ul>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>Wide Flow Range for Industrial Use:</strong> Handles high gas volumes up to 10,000 m³/h, ideal for large industrial gas metering in India.</li>

  <li><strong>Available in Multiple Pipe Sizes (DN 50 to DN 200):</strong> Fits standard Indian gas pipeline sizes used in CGD and industrial setups. Flanged connections simplify integration into existing gas distribution networks.</li>

  <li><strong>High Accuracy with Legal Metrology Compliance:</strong> Offers ±1% or ±1.5% accuracy as per industry standards, ensuring billing-grade precision. Can be certified under India's Legal Metrology Act for regulated gas trade.</li>

  <li><strong>Robust Design for Harsh Indian Conditions:</strong> Built to perform in dusty, high-temperature industrial environments across India. Durable aluminum or steel body resists corrosion, vibration, and mechanical stress.</li>

  <li><strong>Pulse Output Compatibility for Smart Gas Monitoring:</strong> Equipped with LF and HF pulse outputs for easy integration with SCADA and AMR systems. Supports India's move toward smart metering under city gas distribution (CGD) projects.</li>

  <li><strong>Digital Metering Ready with IoT Integration:</strong> Compatible with remote telemetry, GPRS/4G, and cloud platforms for real-time tracking. Perfect for smart city, SEZ, and ULB utility gas infrastructure.</li>

  <li><strong>Minimal Pressure Loss for Efficient Gas Flow:</strong> Turbine design minimizes pressure drop, improving energy efficiency in gas supply. Reduces operational costs for Indian industrial and utility gas consumers.</li>

  <li><strong>Low Maintenance & Long Service Life:</strong> Designed for extended operational life with minimal service needs in remote or rural areas. Ideal for Indian oil & gas EPC projects requiring reliable long-term metering.</li>

  <li><strong>MID & EN 12261 Certified for Global and Indian Utility Projects:</strong> International certifications ensure acceptance in Indian PSU, CGD, and multinational tenders. Backed by ISO 9001:2015 manufacturing quality for consistent performance.</li>
</ul>
 )}

          {activeTab === "Technical data" && (
          <ul>
  <li><strong>Sizes:</strong> G 16 up to G 400</li>
  <li><strong>Dimensions:</strong> DN 40, 50, 80, and 100</li>
  <li><strong>Operating Pressure:</strong> Maximum 6 bar</li>
  <li><strong>Accuracy:</strong>
    <ul>
      <li>From 0.2 Q<sub>max</sub> to Q<sub>max</sub>: ±1.5%</li>
      <li>Below 0.2 Q<sub>max</sub>: ±2%</li>
    </ul>
  </li>
  <li><strong>Operation Temperature Range:</strong>
    <ul>
      <li>Gas Temperature: -10°C to +60°C</li>
      <li>Ambient Temperature: -10°C to +60°C</li>
    </ul>
  </li>
  <li><strong>Certification:</strong> Type Examination Certificate FTZÚ 15 ATEX 0172X</li>
  <li><strong>Marking of Equipment:</strong> Ex II -/2G IIB T4</li>
  <li><strong>Installation:</strong> No straight run required</li>
  <li><strong>Maintenance:</strong> Oil-free design for minimal upkeep</li>
  <li><strong>Optional Add-on:</strong> Elcor MID-certified gas volume corrector</li>
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
