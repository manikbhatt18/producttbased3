import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/p3a.jpg";
import img2 from "../../images/p3b.png";
import img3 from "../../images/p3c.png";
import img4 from "../../images/p3d.png";
import img5 from "../../images/p3e.png";



import related1 from "../../images/p1a.png";
import related2 from "../../images/p2a.png";
import related3 from "../../images/p4a.jpg";
import related4 from "../../images/p5a.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const images = [img1, img2, img3,img4,img5];

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
    { img: related1, title: "Ultrimis™ Domestic Ultrasonic Flow Meters", link: "/products" },
    {
      img: related2,
      title: "INLINE ULTRASONIC ROBUST Series",
      link: "/product-detail/detail2",
    },
    {
      img: related3,
      title: "Clamp-ON (Fixed) ULTRASONIC UF 1500 Series",
      link: "/product-detail/detail4",
    },
    {
      img: related4,
      title: "Clamp-ON (Portable) ULTRASONIC PF 222/333",
      link: "/product-detail/detail5",
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
            <h3 className="fw-semibold">INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; UF-1500 Series Insertion Ultrasonic Flow Meter – Precision Flow Measurement for Large Pipelines</li>
              <li className="mb-2">&#9679;Discover the UF-1500 Insertion Ultrasonic Flow Meter by IOTAFLOW</li>
              <li className="mb-2">&#9679; ideal for accurate, bidirectional flow monitoring in full or partially filled large-diameter pipes</li>
              <li className="mb-2">&#9679;Supports DN15 to DN6000 mm.</li>

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
  <li>The UF-1500 Series Insertion Ultrasonic Flow Meter by IOTAFLOW is a high-precision, 4-channel (4-beam) insertion-type flow meter designed for accurate, bidirectional flow measurement in large-diameter pipelines.</li>
  <li>Advanced ultrasonic time-pulse technology with multi-point sensing for stable, bidirectional flow measurement</li>
  <li>Operates effectively in full and partially filled pipes</li>
  <li>Supports a wide range of industrial fluids including potable water, wastewater, chemicals, and food-grade liquids</li>
  <li>Non-intrusive design ensures minimal pressure loss</li>
  <li>Compatible with pipe diameters ranging from DN15 mm to DN6000 mm</li>
  <li>Supports Z, V, and U configuration schemes for installation flexibility</li>
  <li>Ideal for mission-critical flow monitoring in municipal, utility, and industrial applications</li>
</ul>

<h4>Applications</h4>
<ul>
  <li>Power Generation (boiler feedwater, condensate loops)</li>
  <li>Municipal Water Supply and Wastewater Treatment</li>
  <li>Chemical and Petrochemical Plants</li>
  <li>Food and Beverage Production (milk, syrups, CIP)</li>
  <li>Oil and Gas Pipeline Monitoring</li>
  <li>HVAC and Thermal Energy Management</li>
</ul>

<h4>Compatible Fluids</h4>
<ul>
  <li>Potable and process water (hot/cold)</li>
  <li>Partially filled pipelines</li>
  <li>Wastewater and sewage</li>
  <li>Acids, alkalis, and corrosive fluids</li>
  <li>Dairy, juices, syrups, and other liquid foods</li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <ul>
  <li><strong>4-Channel Measurement:</strong> Enhanced accuracy using four-beam sensing across multiple insertion points for precise volumetric flow readings.</li>
  <li><strong>Non-Intrusive, Low-Pressure Loss Design:</strong> Insertion sensors minimize obstruction and maintain fluid integrity—ideal for process-critical pipelines.</li>
  <li><strong>Wide Diameter Compatibility:</strong> Supports DN15 mm to DN6000 mm pipes across metallic, plastic, and composite materials.</li>
  <li><strong>Advanced DSP Technology:</strong> Robust digital signal processing ensures noise immunity, stable readings, and low drift performance.</li>
  <li><strong>High Accuracy & Repeatability:</strong> Achieves ±1.5% accuracy with ±0.1% repeatability, even under turbulent or variable flow conditions.</li>
  <li><strong>Data Logging & Retention:</strong> Internal storage logs hourly, daily, and monthly data—preserved for up to 1 year without external power.</li>
  <li><strong>Industrial Outputs:</strong> RS-232/RS-485 (Modbus), 4–20 mA analog, pulse output, and optional Ethernet—ready for SCADA, PLC, and BMS integration.</li>
  <li><strong>Durable Build:</strong> Wetted parts made from SS316 stainless steel; sensor heads rated IP67, control unit IP54.</li>
  <li><strong>Extreme Environment Ready:</strong> Operates between -40°C to +65°C ambient and -30°C to +150°C liquid temperature (extendable to +350°C).</li>
  <li><strong>Secure Configuration:</strong> Password-protected settings and data protection from unauthorized access.</li>
  <li><strong>Batching and Alarm Modes:</strong> Supports volume-based batching, start-stop batching, and real-time diagnostics with alarm logging.</li>
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
      <td>Nominal Diameter of the Pipeline</td>
      <td>DN 15–6000</td>
    </tr>
    <tr>
      <td>Measurement Principle</td>
      <td>Transit Time</td>
    </tr>
    <tr>
      <td>Measuring Channels</td>
      <td>1 to 4 (Single Track | Dual Track | Four Track)</td>
    </tr>
    <tr>
      <td>Clamp-on PEA Accuracy (%)</td>
      <td>
        <ul>
          <li>Single-beam sounding: ±2%</li>
          <li>Two-beam sounding: ±1%</li>
          <li>Four-beam sounding: ±0.5%</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Flow Velocity Range</td>
      <td>0.1 – 20 m/s</td>
    </tr>
    <tr>
      <td>Fluid Temperature Range</td>
      <td>-30°C to +160°C</td>
    </tr>
    <tr>
      <td>Ambient Temperature for Transmitter</td>
      <td>0°C to +50°C (Maximum)</td>
    </tr>
    <tr>
      <td>Pipeline Pressure</td>
      <td>2.5 MPa / 25 bar</td>
    </tr>
    <tr>
      <td>Transmitter/Transducers Protection</td>
      <td>IP54 / IP68</td>
    </tr>
    <tr>
      <td>Measurement Data Logging</td>
      <td>
        <ul>
          <li>Hourly log: 1440 records</li>
          <li>Daily log: 60 records</li>
          <li>Monthly log: Programmable up to 14,400 records</li>
          <li>Batching: 512 records</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>Power Consumption</td>
      <td>&lt;12W</td>
    </tr>
    <tr>
      <td>Transmitter Weight</td>
      <td>&lt;3 kg</td>
    </tr>
    <tr>
      <td>Transmitter Dimensions</td>
      <td>250 × 132 × 90 mm</td>
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
