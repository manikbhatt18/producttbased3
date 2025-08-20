import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p6a.png";
import img2 from "../../images/p6b.png";



import related1 from "../../images/p7a.jpg";
import related2 from "../../images/p8a.png";
import related3 from "../../images/sja.png";
import related4 from "../../images/p10a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2];

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
    { img: related1, title: "MF-PRO Electromagnetic Flow Meter", link: "/product-detail/detail7" },
    {
      img: related2,
      title: "CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters",
      link: "/product-detail/detail8",
    },
    {
      img: related3,
      title: " Smart Single Jet Water Meters",
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
            <p className="text-muted">Ultrasonic Flow Meter</p>
            <h3 className="fw-semibold">  Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;UF AV5500 – Open Channel & Partially-Filled Pipe Flow Meter</li>
              <li className="mb-2">&#9679;Doppler-based area velocity flow meter for open channels & partially-filled pipes.</li>
              <li className="mb-2">&#9679;Open channel & sewer flow meter for Indian drainage systems.</li>
              <li className="mb-2">&#9679;CE/CSA certified ultrasonic meter with Modbus & USB. Ideal for STP, ETP, canals & effluent line.</li>
            
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
                <section id="uf-av5500-overview">
  <h2>UF AV5500 Area-Velocity Ultrasonic Flow Meter</h2>
  <p>The <strong>UF AV5500</strong> from IOTAFLOW is a high-performance area-velocity ultrasonic flow meter, purpose-built to accurately measure flow in open channels, natural streams, stormwater drains, and partially-filled pipes—without requiring flumes or weirs.</p>
  <p>This advanced system utilizes a submerged ultrasonic Doppler sensor to simultaneously measure velocity and level, calculating flow volume in real-time. Ideal for wastewater, industrial effluent, stormwater monitoring, and irrigation flow measurement, the UF AV5500 delivers <strong>CE, CSA, and UL-certified</strong> reliability in harsh field conditions.</p>
</section>

<section id="uf-av5500-applications">
  <h3>Target Applications</h3>
  <ul>
    <li>Wastewater flow monitoring in sewer lines and treatment plants</li>
    <li>Stormwater discharge measurement in municipal drainage systems</li>
    <li>Effluent tracking in industrial process lines and outfalls</li>
    <li>Irrigation and canal water flow measurement</li>
    <li>Environmental stream flow studies and hydrological monitoring</li>
    <li>Retrofit flow metering in existing gravity-fed and partially filled pipelines</li>
    <li>Smart water data logging for regulatory reporting and analytics</li>
  </ul>
</section>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <section id="uf-av5500-key-features">
  
  <ul>
    <li><strong>Non-Contacting Doppler Ultrasonic Technology</strong> – Accurately measures level and velocity for open flow systems</li>
    <li><strong>Ideal for Partially Filled Pipes and Irregular Channels</strong> – Works with custom-shaped conduits and storm drains</li>
    <li><strong>No Flume or Weir Required</strong> – Simplifies installation, reduces civil work, and lowers cost</li>
    <li><strong>Advanced Data Logging</strong> – Built-in 26 million-point logger with USB data export</li>
    <li><strong>Weatherproof Enclosure (NEMA 4X / IP66)</strong> – Rugged design for outdoor use</li>
    <li><strong>Wide Velocity Range</strong> – Measures flow from 0.03 to 6.2 m/s, including reverse flow up to -1.5 m/s</li>
    <li><strong>Level Range</strong> – Handles water levels from 1 inch (25.4 mm) up to 15 ft (4.5 m)</li>
    <li><strong>Multiple Outputs</strong> – 3 × 4-20 mA, Modbus RTU, USB, 2 × Control Relays</li>
    <li><strong>CE, CSA, UL/EN 61010-1 Certified</strong> – Globally compliant and safety-tested</li>
    <li><strong>Intrinsic Safety Options Available</strong> – For use in hazardous or classified environments</li>
    <li><strong>No Moving Parts</strong> – Zero maintenance and resistance to fouling and corrosion</li>
    <li><strong>Temperature Compensated Readings</strong> – Reliable in varying field temperatures</li>
  </ul>
</section>
          )}

          {activeTab === "Technical data" && (
            <section id="uf-av5500-specifications">
  <h3>UF AV5500 Technical Specifications</h3>
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Application</td>
        <td>Ideal for Open Channels & Partially Filled Pipes</td>
      </tr>
      <tr>
        <td>Measurement</td>
        <td>Measures flow Velocity and Level simultaneously</td>
      </tr>
      <tr>
        <td>Sensor Cable</td>
        <td>7.6 m / 25 ft submersible, shielded 3-coaxial pairs</td>
      </tr>
      <tr>
        <td>Flow Rate Range</td>
        <td>0.1 to 20 ft/sec and reverse flow to -5 ft/sec</td>
      </tr>
      <tr>
        <td>Accuracy (Velocity)</td>
        <td>± 2% of reading or ± 0.04 ft/sec (whichever is greater)</td>
      </tr>
      <tr>
        <td>Accuracy (Level)</td>
        <td>± 0.25% of reading or ± 0.08’’ (whichever is greater)</td>
      </tr>
      <tr>
        <td>Enclosure</td>
        <td>Watertight, NEMA4X (IP66) polycarbonate</td>
      </tr>
      <tr>
        <td>Totalizer</td>
        <td>14 Digit</td>
      </tr>
      <tr>
        <td>Calibration</td>
        <td>Built-in 5-key programmer</td>
      </tr>
      <tr>
        <td>Outputs</td>
        <td>Three isolated 4-20mA / 0-5V (Flow, Level and Velocity)</td>
      </tr>
      <tr>
        <td>Control Relays</td>
        <td>2 relays – 5 amp, SPDT – programmable for flow pulse/alarms</td>
      </tr>
      <tr>
        <td>Datalogger</td>
        <td>128 Megabyte storage (6.5 million points)</td>
      </tr>
      <tr>
        <td>Power Input</td>
        <td>100-240VAC, 50/60Hz, 10 VA max</td>
      </tr>
      <tr>
        <td>Certifications</td>
        <td>CE, UL/SCA/EN 61010-1</td>
      </tr>
      <tr>
        <td>Note</td>
        <td>Portable Doppler Effect (D550 Series) also available</td>
      </tr>
    </tbody>
  </table>
</section>
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
