import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p24a.jpg";
import img2 from "../../images/p24b.png";
import img3 from "../../images/p24c.png";
import img4 from "../../images/p24d.png";
import "../ProductDetailCustom.css";










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
        <div className="col-lg-6 product-detail-right">
            <p className="text-muted">Rotameters</p>
            <h3 className="fw-semibold">Metal tube Rotameters (Variable Area measurement) </h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;IOTAFLOW Metal Tube Rotameter – High-Pressure Variable Area Flow Meter</li>
              <li className="mb-2">&#9679;Durable metal tube rotameter for process water, steam, compressed air, and chemicals. </li>
              <li className="mb-2">&#9679;Made in India for reliable industrial and utility flow measurement.</li>
              
            
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
  <li><strong>Product Name:</strong> IOTAFLOW Metal Tube Rotameter Series</li>
  <li><strong>Measurement Principle:</strong> Variable area flow measurement using a tapered metal tube and float</li>
  <li><strong>Construction:</strong> Robust SS316 stainless steel body with optional PTFE lining for corrosive media</li>
  <li><strong>Connection Types:</strong> Flanged, sanitary, and tri-clamp options for flexible installation</li>
  <li><strong>Operating Conditions:</strong> Suitable for high pressure (up to 100 bar) and high temperature (up to 300°C)</li>
  <li><strong>Indication & Output:</strong> Magnetic coupling for leak-free indication; optional 4–20 mA transmitters and switch outputs</li>
  <li><strong>Applications:</strong>
    <ul>
      <li><strong>Industrial & Process Industries:</strong>
        <ul>
          <li>Chemical processing — Monitoring flows of acids, bases, solvents, and reagents in chemical plants and laboratories</li>
          <li>Oil and gas sectors — Measuring fuels, lubricants, condensate, and vented gases under high temperature and pressure</li>
          <li>High-pressure offshore systems — Used on oil platforms for drilling mud, hydraulic fluids, and coolant metering</li>
        </ul>
      </li>
      <li><strong>Utilities & Water Treatment:</strong>
        <ul>
          <li>Water and wastewater plants — Measuring raw and treated water, chemical dosing flows, and air/gas lines</li>
          <li>Power generation — Monitoring boiler feedwater, cooling fluid, and steam flows in thermal and renewable stations</li>
        </ul>
      </li>
      <li><strong>Pharmaceutical, Food & Beverage:</strong>
        <ul>
          <li>Pharma manufacturing — Measuring flows of pure water, solvents, and reagents in sterile environments</li>
          <li>Food and beverage industry — Ingredient dosing, syrup and oil flow control, and sanitary process monitoring</li>
        </ul>
      </li>
      <li><strong>Specialty & Advanced Applications:</strong>
        <ul>
          <li>Semiconductor fabrication — Monitoring specialty gases and ultra-pure fluids in cleanrooms and labs</li>
          <li>Research & development — Pilot plants, R&D flow validation, and safe handling of variable or corrosive fluids</li>
          <li>Transport systems — Regulating LNG vapor flow during regasification and loading/unloading operations</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

              </div>
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li><strong>Product Name:</strong> IOTAFLOW Metal Tube Rotameter Series</li>
  <li><strong>Measurement Principle:</strong> Variable area flow measurement using a tapered metal tube and float</li>
  <li><strong>Media Compatibility:</strong> Measures liquids, gases, and steam with high accuracy (±2% FS, optional ±1.6% FS)</li>
  <li><strong>Construction:</strong> Rugged SS316 stainless steel body with optional PTFE lining for corrosive media</li>
  <li><strong>Flow Range:</strong> 0.1 Nm³/h to 450 Nm³/h for air; 30 L/h to 150,000 L/h for water</li>
  <li><strong>Operating Temperature:</strong> Handles fluid temperatures up to 300°C</li>
  <li><strong>Operating Pressure:</strong> Standard up to 40 kg/cm²; optional up to 100 kg/cm²</li>
  <li><strong>Indication System:</strong> Magnetic coupling ensures no direct contact between indicator and process fluid</li>
  <li><strong>Output Options:</strong> Micro-switch, inductive alarm, and 4–20 mA transmitter for control integration</li>
  <li><strong>Housing Protection:</strong> IP65/IP67 rated; optional explosion-proof configuration</li>
  <li><strong>Mounting Lengths:</strong> Standard 250 mm; explosion-proof version 350 mm</li>
  <li><strong>Connection Types:</strong> Flanged, tri-clamp, sanitary, and threaded options available</li>
  <li><strong>Fluid Cleanliness:</strong> Suitable for clean or slightly dirty fluids</li>
  <li><strong>Applications:</strong>
    <ul>
      <li><strong>Industrial & Process Industries:</strong>
        <ul>
          <li>Chemical processing — Acids, bases, solvents, and reagents</li>
          <li>Oil and gas — Fuels, lubricants, condensate, and vented gases</li>
          <li>Offshore systems — Drilling mud, hydraulic fluids, and coolants</li>
        </ul>
      </li>
      <li><strong>Utilities & Water Treatment:</strong>
        <ul>
          <li>Water and wastewater — Raw water, chemical dosing, and air/gas lines</li>
          <li>Power generation — Boiler feedwater, cooling fluids, and steam</li>
        </ul>
      </li>
      <li><strong>Pharmaceutical, Food & Beverage:</strong>
        <ul>
          <li>Pharma — Pure water, solvents, and sterile reagents</li>
          <li>Food and beverage — Ingredient dosing and sanitary flow control</li>
        </ul>
      </li>
      <li><strong>Specialty & Advanced Applications:</strong>
        <ul>
          <li>Semiconductor — Specialty gases and ultra-pure fluids</li>
          <li>R&D — Pilot plants and corrosive fluid validation</li>
          <li>Transport — LNG vapor flow regulation during regasification</li>
        </ul>
      </li>
    </ul>
  </li>
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
      <td>Outer Casing Material</td>
      <td>High-strength aluminium alloy with corrosion-resistant protective coating</td>
    </tr>
    <tr>
      <td>Body Wetted Parts</td>
      <td>SS316 stainless steel, PTFE-lined, or industrial-grade plastic (custom materials available on request)</td>
    </tr>
    <tr>
      <td>Flow Indication Method</td>
      <td>Magnetic coupling transmission to indicator; eliminates direct process contact for enhanced safety</td>
    </tr>
    <tr>
      <td>Connection Types</td>
      <td>Flanged (ANSI/DIN), Tri-Clamp, Sanitary; custom connections available on request</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>Standard: up to 200°C; High-temperature version: up to 300°C</td>
    </tr>
    <tr>
      <td>Housing Protection Rating</td>
      <td>IP65 / IP67 weatherproof; optional explosion-proof enclosure</td>
    </tr>
    <tr>
      <td>Explosion-Proof Classification</td>
      <td>Class I (Groups B, C & D), Class II (Groups E, F & G); NEMA 4, 7, 9 compliant</td>
    </tr>
    <tr>
      <td>Measurement Accuracy</td>
      <td>±2% of full scale; optional high-precision ±1.6% FS</td>
    </tr>
    <tr>
      <td>Maximum Operating Pressure</td>
      <td>Standard: 40 kg/cm² (4 MPa); High-pressure version: up to 100 kg/cm² (10 MPa)</td>
    </tr>
    <tr>
      <td>Output & Alarm Options</td>
      <td>
        Micro-switch (3A/250VAC, 5A/30VDC, 0.4A/125VDC); adjustable inductive alarm switch; 4–20 mA two-wire analog transmitter
      </td>
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
