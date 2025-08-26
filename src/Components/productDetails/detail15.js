import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p15a.png";
import img2 from "../../images/p15b.png";
import img3 from "../../images/p15c.png";
import img4 from "../../images/p15d.png";
import img5 from "../../images/p15e.png";
import img6 from "../../images/p15f.png";
import img7 from "../../images/p15g.png";
import img8 from "../../images/p15h.png";
import img9 from "../../images/p15i.png";
import img10 from "../../images/p15j.png";
import img11 from "../../images/p15k.png";
import img12 from "../../images/p15l.png";
import img13 from "../../images/p15m.png";
import img14 from "../../images/p15n.png";
import img15 from "../../images/p15o.png";
import img16 from "../../images/p15p.png";
import img17 from "../../images/p15q.png";
import img18 from "../../images/p15r.jpg";
import img19 from "../../images/p15s.jpg";
import img20 from "../../images/p15t.jpg";
import img21 from "../../images/p15u.jpg";
import img22 from "../../images/p15v.png";
import img23 from "../../images/p15w.png";
import img24 from "../../images/p15x.png";








import related1 from "../../images/p11a.jpg";
import related2 from "../../images/p12a.png";
import related3 from "../../images/p13.png";
import related4 from "../../images/p16a.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24];

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
    { img: related1, title: "Contoil / RPD Flow Meters", link: "/product-detail/detail11" },
    {
      img: related2,
      title: " Oval Gear Flow Meters (OGM) ",
      link: "/product-detail/detail12",
    },
    {
      img: related3,
      title: " Micro Stream Flow Sensor OFZ Series",
      link: "/product-detail/detail13",
    },
    {
      img: related4,
      title: "VFM Vortex Flow Meters",
      link: "/product-detail/detail16",
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
            <p className="text-muted">Air Flow Meters</p>
            <h3 className="fw-semibold">TRX Ultrasonic Air Meters </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Accurate flow monitoring for gases like air, nitrogen, and biogas</li>
              <li className="mb-2">&#9679;Insertion design with optional high-temp and ATEX variants</li>
              <li className="mb-2">&#9679;Analog and pulse outputs for easy system integration</li>
              
            
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
  <li>The Thermal Mass Flow Sensor (Insertion Type) is a high-precision solution for direct gas flow measurement in pipelines.</li>
  <li>Ideal for gases including compressed air, nitrogen, oxygen, biogas, and specialty gases.</li>
  <li>Designed for easy insertion into existing systems.</li>
  <li>Supports analog and pulse outputs for real-time monitoring.</li>
  <li>Available in robust build options for high pressure (up to 40 bar) and high temperature (up to 350°C).</li>
  <li>ATEX-certified for use in hazardous environments.</li>
  <li>Perfect for industrial gas monitoring, energy audits, and HVAC optimization.</li>
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
  <li>Probe Length: Upto 600mm (Special Length 1000mm On Request)</li>
  <li>Pressure Range: 0-16 Bar (40 Bar Optional)</li>
  <li>Velocity: Upto 220m/s</li>
  <li>Accuracy: High precision (±1% of measured value + 0.4% fmr; min. 0.08m/s)</li>
  <li>Analogue outputs for temperature and flow rate: 0...10 V / 4...20 mA (protected against short circuits) / Pulse</li>
  <li>Operating temperature: 20...+120°C (350°C High temp Optional)</li>
  <li>ATEX category II 3G Ex nA ic IIC T4 Gc (On request)</li>
  <li>Measurable Fluids: Compressed Air, Nitrogen, Oxygen, Biogas, Natural Gas & other Speciality Gasses</li>
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
