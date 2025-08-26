import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p2a.png";
import img2 from "../../images/p2b.png";
import "../ProductDetailCustom.css";

import related1 from "../../images/p1a.png";
import related2 from "../../images/p3a.jpg";
import related3 from "../../images/p4a.jpg";
import related4 from "../../images/p5a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2];
  const ROTATE_MS = 2000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");

  const tabContentRef = useRef(null);
  const imgWrapperRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.classList.remove("fade-in");
      void tabContentRef.current.offsetWidth;
      tabContentRef.current.classList.add("fade-in");
    }
  }, [activeTab]);

  useEffect(() => {
    if (imgWrapperRef.current) {
      imgWrapperRef.current.classList.remove("img-fade-in");
      void imgWrapperRef.current.offsetWidth;
      imgWrapperRef.current.classList.add("img-fade-in");
    }
  }, [mainImage]);

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
    { img: related1, title: "Ultrimis™ Domestic Ultrasonic Flow Meters", link: "/products" },
    { img: related2, title: "INTRUSIVE ULTRASONIC UF 1500 Series", link: "/product-detail/detail3" },
    { img: related3, title: "Clamp-ON (Fixed) ULTRASONIC UF 1500 Series", link: "/product-detail/detail4" },
    { img: related4, title: "Clamp-ON (Portable) ULTRASONIC PF 222/333", link: "/product-detail/detail5" },
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

            <div className="d-flex gap-2 gap-md-3 flex-wrap justify-content-center mt-3">
              {images.map((img, i) => (
                <div key={i} className="d-flex flex-column align-items-center mb-2">
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => handleThumbClick(img, i)}
                    className="img-thumbnail"
                    style={{
                      width: "50px",
                      height: "50px",
                      maxWidth: "60px",
                      maxHeight: "60px",
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
            <p className="text-muted">Ultrasonic Flow Meter</p>
            <h3 className="fw-semibold">INLINE ULTRASONIC ROBUST Series</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; Robust™ Inline Ultrasonic Water Flow Meter</li>
              <li className="mb-2">&#9679; No Moving Parts, 10-Year Battery</li>
              <li className="mb-2">
                &#9679; Smart ultrasonic water meter for residential & industrial use. IP67, 10-year
                battery, NFC app, LoRa/GSM communication & built-in data logger.
              </li>
            </ul>
            <button className="my-2 btn-enquiry">
              <span>Enquiry Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky tabs */}
      <div className="container sticky-top bg-white shadow-sm" style={{ top: "0px", zIndex: 1020 }}>
        <ul className="nav nav-tabs border-0 justify-content-center flex-wrap">
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
                  <p><b>Inline Ultrasonic Flow Meter – Robust, Maintenance-Free Smart Metering</b></p>
  <p>
    Struggling with frequent failures in mechanical water meters? Say goodbye to costly downtime, moving part replacements, and clogging issues with the IOTAFLOW Inline Ultrasonic Flow Meter – Robust Series. Designed for precision water flow measurement in harsh and high-demand environments, this smart meter offers long-lasting reliability and superior accuracy, even in low-flow or particle-heavy water lines.
  </p>
  <p>
    Unlike Woltman or paddle-type meters, this meter uses ultrasonic transit-time technology, ensuring accurate measurement without internal obstructions. It works perfectly with raw water, treated water, DM water, hot water, and condensate up to <b>130°C</b> — even with sand or suspended solids in the flow.
  </p>

  <p><b>Target Applications:</b></p>
  <ul>
    <li>Residential water metering for cold/hot domestic water</li>
    <li>Industrial water flow monitoring in manufacturing, chemical, and food processing</li>
    <li>Irrigation systems in agriculture and landscape management</li>
    <li>DM water and condensate flow measurement in pharmaceutical and boiler plants</li>
    <li>Water consumption tracking in buildings, commercial complexes, and smart cities</li>
    <li>District cooling and heating systems, HVAC water distribution</li>
    <li>Utility water supply networks and non-revenue water (NRW) control</li>
    <li>CGWA flow meter for groundwater abstraction plants</li>
    <li>CPCB/PCB/NIC data logger compliant water metering systems</li>
  </ul>

  <p><b>CGWA, CPCB, and NIC Compliant</b></p>
  <ul>
    <li><b>CGWA-Compliant Design</b> – Ideal for groundwater abstraction monitoring</li>
    <li>Data transmission ready for PCB, CPCB, and NIC portals</li>
    <li>Supports real-time reporting via Modbus, GPRS, or RS485</li>
    <li>Fully compliant with industrial and environmental water use mandates</li>
    <li>Seamless integration with government dashboards</li>
  </ul>
              </div>
            </div>
          )}
{activeTab === "Features" && (
  <div>
    <p><strong>Key Features:</strong></p>
    <ul>
      <li><strong>Sand/Particle Interference? NO PROBLEM</strong> – Rugged design handles poor-quality water effortlessly.</li>
      <li><strong>No External Power? NO PROBLEM</strong> – 10-year lithium battery life with optional 24V DC supply.</li>
      <li><strong>Hot Water/Condensate? NO PROBLEM</strong> – Operates reliably up to 130°C.</li>
      <li><strong>No Connectivity? NO PROBLEM</strong> – Supports RS485, Modbus (wired/wireless), GSM/GPRS, LoRaWAN, and NFC.</li>
      <li><strong>Outdoor Use? NO PROBLEM</strong> – IP67/IP68-rated enclosure for extreme weather.</li>
      <li><strong>Low Flow Conditions? NO PROBLEM</strong> – Incredible 1:125 turndown ratio, perfect for residential and industrial low-demand scenarios.</li>
      <li><strong>Built-in Data Logger</strong> – Stores hourly data for 1440 hours, daily data for 460 days, and monthly data for 48 months.</li>
    </ul>

    <p><strong>Smart Monitoring via NFC & Mobile App</strong></p>
    <p>
      Simply tap your Android phone to the meter to instantly access real-time readings, historical usage trends, 
      and diagnostics through our dedicated NFC app interface. Perfect for remote monitoring and smart utility integration.
    </p>
  </div>
)}
{activeTab === "Technical data" && (
  <table>
    <tbody>
      <tr>
        <td><strong>Pipe Range</strong></td>
        <td>DN32 – DN300 / up to DN1000</td>
      </tr>
      <tr>
        <td><strong>NFC Communication</strong></td>
        <td>Enabled</td>
      </tr>
      <tr>
        <td><strong>Accuracy</strong></td>
        <td>± 2.0 of MV</td>
      </tr>
      <tr>
        <td><strong>Maximum pipeline pressure, MPa / bar</strong></td>
        <td>2.5 / 25</td>
      </tr>
      <tr>
        <td><strong>Fluid temperature range, °С</strong></td>
        <td>50°С / 130°С (For Hot Water)</td>
      </tr>
      <tr>
        <td><strong>Ambient temperature range, °С</strong></td>
        <td>5 - 65°С</td>
      </tr>
      <tr>
        <td><strong>Protection</strong></td>
        <td>IP67 (IP68 optional)</td>
      </tr>
      <tr>
        <td><strong>End Connection</strong></td>
        <td>ASME/ANSI B16.5 Class 150, Tri-Clover, PN16</td>
      </tr>
      <tr>
        <td><strong>Compliance</strong></td>
        <td>ISO 4064</td>
      </tr>
      <tr>
        <td><strong>Interfaces</strong></td>
        <td>Pulse, RS485, Analog 4-20mA (Optional), In-Built LoRaWAN optional</td>
      </tr>
      <tr>
        <td><strong>Power supply</strong></td>
        <td>Battery Operated 3.6 V Lithium, 10 years; Power Operated (Optional)</td>
      </tr>
      <tr>
        <td><strong>Measurement data logging, number of records</strong></td>
        <td>
          <ul>
            <li>1440 Hourly log</li>
            <li>460 Daily log</li>
            <li>48 Monthly log</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>Certifications</strong></td>
        <td>CE, MID Certified</td>
      </tr>
    </tbody>
  </table>
)}

          {activeTab === "Downloads" && <p>Visit our documentation page to download the full technical specifications and data sheets.</p>}
        </div>
      </div>

      {/* Related Products */}
      <div style={{ backgroundColor: "#f6f8fc" }} className="py-5">
        <div className="container">
          <h5 className="fw-semibold text-center mb-4">YOU MAY ALSO BE INTERESTED IN</h5>
          <div className="row justify-content-center flex-wrap">
            {relatedProducts.map((product, idx) => (
              <div className="col-6 col-sm-6 col-md-3 mb-4 text-center" key={idx}>
                <Link to={product.link} className="text-decoration-none text-dark">
                  <div className="p-3 shadow-sm d-flex align-items-center justify-content-center mx-auto hover-scale related-card">
                    <img src={product.img} alt={product.title} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                  </div>
                  <p className="fw-semibold mt-2" style={{ fontSize: "14px" }}>{product.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .fade-in { animation: fadeIn 0.2s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .main-image-wrapper { width: 100%; max-width: 400px; height: 400px; display: flex; align-items: center; justify-content: center; background: #fff; }
        .main-image { max-width: 100%; max-height: 100%; object-fit: contain; display: block; }
        .img-canvas { width: 100%; height: 100%; }
        .img-fade-in { opacity: 0; transition: opacity 0.4s ease; }
        .img-fade-in { opacity: 1; }

        .nav-tabs .nav-link { color: black; border: none; border-bottom: 3px solid transparent; transition: all 0.3s ease; background-color: white; }
        .nav-tabs .nav-link:hover { background-color: #ffcc00; color: black; }
        .nav-tabs .nav-link.active-tab { border-bottom: 3px solid #ffcc00; color: black; background-color: white; }

        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }

        .btn-enquiry { position: relative; overflow: hidden; background-color: yellow; color:black; border: none; padding: 8px 20px; cursor: pointer; }
        .btn-enquiry::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: black; transform: translateX(-100%); z-index: 1; }
        .btn-enquiry:hover::before { animation: slideInLeft 0.4s ease forwards; }
        .btn-enquiry:not(:hover)::before { animation: slideOutRight 0.4s ease forwards; }
        @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes slideOutRight { from { transform: translateX(0); } to { transform: translateX(100%); } }
        .btn-enquiry span { position: relative; z-index: 2; transition: color 0.4s ease; }
        .btn-enquiry:hover span { color: white; }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .main-image-wrapper { max-width: 100%; height: auto; }
        }
        @media (max-width: 767px) {
          .nav-tabs { flex-wrap: wrap; }
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
