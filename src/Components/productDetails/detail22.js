import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p22a.png";
import img2 from "../../images/p22b.png";
import img3 from "../../images/p22c.png";
import "../ProductDetailCustom.css";









import related1 from "../../images/p21a.png";
import related2 from "../../images/p23a.png";
import related3 from "../../images/p24a.jpg";
import related4 from "../../images/p25a.png";

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
    { img: related1, title: "GasPro RPD Gas Meter", link: "/product-detail/detail21" },
    {
      img: related2,
      title: " Conical shaped Flow meter   ",
      link: "/product-detail/detail23",
    },
    {
      img: related3,
      title: "Metal tube Rotameters (Variable Area measurement) ",
      link: "/product-detail/detail24",
    },
    {
      img: related4,
      title: " Acrylic / Glass Tube Rotameters ",
      link: "/product-detail/detail25",
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
            <p className="text-muted">Gas Flow Meters</p>
            <h3 className="fw-semibold">UF-Biosonic (Ultrasonic Flow Measurement for Biogas) </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;UF-BioSonic – Ultrasonic Flow Meter for Biogas & Methane Measurement</li>
              <li className="mb-2">&#9679;UF-BioSonic biogas flow meter for renewable energy projects, waste-to-energy plants, digesters & wastewater treatment.</li>
              <li className="mb-2">&#9679; Accurate, durable & maintenance-free.</li>
              
            
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
  <li><strong>Product Name:</strong> UF-BioSonic Series Ultrasonic Biogas Flow Meter</li>
  <li><strong>Measurement Principle:</strong> Ultrasonic transit-time technology for accurate and stable biogas flow measurement</li>
  <li><strong>Gas Compatibility:</strong> Wet and corrosive biogas with high H₂S and CO₂ content</li>
  <li><strong>Methane Analysis:</strong> Integrated CH₄ content measurement (30–100% Vol) for combined flow and composition monitoring</li>
  <li><strong>Design:</strong> No moving parts, zero pressure drop, maintenance-free operation</li>
  <li><strong>Construction:</strong> Robust stainless steel body with optional temperature and pressure compensation</li>
  <li><strong>Protection:</strong> IP65-rated for harsh environments</li>
  <li><strong>Outputs:</strong> RS485 and 4–20 mA signal interfaces</li>
  <li><strong>Power Supply:</strong> External power or long-life battery options</li>
  <li><strong>Applications:</strong></li>
  <ul>
    <li><strong>Landfill Gas:</strong> Measurement for energy recovery projects</li>
    <li><strong>Wastewater Treatment:</strong> Biogas flow monitoring in municipal and industrial plants</li>
    <li><strong>Anaerobic Digesters:</strong> Flow tracking in organic waste digestion systems</li>
    <li><strong>Bio-Methane Plants:</strong> Renewable gas injection into utility grids</li>
    <li><strong>CHP Units:</strong> Performance monitoring and efficiency control for biogas engines</li>
    <li><strong>Biogas Flares:</strong> Compliance and emission reporting</li>
    <li><strong>Carbon Projects:</strong> CDM and carbon credit initiatives requiring precise gas quantification</li>
    <li><strong>Agricultural Biogas:</strong> Systems for livestock waste and crop residue digestion</li>
  </ul>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
           
<ul>
  <li><strong>Measurement Principle:</strong> Ultrasonic transit-time technology with no moving parts and negligible pressure drop</li>
  <li><strong>Dual Functionality:</strong> Simultaneous flow rate and methane concentration measurement in one device</li>
  <li><strong>Volumetric Correction:</strong> Optional temperature and pressure compensation for enhanced accuracy</li>
  <li><strong>Flow Range:</strong> Wide operating range with high turndown ratio for low to high flow conditions</li>
  <li><strong>Gas Compatibility:</strong> Resistant to H₂S corrosion and moisture; performs reliably with wet, dirty biogas</li>
  <li><strong>Design Variant:</strong> UF-BioSonic 2 model includes bypass configuration to reduce condensate impact and extend meter life</li>
  <li><strong>Power Options:</strong> Long-life industrial lithium battery (More than 5 years) or external power supply</li>
  <li><strong>Installation:</strong> Maintenance-free operation with simple setup; no pipeline interruption required</li>
  <li><strong>Communication:</strong> RS485 Modbus and 4–20 mA analog output for integration with control systems</li>
  <li><strong>Construction:</strong> Durable stainless steel body suitable for industrial and outdoor environments</li>
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
      <td>DN32 to DN300</td>
    </tr>
    <tr>
      <td>Measurement Accuracy</td>
      <td>≤ ±1.5%</td>
    </tr>
    <tr>
      <td>Measured Medium</td>
      <td>Biogas and bio-methane (wet or dry, high H₂S tolerance)</td>
    </tr>
    <tr>
      <td>Fluid Temperature Range</td>
      <td>−20°C to +40°C</td>
    </tr>
    <tr>
      <td>Maximum Operating Pressure</td>
      <td>Up to 2 bar</td>
    </tr>
    <tr>
      <td>Power Supply Options</td>
      <td>Long-life lithium battery (maintenance-free) or external 24VDC ±10%</td>
    </tr>
    <tr>
      <td>Communication Outputs</td>
      <td>RS485 Modbus RTU, 4–20 mA analog</td>
    </tr>
    <tr>
      <td>Ingress Protection</td>
      <td>IP65 – weatherproof, dust-tight, and suitable for outdoor use</td>
    </tr>
    <tr>
      <td>Construction</td>
      <td>Industrial-grade stainless steel housing with corrosion-resistant internals</td>
    </tr>
    <tr>
      <td>Installation Type</td>
      <td>In-line flange connection</td>
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
