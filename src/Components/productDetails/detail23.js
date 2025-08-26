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
              <li className="mb-2">&#9679;Innovative cone-style flow meter for tough gas, steam & biogas conditions</li>
              <li className="mb-2">&#9679;High accuracy, low pressure loss & excellent performance in dusty or corrosive media</li>
              <li className="mb-2">&#9679;Ideal for compact installations across energy, steel, mining & process industries</li>
              
            
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
  <li><strong>Product Name:</strong> IOTAFLOW CSF – Conical Shaped Flow Meter</li>
  <li><strong>Measurement Principle:</strong> Differential pressure flow measurement using a centrally suspended cone</li>
  <li><strong>Flow Conditioning:</strong> Cone reshapes velocity profile for enhanced accuracy, stable signal output, and minimal pressure drop</li>
  <li><strong>Fluid Compatibility:</strong> Suitable for Biogas, CBM, Steam (saturated/superheated), Dust-Laden Air, Coke Oven Gas, and multi-component gas mixtures</li>
  <li><strong>Performance:</strong> High repeatability and reliability in fluctuating or low-pressure conditions</li>
  <li><strong>Installation:</strong> Compact footprint for tight industrial spaces; low-maintenance design with long service life</li>
  <li><strong>Application Areas:</strong>
    <ul>
      <li><strong>Biogas:</strong> Handles variable, low-pressure flows with high moisture and particulates; ideal for digesters and renewable gas systems</li>
      <li><strong>Coke Oven Gas:</strong> Withstands corrosive and dusty by-products in steel plants; stable under fluctuating conditions</li>
      <li><strong>Coal Bed Methane (CBM):</strong> Suitable for low-pressure gas extraction and upstream energy monitoring</li>
      <li><strong>Gas Mixtures:</strong> Maintains high accuracy across blended or multi-component streams with wide turndown</li>
      <li><strong>Dust-Laden Air:</strong> Accurate in particulate-laden environments; ideal for ventilation, exhaust, and mining systems</li>
      <li><strong>Steam:</strong> Reduces noise and head loss in saturated and superheated steam lines; suitable for power plants and boiler monitoring</li>
    </ul>
  </li>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li><strong>Accuracy & Repeatability:</strong> ±1.0% accuracy and ±0.5% repeatability for consistent performance in harsh and variable flow environments</li>
  <li><strong>Turndown Ratio:</strong> Wide rangeability up to 10:1; superior to conventional orifice meters (typically 3:1)</li>
  <li><strong>Signal Quality:</strong> High-frequency, low-noise signal ideal for gas and steam applications requiring stable output</li>
  <li><strong>Self-Conditioning Design:</strong> Integrated cone eliminates need for long straight piping; requires only 0–3D upstream and 0–1D downstream</li>
  <li><strong>Pressure Drop:</strong> Low head loss design improves system efficiency and reduces energy costs</li>
  <li><strong>Material Options:</strong> Corrosion- and heat-resistant construction in SS316, SS304, Duplex, Hastelloy, and Carbon Steel</li>
  <li><strong>Sizing & Connections:</strong> Custom sizes from 0.5" to 120"+; available in flanged, threaded, or welded-end configurations</li>
  <li><strong>Instrumentation Compatibility:</strong> Integrates with digital indicators, totalizers, 3-way manifolds, and differential pressure transmitters</li>
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
      <td>Pipe Range</td>
      <td>DN10 to DN3000 or larger</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>±1% for Total System</td>
    </tr>
    <tr>
      <td>Turn Down</td>
      <td>10:1 with compact installation</td>
    </tr>
    <tr>
      <td>Body Material</td>
      <td>Duplex 2205, 304, or 316 stainless steel, Hastelloy C-276, 254 SMO, carbon steels; special materials on request</td>
    </tr>
    <tr>
      <td>End Fittings</td>
      <td>Flanged, threaded, hub or weld-end standard; others on request</td>
    </tr>
    <tr>
      <td>RTD Sensor Type</td>
      <td>PT-100, thin film</td>
    </tr>
    <tr>
      <td>RTD Range</td>
      <td>−58° to 752°F (−50° to 400°C)</td>
    </tr>
    <tr>
      <td>Manifold Configuration</td>
      <td>3-valve</td>
    </tr>
    <tr>
      <td>dP Transmitter Housing</td>
      <td>F30 Aluminum</td>
    </tr>
    <tr>
      <td>dP Transmitter Membrane</td>
      <td>316L</td>
    </tr>
    <tr>
      <td>dP Transmitter Enclosure</td>
      <td>NEMA 4X/6P, IP66/67</td>
    </tr>
    <tr>
      <td>Electrical Connections</td>
      <td>NPT 1/2 thread</td>
    </tr>
    <tr>
      <td>Flow Computer Output</td>
      <td>4–20 mA, isolated pulse</td>
    </tr>
    <tr>
      <td>Pressure Range</td>
      <td>Up to 1500 psi (100 bar)</td>
    </tr>
    <tr>
      <td>Temperature Range</td>
      <td>Up to 1,600°F (870°C)</td>
    </tr>
    <tr>
      <td>Applications</td>
      <td>Biogas, Coke Oven Gas, Coal Bed Methane (CBM), Gas Mixtures, Air (with Dust), Steam</td>
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
