import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p10a.png";
import img2 from "../../images/p10b.png";
import img3 from "../../images/p10c.png";





import related1 from "../../images/p6a.png";
import related2 from "../../images/p7a.jpg";
import related3 from "../../images/p8a.png";
import related4 from "../../images/p11a.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3];

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
      title: " Electromagnetic Flow Meter (EMF Standard)",
      link: "/product-detail/detail7",
    },
    {
      img: related3,
      title: "  CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters",
      link: "/product-detail/detail8",
    },
    {
      img: related4,
      title: " Contoil / RPD Flow Meters",
      link: "/product-detail/detail11",
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
            <h3 className="fw-semibold"> Woltmann Water Meters, Turbine Type </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Apator Woltmann Flow Meter – For High-Capacity Water Measurement</li>
              <li className="mb-2">&#9679;Apator Woltmann Flow Meters for bulk water metering with IP68 protection, wide flow range.</li>
              <li className="mb-2">&#9679;, AMR compatibility & precision for industrial and municipal use.</li>
            
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
                <section>
  <p>
    The <strong>Apator Woltmann Flow Meter series</strong> – MWN Nubis, MWN 130 Nubis, and MWN NKOP – are precision-engineered horizontal-axis propeller meters/turbine flow meters for high-capacity water measurement in industrial water supply, municipal distribution networks, irrigation systems, and commercial water management.
  </p>
  <p>
    Designed for <strong>cold water (up to 50°C)</strong> and <strong>hot water (up to 130°C)</strong>, these meters offer exceptional accuracy, long-term stability, and compatibility with <strong>AMR and wireless communication modules</strong>. Built with <strong>hydrodynamically balanced rotors</strong>, durable materials, and <strong>IP65/IP68-rated protection</strong>, they ensure reliable performance even under harsh environmental and electromagnetic conditions.
  </p>
</section>

<ul>
  <li><strong>Target Applications:</strong>
    <ul>
      <li>Irrigation and agricultural water distribution</li>
      <li>Industrial utility water measurement</li>
      <li>District metering areas (DMA) in water supply networks</li>
      <li>High-volume municipal water supplies</li>
      <li>Process water monitoring in power plants and manufacturing</li>
      <li>Hot water and condensate metering (130°C rated version)</li>
      <li>Water consumption tracking for commercial complexes, residential townships, and factories</li>
      <li>Flow monitoring in CGWA-regulated installations (when integrated with data loggers & telemetry)</li>
    </ul>
  </li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
           <ul>
  <li><strong>Type:</strong> Horizontal Woltmann-type turbine flow meter</li>
  <li><strong>Register:</strong> Magnetic transmission with super dry IP68-rated register</li>
  <li><strong>Size Range:</strong> DN50 to DN500 (flanged connection)</li>
  <li><strong>Maintenance:</strong> Removable measuring mechanism for quick servicing</li>
  <li><strong>Body Material:</strong> Epoxy-coated cast iron for anti-corrosion protection</li>
  <li><strong>Operating Temperature:</strong> Cold water (50°C) and hot water versions (90°C & 130°C)</li>
  <li><strong>Output Options:</strong>
    <ul>
      <li>Pulse output (standard)</li>
      <li>Relay output (optional)</li>
      <li>Analog output (4–20 mA) (optional)</li>
      <li>RS485 communication (optional)</li>
      <li>Battery-operated digital version (1.5–2 year battery life)</li>
    </ul>
  </li>
  <li><strong>Flow Totalizer:</strong> Includes resettable and non-resettable functions</li>
  <li><strong>Hydraulics:</strong> Low pressure loss, suitable for high-flow systems</li>
  <li><strong>Register Orientation:</strong> 360° rotating register for easy reading in any position</li>
  <li><strong>System Compatibility:</strong> Compatible with AMR/AMI systems</li>
  <li><strong>Standards Compliance:</strong> EN 14154 and MID Directive 2004/22/EC</li>
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
      <td>Product</td>
      <td>Turbine Mechanical Water Meter with Magnetic Transmission</td>
    </tr>
    <tr>
      <td>Pipe Range</td>
      <td>DN50 – DN500, Removable mechanism, 360° Rotatable</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>Class B as per ISO 4064</td>
    </tr>
    <tr>
      <td>Suitable for</td>
      <td>Cold Water (50°C) / Hot Water (90°C & 130°C versions)</td>
    </tr>
    <tr>
      <td>Body Material</td>
      <td>Cast Iron or Stainless Steel with epoxy outer coating</td>
    </tr>
    <tr>
      <td>Display Parameters</td>
      <td>Flow rate / Total / Reset-able total</td>
    </tr>
    <tr>
      <td>Relay Output</td>
      <td>On flow rate</td>
    </tr>
    <tr>
      <td>Outputs</td>
      <td>Pulse output for AMR communication, Analog (4–20 mA) output</td>
    </tr>
    <tr>
      <td>Digital Option Input</td>
      <td>24 VDC</td>
    </tr>
    <tr>
      <td>Battery</td>
      <td>In-built battery (life 1.5 – 2 years) (Optional)</td>
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
