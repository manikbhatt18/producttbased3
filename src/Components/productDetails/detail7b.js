import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p7a.jpg";
import img2 from "../../images/p7b.png";
import img3 from "../../images/p7c.png";
import img4 from "../../images/p7d.png";
import "../ProductDetailCustom.css";



import related1 from "../../images/p6a.png";
import related2 from "../../images/p8a.png";
import related3 from "../../images/sja.png";
import related4 from "../../images/p10a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3,img4];

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
    { img: related1, title: "Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes", link: "/product-detail/detail6" },
    {
      img: related2,
      title: "CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters",
      link: "/product-detail/detail8",
    },
    {
      img: related3,
      title: "Smart Single Jet Water Meters",
      link: "/product-detail/detail9",
    },
    {
      img: related4,
      title: "Woltmann Water Meters, Aqua-Re Series",
      link: "/product-detail/detail10",
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
            <p className="text-muted">Electromagnetic Flow Meter</p>
            <h3 className="fw-semibold">MF-TER Electromagnetic Flow Meter</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Flameproof, Ex-Proof Flow Meter for Hazardous Areas</li>
              <li className="mb-2">&#9679;High Accuracy</li>
              <li className="mb-2">&#9679;CGWA Compliant</li>
          
            
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
    The <b>MF-TER Electromagnetic Flow Meter</b> is a trusted, economical solution designed for water, wastewater, and industrial flow measurement where long-term accuracy, reliability, and regulatory compliance are required.  
    It offers a compact transmitter with easy integration into SCADA, telemetry, and data logging systems, making it suitable for continuous monitoring under <b>CGWA/CPCB/SPCB guidelines</b>.
  </p>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <>
         <ul>
    <li>Cost-effective electromagnetic flow meter with robust performance</li>
    <li>Sizes available from DN10 to DN1200 mm</li>
    <li>Accuracy: ±0.5% of reading</li>
    <li>Wide flow range with velocity from 0.3 to 10 m/s</li>
    <li>Suitable for water, wastewater, slurry, and chemical applications</li>
    <li>Electrode options: SS316L, Hastelloy, Titanium, Tantalum</li>
    <li>Liner options: Rubber, PTFE, Ebonite</li>
    <li>Outputs: 4–20 mA, RS485, Modbus RTU, Pulse</li>
    <li>Low power consumption, battery-powered option available</li>
    <li>Ingress protection: IP65/IP68</li>
    <li>Complies with CGWA real-time flow reporting standards</li>
  </ul>

  <p><b>Applications</b></p>
  <ul>
    <li>Effluent monitoring in STP/ETP discharge lines</li>
    <li>Industrial process water and slurry flow measurement</li>
    <li>Municipal water supply networks</li>
    <li>Agricultural irrigation channels and pipelines</li>
    <li>Utility flow auditing and compliance monitoring</li>
  </ul>
  </>
          )}

          {activeTab === "Technical data" && (
 <table>
    <tbody>
      <tr>
        <td><b>Parameter</b></td>
        <td><b>Value</b></td>
      </tr>
      <tr>
        <td>Pipe Size Range</td>
        <td>DN10 to DN1200 mm</td>
      </tr>
      <tr>
        <td>Nominal Pressure</td>
        <td>0.6 MPa to 1.6 MPa</td>
      </tr>
      <tr>
        <td>Accuracy</td>
        <td>±0.5% of reading</td>
      </tr>
      <tr>
        <td>Velocity Range</td>
        <td>0.3 to 10 m/s</td>
      </tr>
      <tr>
        <td>Liner Materials</td>
        <td>PTFE, Rubber, Ebonite</td>
      </tr>
      <tr>
        <td>Electrode Materials</td>
        <td>SS316L, Hastelloy, Titanium, Tantalum</td>
      </tr>
      <tr>
        <td>Output Signals</td>
        <td>4–20 mA, Pulse, RS485, Modbus RTU</td>
      </tr>
      <tr>
        <td>Ingress Protection</td>
        <td>IP65 / IP68 (optional)</td>
      </tr>
      <tr>
        <td>Power Supply</td>
        <td>24V DC, Lithium Battery option</td>
      </tr>
      <tr>
        <td>Certification</td>
        <td>ISO, CE, CGWA compliant</td>
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
