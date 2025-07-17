import React, { useState, useEffect, useRef } from 'react';//no image given
import { Link } from 'react-router-dom';

import img1 from '../../images/1.png';
import img2 from '../../images/1 (1).png';
import img3 from '../../images/3.png';
import img4 from '../../images/Background.png';


import related1 from '../../images/Buf lite-2-1.png';
import related2 from '../../images/Copy of Old 1.png';
import related3 from '../../images/1.png';
import related4 from '../../images/7600 (1) Enhanced.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1, img2,img3,img4];
  const [mainImage, setMainImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("Description");
  const tabContentRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.classList.remove('fade-in');
      void tabContentRef.current.offsetWidth;
      tabContentRef.current.classList.add('fade-in');
    }
  }, [activeTab]);

  const relatedProducts = [
        { img: related1, title: "Domestic Ultrasonic Flow Meters", link: "/Components/product.js" },
        { img: related2, title: "INLINE ULTRASONIC ROBUST Series", link: "/product-detail/detail2" },
        { img: related3, title: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)", link: "/product-detail/detail3" },
        { img: related4, title: "Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes", link: "/product-detail/detail6" },
        
      ];

  return (
      <div className="text-dark">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <div className="border mb-3 p-2 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
                <img src={mainImage} alt="Main Meter" className="img-fluid" />
              </div>
              <div className="d-flex gap-3 mt-3">
                {images.map((img, i) => (
                  <div key={i} className="d-flex flex-column align-items-center">
                    <img
                      src={img}
                      alt={`thumb-${i}`}
                      onClick={() => setMainImage(img)}
                      className="img-thumbnail"
                      style={{
                        width: '60px',
                        height: '60px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: mainImage === img ? '2px solid #black' : '1px solid #yellow',
                        borderRadius: '0px'
                      }}
                    />
                    <div
                      style={{
                        height: '3px',
                        width: '60%',
                        backgroundColor: mainImage === img ? '#ffcc00' : 'transparent',  // Yellow
                        marginTop: '3px',
                        borderRadius: '2px',
                      }}
                    ></div>
  
                  </div>
                ))}
              </div>
            </div>
  
            <div className="col-lg-6 mt-5 mt-lg-0">
              <p className="text-muted">Water Meters</p>
              <h3 className="fw-semibold">Clamp-ON (Portable) ULTRASONIC PF 222/333</h3>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">&#9679;Micronics™ PF333 Portable Ultrasonic Flow Meter</li>
                <li className="mb-2">&#9679;(Distributed in India by IOTAFLOW Systems Pvt. Ltd.)</li>
                <li className="mb-2">&#9679; Micronics PF333 portable ultrasonic flow meter with clamp-on sensors, ±0.5% accuracy, CE certified. Non-invasive, data-logging, and available in India via IOTAFLOW.</li>
              </ul>
              <button className="my-2  btn-enquiry"><span>Enquiry Now</span></button>
            </div>
          </div>
        </div>
  
        <div className="container sticky-top bg-white shadow-sm" style={{ top: '0px', zIndex: 1020 }}>
          <ul className="nav nav-tabs border-0 justify-content-center">
            {["Description", "Features", "Technical data", "Downloads"].map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link ${activeTab === tab ? 'active-tab' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
  
  
              </li>
            ))}
          </ul>
        </div>
  
        <div className="container">
          <div ref={tabContentRef} className="p-4 border shadow-sm bg-white fade-in">
            {activeTab === "Description" && (
              <div className="row">
                <div className="col-md-6">
                  <ul>
  <li><strong>Product Overview:</strong>
    <ul>
      <li>Micronics PF 222/333 Portable Ultrasonic Flow Meter</li>
      <li>Compact, battery-powered clamp-on design</li>
      <li>Non-invasive, real-time flow monitoring for full pipes</li>
      <li>High-accuracy diagnostics with no pipe cutting or flow disruption</li>
      <li>Suitable for chilled water, raw water, RO, chemicals, oils, and clean process liquids</li>
      <li>Ideal for utilities, industrial audits, and maintenance inspections</li>
    </ul>
  </li>

  <li><strong>Distribution in India:</strong>
    <ul>
      <li>Represented by IOTAFLOW Systems Pvt. Ltd.</li>
      <li>Authorized channel partner for Micronics in India</li>
      <li>Provides sales, support, and technical guidance</li>
      <li>Integration support for SCADA/BMS systems</li>
    </ul>
  </li>

  <li><strong>Target Applications:</strong>
    <ul>
      <li>Water flow auditing in industrial plants and utility pipelines</li>
      <li>HVAC commissioning and chilled water flow balancing</li>
      <li>Pump verification and energy efficiency monitoring</li>
      <li>RO and DM water flow measurement in chemical and pharmaceutical units</li>
      <li>Process water and condensate tracking in boiler and thermal systems</li>
      <li>Non-invasive flow metering for temporary setups and maintenance inspections</li>
      <li>Portable diagnostics in building services, energy audits, and facility management</li>
    </ul>
  </li>
</ul>
                </div>
                
              </div>
            )}
            {activeTab === "Features" && (
<ul>
  <li><strong>Micronics Make – UK Engineered:</strong> Trusted performance and build quality, now available through IOTAFLOW in India.</li>
  <li><strong>Portable & Lightweight:</strong> Carry it anywhere for instant flow analysis on multiple pipelines.</li>
  <li><strong>Clamp-On Technology:</strong> No cutting, no shutdowns, no contamination – non-invasive ultrasonic sensing.</li>
  <li><strong>Wide Pipe Compatibility:</strong> Supports pipe sizes from 13 mm to 5000 mm with multiple sensor options.</li>
  <li><strong>High Accuracy:</strong> Delivers ±0.5% accuracy with repeatability for precise auditing and diagnostics.</li>
  <li><strong>Battery Operation:</strong> Up to 20 hours of operation on a single charge, suitable for extended field use.</li>
  <li><strong>Data Logging:</strong> Built-in data logger with SD card for up to 198,000 records. Export via USB.</li>
  <li><strong>Intuitive Interface:</strong> Large backlit LCD and user-friendly menu-driven setup.</li>
  <li><strong>Multi-Output Support:</strong> RS232, Modbus, USB, 4–20mA, pulse, and relay outputs available.</li>
  <li><strong>Certified for International Standards:</strong>
    <ul>
      <li>CE Certified</li>
      <li>RoHS Compliant (Restriction of Hazardous Substances)</li>
      <li>ISO 9001 Manufacturing Standards</li>
    </ul>
  </li>
</ul>            )}
            {activeTab === "Technical data" && (
              <ul>
  <li><strong>Measurement Principle:</strong> Transit Time (CE Approved)</li>
  <li><strong>Pipe Range:</strong> 13 mm ID to 10,000 mm OD</li>
  <li><strong>Transducer Operating Temperature:</strong> –20°C to +135°C (Optional Hi-Temp: –20°C to +200°C)</li>
  <li><strong>Display:</strong> Shows flow rate, total flow, signal level, and battery level</li>
  <li><strong>Sensing Method:</strong> Non-invasive clamp-on technology</li>
  <li><strong>Language Options:</strong> English, French, German, Spanish</li>
  <li><strong>Carrying Case:</strong> IP67 Rated</li>
  <li><strong>Power Operation:</strong> Battery or mains; Battery life: 14 hours; Charging time: 2.5 hours</li>
  <li><strong>Accuracy:</strong> ±0.5% to ±3% (depending on flow rate and pipe size)</li>
  <li><strong>Turndown Ratio:</strong> 100:1</li>
  <li><strong>Data Communication:</strong> USB (supports most USB 2.0 BOM drives)</li>
  <li><strong>Outputs:</strong> 3 × Pulse Output, 4–20 mA Analog Output</li>
  <li><strong>Data Logging Capacity:</strong>
    <ul>
      <li>Up to 100,000,000 data points</li>
      <li>12 named sites</li>
      <li>Download via USB to CSV file and export to Excel</li>
    </ul>
  </li>
  <li><strong>Temperature Sensors:</strong> Clamp-on PT100 Class B, 4-wire
    <ul>
      <li>Range: 0°C to 200°C (32°F to 392°F)</li>
      <li>Resolution: 0.1°C (0.18°F)</li>
      <li>Minimum delta T: 0.3°C (Optional)</li>
    </ul>
  </li>
</ul>
            )}
            {activeTab === "Downloads" && (
              <p>Visit our documentation page to download the full technical specifications and data sheets.</p>
            )}
          </div>
        </div>
  
        <div style={{ backgroundColor: '#f6f8fc' }} className="py-5">
          <div className="container">
            <h5 className="fw-semibold text-center mb-4">YOU MAY ALSO BE INTERESTED IN</h5>
            <div className="row justify-content-center">
              {relatedProducts.map((product, idx) => (
                <div className="col-6 col-md-3 mb-4 text-center" key={idx}>
                  <Link to={product.link} className="text-decoration-none text-dark">
                    <div
                      className="p-3 shadow-sm d-flex align-items-center justify-content-center mx-auto hover-scale"
                      style={{
                        backgroundColor: '#fff',
                        width: '180px',
                        height: '180px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        transition: 'transform 0.3s',
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <p className="fw-semibold mt-2" style={{ fontSize: '14px' }}>{product.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <style jsx>{`
    .fade-in {
      animation: fadeIn 0.2s ease-in-out;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
    /* Active Tab Style */
    .nav-tabs .nav-link {
      color: black;
      border: none;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      background-color: white;
    }
  
    .nav-tabs .nav-link:hover {
      background-color: #ffcc00; /* Yellow hover */
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
    background-color: yellow; /* Default button background color */
    /* Add other button styles as needed */
  }
  
  .btn-enquiry::before {
    content: '';
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
  
  .btn-enquiry span {
    position: relative;
    z-index: 2;
    transition: color 0.4s ease;
  }
  
  
  
  `}</style>
  
      </div>
    );
  }

export default ProductDetail;
