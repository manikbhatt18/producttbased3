import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p23a.png";
import img2 from "../../images/p23b.png";
import img3 from "../../images/p23c.png";









import related1 from "../../images/p21a.png";
import related2 from "../../images/p22a.png";
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
      title: " UF-Biosonic (Ultrasonic Flow Measurement for Biogas)   ",
      link: "/product-detail/detail22",
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
            <h3 className="fw-semibold">Conical shaped Flow meter</h3>
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
  <li><strong>Product Name:</strong> IOTAFLOW CSF – Conical Shaped Flow Meter</li>
  
  <li><strong>Application:</strong> Accurate flow measurement for complex gas and steam applications</li>
  
  <li><strong>Design:</strong> Centrally suspended cone reshapes velocity profile for improved signal stability and minimal pressure drop</li>
  
  <li><strong>Features:</strong>
    <ul>
      <li>High-performance differential pressure technology</li>
      <li>Low-maintenance and long service life</li>
      <li>Suitable for compact installations in harsh industrial conditions</li>
    </ul>
  </li>

  <li><strong>Application-Specific Use Cases:</strong>
    <ul>
      <li><strong>Biogas:</strong> Handles variable low-pressure flow with moisture and particulates; ideal for digesters and renewable gas systems</li>
      <li><strong>Coke Oven Gas:</strong> Resistant to corrosive, dusty environments typical in steel plants</li>
      <li><strong>Coal Bed Methane (CBM):</strong> Designed for low-pressure upstream extraction and monitoring</li>
      <li><strong>Gas Mixtures:</strong> Maintains accuracy in blended or multi-component streams with wide turndown</li>
      <li><strong>Dust-Laden Air:</strong> Accurate measurement in air with particulates; perfect for ventilation, exhaust, and mining</li>
      <li><strong>Steam (Saturated/Superheated):</strong> Minimizes noise and head loss in steam lines; ideal for boilers and power plants</li>
    </ul>
  </li>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li><strong>Product Name:</strong> IOTAFLOW CSF – Conical Shaped Flow Meter</li>
  
  <li><strong>Application:</strong> Accurate flow measurement for complex gas and steam applications</li>
  
  <li><strong>Design:</strong> Centrally suspended cone reshapes velocity profile for improved signal stability and minimal pressure drop</li>
  
  <li><strong>Features:</strong>
    <ul>
      <li>High-performance differential pressure technology</li>
      <li>Low-maintenance and long service life</li>
      <li>Suitable for compact installations in harsh industrial conditions</li>
    </ul>
  </li>

  <li><strong>Application-Specific Use Cases:</strong>
    <ul>
      <li><strong>Biogas:</strong> Handles variable low-pressure flow with moisture and particulates; ideal for digesters and renewable gas systems</li>
      <li><strong>Coke Oven Gas:</strong> Resistant to corrosive, dusty environments typical in steel plants</li>
      <li><strong>Coal Bed Methane (CBM):</strong> Designed for low-pressure upstream extraction and monitoring</li>
      <li><strong>Gas Mixtures:</strong> Maintains accuracy in blended or multi-component streams with wide turndown</li>
      <li><strong>Dust-Laden Air:</strong> Accurate measurement in air with particulates; perfect for ventilation, exhaust, and mining</li>
      <li><strong>Steam (Saturated/Superheated):</strong> Minimizes noise and head loss in steam lines; ideal for boilers and power plants</li>
    </ul>
  </li>
</ul>
 )}

          {activeTab === "Technical data" && (
<ul>
  <li><strong>Pipe Range:</strong> DN10 to DN3000 or larger</li>
  <li><strong>System Accuracy:</strong> ±1% for total system</li>
  <li><strong>Turn Down Ratio:</strong> 10:1 with compact installation</li>
  <li><strong>Body Material Options:</strong> 
    <ul>
      <li>Duplex 2205</li>
      <li>304 or 316 Stainless Steel</li>
      <li>Hastelloy C-276</li>
      <li>254 SMO</li>
      <li>Carbon steels</li>
      <li>Special materials available on request</li>
    </ul>
  </li>
  <li><strong>End Fittings:</strong> Flanged, threaded, hub, or weld-end (custom options available)</li>
  <li><strong>RTD Sensor:</strong>
    <ul>
      <li>Type: PT-100 thin film</li>
      <li>Range: -58°F to 752°F (-50°C to 400°C)</li>
    </ul>
  </li>
  <li><strong>Manifold Configuration:</strong> 3-Valve</li>
  <li><strong>dP Transmitter:</strong>
    <ul>
      <li>Housing: F30 Aluminum</li>
      <li>Membrane: 316L stainless steel</li>
      <li>Enclosure Rating: NEMA 4X/6P, IP66/67</li>
      <li>Electrical Connections: NPT 1/2" thread</li>
    </ul>
  </li>
  <li><strong>Flow Computer Output:</strong> 4–20 mA and isolated pulse</li>
  <li><strong>Pressure Range:</strong> Up to 1500 psi (100 bar)</li>
  <li><strong>Temperature Range:</strong> Up to 1600°F (870°C)</li>
  <li><strong>Applications:</strong>
    <ul>
      <li>Biogas</li>
      <li>Coke Oven Gas</li>
      <li>Coal Bed Methane (CBM)</li>
      <li>Gas Mixtures</li>
      <li>Dust-Laden Air</li>
      <li>Steam</li>
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
