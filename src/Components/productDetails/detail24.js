import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p24a.jpg";
import img2 from "../../images/p24b.png";
import img3 from "../../images/p24c.png";
import img4 from "../../images/p24d.png";










import related1 from "../../images/p21a.png";
import related2 from "../../images/p22a.png";
import related3 from "../../images/p23a.png";
import related4 from "../../images/p25a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3,img4];

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
      title: " UF-Biosonic (Ultrasonic Flow Measurement for Biogas)   ",
      link: "/product-detail/detail22",
    },
    {
      img: related3,
      title: "Conical shaped Flow meter  ",
      link: "/product-detail/detail23",
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
            <p className="text-muted">Rotameters</p>
            <h3 className="fw-semibold">Metal tube Rotameters (Variable Area measurement) </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Rugged metal-tube rotameter for precise variable area flow measurement</li>
              <li className="mb-2">&#9679;Works with gas, liquid & steam; ideal for harsh, high-pressure environments</li>
              <li className="mb-2">&#9679;Multiple material, connection & output options; customizable for your needs</li>
              
            
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
  <li>IOTAFLOW Metal Tube Rotameter employs the variable area principle for dependable and accurate flow measurement.</li>
  <li>Engineered for demanding process industry applications involving gas, liquid, or steam.</li>
  <li>Features a robust metal housing and magnetically coupled pointer system, eliminating sealed shaft requirements for enhanced durability.</li>
  <li>Delivers stable performance under high-pressure and high-temperature conditions.</li>
  <li>Modular configuration supports multiple wetted material options: SS316, PTFE, and Plastic.</li>
  <li>Compatible with diverse connection types: flange, tri-clamp, and sanitary fittings.</li>
  <li>Suitable across chemical, food & beverage, and pharmaceutical sectors.</li>
  <li>Available with explosion-proof configurations, signal output (4–20 mA), and switch-based alarm capabilities.</li>
  <li>IP65/IP67-rated housing supports deployment in both general-purpose and hazardous environments.</li>
  <li>Designed for applications where accuracy, flexibility, and resilience are critical.</li>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
<ul>
 
</ul>
 )}

          {activeTab === "Technical data" && (
<ul>
  <li><strong>Material:</strong> Aluminum alloy case with paint</li>
  <li><strong>Body Wetted Parts:</strong> SS316, PTFE lined, plastic (others on request)</li>
  <li><strong>Indication:</strong> Magnetic coupling (non-sealed)</li>
  <li><strong>Connection Types:</strong> Flange type, Trip Clamp, Sanitary (others on request)</li>
  <li><strong>Temperature:</strong> 200℃ (300℃ optional)</li>
  <li><strong>Housing Protection:</strong> IP65/IP67 or Explosion Proof</li>
  <li><strong>Explosion Proof Classification:</strong> 
    <ul>
      <li>CLASS I, GROUPS B, C & D</li>
      <li>CLASS II, GROUPS E, F & G</li>
      <li>NEMA 4, 7, 9</li>
    </ul>
  </li>
  <li><strong>Accuracy:</strong> ±2% FS (±1.6% FS optional)</li>
  <li><strong>Maximum Pressure:</strong> 40 kg/cm² standard (option up to 100 kg/cm²)</li>
  <li><strong>Optional Switches:</strong>
    <ul>
      <li>Micro Switch: 3A/250VAC, 5A/30VDC, 0.4A/125VDC</li>
      <li>Adjustable inductive alarm switch</li>
      <li>4–20 mA two-wire analog output</li>
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
