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
    { img: related1, title: "VFM Vortex Flow Meters", link: "/product-detail/detail16" },
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
            <h3 className="fw-semibold">IVF Insertion Vortex flow meter </h3>
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
  <li><strong>Product Name:</strong> IOTAFLOW Insertion Type Vortex Flow Meter (IVF)</li>
  <li><strong>Measurement Principle:</strong> Kármán vortex shedding for steam, gas, and liquid</li>
  <li><strong>Design:</strong> Insertion type for large-diameter pipelines; no need to cut pipe sections</li>
  <li><strong>Maintenance:</strong> No moving parts; minimal maintenance and long service life</li>
  <li><strong>Installation:</strong> Cost-effective for retrofit projects; suitable for utilities and process industries</li>
  <li><strong>Performance:</strong> Robust construction, negligible pressure drop, and advanced signal processing</li>
  <li><strong>Environment Suitability:</strong> Reliable operation in harsh industrial conditions</li>
  <li><strong>Applications:</strong></li>
  <ul>
    <li><strong>Power Plants & Utilities:</strong> Steam flow monitoring in boilers, turbines, and distribution networks</li>
    <li><strong>Oil & Gas Industry:</strong> Natural gas, flare gas, and compressed gas measurement in upstream/downstream operations</li>
    <li><strong>Chemical & Petrochemical Plants:</strong> Flow measurement of process gases, solvents, and high-temperature steam</li>
    <li><strong>Water & Wastewater Treatment:</strong> Large pipeline flow monitoring for aeration systems and treated water distribution</li>
    <li><strong>Food & Beverage Industry:</strong> Steam and compressed air flow measurement in production and cleaning systems</li>
    <li><strong>Metals, Pulp & Paper, Textiles:</strong> Utility monitoring of steam and condensate in drying and processing operations</li>
  </ul>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>Accurate Measurement:</strong> Suitable for steam, gas, and liquids in large pipelines (≥ DN300)</li>
  <li><strong>No Moving Parts:</strong> Reduces wear, leakage, and long-term maintenance</li>
  <li><strong>Hot-Tap Installation:</strong> Ball valve option allows servicing without shutdown</li>
  <li><strong>Pressure Loss:</strong> Negligible even in very large diameter pipes</li>
  <li><strong>Signal Processing:</strong> Advanced digital processing with vibration compensation for stability</li>
  <li><strong>Communication:</strong> RS485, Modbus, HART, GPRS supported</li>
  <li><strong>Ingress Protection:</strong> Available in IP65/IP67 with optional explosion-proof design</li>
  <li><strong>Calibration:</strong> Custom calibration ensures accuracy across varied operating conditions</li>
  <li><strong>Cost Efficiency:</strong> Economical alternative to inline meters for water, chemical, oil &amp; gas, and utility sectors</li>
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
      <td>Pipe Size Range</td>
      <td>DN350 – DN2000 (large diameter pipelines)</td>
    </tr>
    <tr>
      <td>Measuring Medium</td>
      <td>Steam (saturated &amp; superheated), Air, Water, Industrial Liquids, Aggressive &amp; Process Gases</td>
    </tr>
    <tr>
      <td>Temperature &amp; Pressure Compensation</td>
      <td>Built-in option for high accuracy; insertion mechanism allows maintenance without line shutdown</td>
    </tr>
    <tr>
      <td>Operating Pressure</td>
      <td>Up to 16 bar (higher ratings available on request)</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>Up to 400&deg;C (application dependent)</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>&plusmn;1.5% of reading (with compensation); repeatability &plusmn;0.2%</td>
    </tr>
    <tr>
      <td>Output Signals</td>
      <td>Pulse, 4–20 mA, RS485 / Modbus, HART (optional)</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>24 VDC &plusmn;10% or battery-powered options</td>
    </tr>
    <tr>
      <td>Protection Class</td>
      <td>IP65 / IP68 standard; Flameproof design (CMRI certified) available</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td>Hot-tap insertion with ball valve assembly for uninterrupted service and easy maintenance</td>
    </tr>
    <tr>
      <td>Special Capability</td>
      <td>Negligible pressure drop, vibration-resistant signal processing</td>
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
