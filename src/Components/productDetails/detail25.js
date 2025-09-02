import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p25a.png";
import img2 from "../../images/p25b.png";
import img3 from "../../images/p25c.png";
import img4 from "../../images/p25d.png";
import img5 from "../../images/p25e.png";
import img6 from "../../images/p25f.png";
import img7 from "../../images/p25g.png";
import "../ProductDetailCustom.css";



import related1 from "../../images/p17a.png";
import related2 from "../../images/p22a.png";
import related3 from "../../images/p23a.png";
import related4 from "../../images/p1a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1,img2,img3,img4,img5,img6,img7];

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
    { img: related1, title: "Ultrasonic BTU meter (Heat & Energy measurement) ", link: "/product-detail/detail17" },
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
      title: " Domestic Ultrasonic Flow Meters ",
      link: "/product.js",
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
            <p className="text-muted">Rotameters</p>
            <h3 className="fw-semibold">Acrylic / Glass Tube Rotameters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Compact, economical rotameter for air, water, oil, gas & solvents</li>
              <li className="mb-2">&#9679;Acrylic or glass tube options with in-line or panel mounting</li>
              <li className="mb-2">&#9679;Clear laser-engraved scale for accurate, easy flow reading</li>
              
            
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
  <li><strong>Product Name:</strong> IOTAFLOW Acrylic & Glass Tube Rotameter Series</li>
  <li><strong>Measurement Principle:</strong> Variable area flow measurement using tapered tubes and float displacement</li>
  <li><strong>Design Variants:</strong>
    <ul>
      <li><strong>Acrylic Body Rotameters:</strong> Crystal-clear, impact-resistant acrylic with engraved scale for easy visual monitoring</li>
      <li><strong>Glass Tube Rotameters:</strong> High-precision borosilicate glass tubes offering excellent chemical resistance and accuracy</li>
    </ul>
  </li>
  <li><strong>Media Compatibility:</strong> Suitable for liquids, gases, and steam across industrial and utility applications</li>
  <li><strong>Connection Options:</strong> Multiple process connections available; supports OEM integration</li>
  <li><strong>Accessories:</strong> Optional flow switches and transmitters for enhanced monitoring and control</li>
  <li><strong>Applications:</strong>
    <ul>
      <li><strong>Acrylic Tube Rotameters:</strong>
        <ul>
          <li>Water & Wastewater Treatment — Raw water, RO feed, ETP dosing, and filtration flows</li>
          <li>Compressed Air & Gas Lines — Air flow in utilities, HVAC, and pneumatic systems</li>
          <li>Light Chemical Processing — Acids, alkalis, and non-corrosive chemicals at low temperatures</li>
          <li>Food & Beverage — Syrups, bottling, dairy water, and CIP system flows</li>
          <li>Irrigation & Agriculture — Fertigation dosing and greenhouse water monitoring</li>
          <li>Laboratory & Pilot Plants — Flow control in chemical, pharma, and academic research setups</li>
        </ul>
      </li>
      <li><strong>Glass Tube Rotameters:</strong>
        <ul>
          <li>Chemical & Petrochemical Plants — Acids, solvents, alkalis, hydrocarbons, and corrosive fluids</li>
          <li>Oil & Gas Industry — Hydrocarbon liquids, fuel oils, LPG vapors, and refinery streams</li>
          <li>Pharmaceutical Manufacturing — Solvent handling, purified water, clean gases in GMP environments</li>
          <li>Power Plants & Utilities — Boiler feed water, steam lines, and cooling circuits</li>
          <li>Food & Beverage Processing — Edible oils, flavor dosing, and high-temperature liquids</li>
          <li>High-Temperature & High-Pressure — Process media up to 200°C and 20 kg/cm²</li>
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
  <li><strong>Application Range:</strong> Suitable for liquids, gases, steam, chemicals, oils, and water</li>
  <li><strong>Measurement Accuracy:</strong> ±2–3% of full scale; repeatability of 0.5%; rangeability 10:1</li>
  <li><strong>Construction:</strong>
    <ul>
      <li><strong>Acrylic:</strong> Crystal-clear body for direct visual reading</li>
      <li><strong>Glass Tube:</strong> Borosilicate glass with stress-free mounting design</li>
    </ul>
  </li>
  <li><strong>Material Options:</strong> SS316, SS304, PTFE, PVC, Monel, PP</li>
  <li><strong>Pressure & Temperature Capability:</strong>
    <ul>
      <li><strong>Acrylic:</strong> Up to 60°C; 2–25 kg/cm²</li>
      <li><strong>Glass:</strong> Up to 200°C; up to 20 kg/cm² (model dependent)</li>
    </ul>
  </li>
  <li><strong>Connection Types:</strong> Flanged, threaded, Tri-Clamp, sanitary</li>
  <li><strong>Accessory Options:</strong> Hi/Low flow switches, steam jacket, 4–20 mA transmitter</li>
  <li><strong>Maintenance:</strong> Field-replaceable tubes (glass type) without disturbing end connections</li>
  <li><strong>Customization:</strong> Scales, sizes, and connections tailored for OEM requirements</li>
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
      <td>DN6 to DN100</td>
    </tr>
    <tr>
      <td>Float Material</td>
      <td>PTFE / SS316 (corrosion-resistant)</td>
    </tr>
    <tr>
      <td>Compatible Media</td>
      <td>Air, water, oil, gas, and industrial solvents</td>
    </tr>
    <tr>
      <td>Mounting Options</td>
      <td>In-line or panel-mounted with integrated needle valve</td>
    </tr>
    <tr>
      <td>End Connection Type</td>
      <td>Screwed (BSP/NPT) or flanged (ANSI/DIN)</td>
    </tr>
    <tr>
      <td>Maximum Operating Temperature</td>
      <td>Up to 70°C</td>
    </tr>
    <tr>
      <td>Maximum Operating Pressure</td>
      <td>Up to 10 bar</td>
    </tr>
    <tr>
      <td>Measurement Accuracy</td>
      <td>Bottom-to-top flow direction: ±2% of full-scale deflection (FSD)</td>
    </tr>
    <tr>
      <td>Scale Marking</td>
      <td>Laser-engraved on meter body for long-term readability</td>
    </tr>
    <tr>
      <td>Flange Material Options</td>
      <td>PP, MS, SS304, SS316</td>
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
