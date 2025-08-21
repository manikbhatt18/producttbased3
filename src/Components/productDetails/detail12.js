import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p12a.png";
import img2 from "../../images/p12b.png";
import img3 from "../../images/p12c.png";
import img4 from "../../images/p12d.png";
import img5 from "../../images/p12e.png";
import img6 from "../../images/p12f.png";
import img7 from "../../images/p12g.png";






import related1 from "../../images/p11a.jpg";
import related2 from "../../images/p13.png";
import related3 from "../../images/p14a.png";
import related4 from "../../images/p15a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2,img3,img4, img5,img6,img7];

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
      title: " Micro Stream Flow Sensor OFZ Series ",
      link: "/product-detail/detail13",
    },
    {
      img: related3,
      title: "  TRX Ultrasonic Air Meters ",
      link: "/product-detail/detail14",
    },
    {
      img: related4,
      title: " Thermal Mass Flow Sensors",
      link: "/product-detail/detail15",
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
            <p className="text-muted">Positive Displacement Oil Meters</p>
            <h3 className="fw-semibold">Oval Gear Flow Meters (OGM)</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Precise flow measurement for high-viscosity and high-temperature fluids</li>
              <li className="mb-2">&#9679;Ideal for oils, chemicals, and industrial liquids with up to ±0.2% accuracy</li>
              <li className="mb-2">&#9679;Built for tough environments with multiple material and output options</li>
              
            
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
  <li><strong>IOTAFLOW Oval Gear Flow Meter:</strong> High-precision positive displacement flow meter engineered for accurate measurement of viscous, non-conductive, flammable, and high-value liquids, including solvents, alcohols, oils, and chemicals</li>
  <li><strong>Measurement Principle:</strong> Dual oval gear rotors provide direct volumetric flow measurement, unaffected by changes in fluid conductivity, temperature, or pulsation</li>
  <li><strong>Manufacturer:</strong> IOTAFLOW Systems Pvt. Ltd.</li>
  <li><strong>Industrial Use:</strong> Ideal for batching, dosing, transfer, and process control across a wide range of applications</li>
  <li><strong>Size Range:</strong> DN10 to DN200</li>
  <li><strong>Accuracy:</strong> Repeatable up to ±0.2%</li>
  <li><strong>Viscosity Range:</strong> Up to 5,000 cP</li>
  <li><strong>Pressure Handling:</strong> Up to 6.4 MPa</li>
  <li><strong>Applications:</strong>
    <ul>
      <li>Oil metering – diesel, heavy oil, light oil, lubrication systems</li>
      <li>Solvent and alcohol measurement in pharmaceutical, distilleries, and chemical industries</li>
      <li>Paints, adhesives, and resins in packaging and industrial coating</li>
      <li>Chemical dosing and batching systems</li>
      <li>DEF/AdBlue and non-conductive fluid applications</li>
      <li>Food-grade viscous liquid metering</li>
      <li>Heat transfer and hydraulic fluids in OEM machinery and skids</li>
      <li>Explosion-prone or Ex-proof zones needing positive displacement metering</li>
    </ul>
  </li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li><strong>Technology:</strong> Positive displacement oval gear – unaffected by fluid conductivity</li>
  <li><strong>Measurement:</strong> Direct volumetric measurement – no flow conditioning or straight pipe required</li>
  <li><strong>Accuracy:</strong> Up to ±0.2% with high repeatability</li>
  <li><strong>Viscosity Range:</strong> 2 to 5,000 cP (compatible with heavy oil, resin, adhesives)</li>
  <li><strong>Flow Rate Range:</strong> 0.04 to 340 m³/h (size-dependent)</li>
  <li><strong>Temperature Range:</strong> –20°C to +280°C</li>
  <li><strong>Pressure Rating:</strong> Up to 6.4 MPa (64 bar)</li>
  <li><strong>Material Options:</strong> Cast Iron, Cast Steel, SS304, SS316</li>
  <li><strong>Size Availability:</strong> DN10 to DN200</li>
  <li><strong>Output Compatibility:</strong> Pulse, 4–20 mA, RS485, batching controllers</li>
  <li><strong>Display Options:</strong> Mechanical, Digital Totalizer, Rate + Total, MCU Controller</li>
  <li><strong>Enclosure Ratings:</strong> IP65, IP67, IP68; NEMA 4X; Ex-Proof options</li>
  <li><strong>Compliance:</strong> CGWA guidelines for groundwater flow reporting</li>
  <li><strong>Connection Standards:</strong> Flanged PN16, PN25, PN40, PN64 or ANSI #150/#300</li>
</ul>
          )}

          {activeTab === "Technical data" && (
          <table>
  <thead>
    <tr>
      <th><strong>Parameter</strong></th>
      <th><strong>Specification</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pipe Size Range</td>
      <td>DN10 to DN200</td>
    </tr>
    <tr>
      <td>Application Type</td>
      <td>High temperature and high viscosity fluid measurement</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>±0.5% (standard) or ±0.2% (high-precision option)</td>
    </tr>
    <tr>
      <td>Viscosity Handling</td>
      <td>Up to 5,000 cP (centipoise)</td>
    </tr>
    <tr>
      <td>Flow Range</td>
      <td>0.04 to 340 m³/h (18 to 37,396 GPM)</td>
    </tr>
    <tr>
      <td>Working Temperature Range</td>
      <td>–20°C to +280°C</td>
    </tr>
    <tr>
      <td>Material Options</td>
      <td>Cast Iron, Cast Steel, SS304, SS316 (based on application)</td>
    </tr>
    <tr>
      <td>Display / Control Options</td>
      <td>LCD Totalizer, Local Transmitter, MCU-based Flow Controller</td>
    </tr>
    <tr>
      <td>Output Signals</td>
      <td>Pulse, 4–20 mA, RS485 Modbus (optional)</td>
    </tr>
    <tr>
      <td>Mounting Orientation</td>
      <td>Horizontal or vertical; no upstream/downstream pipe length required</td>
    </tr>
    <tr>
      <td>Enclosure Protection</td>
      <td>IP65, IP67, IP68; Flameproof/Ex-Proof options available</td>
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
