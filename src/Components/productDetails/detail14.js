import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/TRX 1.png';
import img2 from '../../images/TRX 2.png';
import img3 from '../../images/TRX 3.png';




import related1 from '../../images/product11(1).png';
import related2 from '../../images/p121.png';
import related3 from '../../images/of-z_h146.png';
import related4 from '../../images/p152.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1,img2,img3];
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
                 
                 { img: related1, title: " Contoil / RPD Flow Meters ", link: "/product-detail/detail11" },
                 { img: related2, title: "  Oval Gear Flow Meters (OGM)", link: "/product-detail/detail12" },
                 { img: related3, title: "Micro Stream Flow Sensor OFZ Series", link: "/product-detail/detail13" },
                 { img: related4, title: "Thermal Mass Flow Sensors (Insertion)", link: "/product-detail/detail15" },
                 
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
              <p className="text-muted">Air Flow Meters</p>
              <h3 className="fw-semibold">TRX Ultrasonic Air Meters </h3>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">&#9679; </li>
                <li className="mb-2">&#9679; </li>
                <li className="mb-2">&#9679; </li>
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
      <li>TRX Series Ultrasonic Air Flow Meter</li>
      <li>High-precision, non-invasive flow monitoring for compressed air and industrial gas systems</li>
      <li>Advanced ultrasonic sensing ensures long-term measurement stability</li>
      <li>Zero pressure drop and resistant to oil, moisture, and dust</li>
      <li>Engineered for demanding production environments</li>
    </ul>
  </li>

  <li><strong>Applications:</strong>
    <ul>
      <li>Compressed air energy audits</li>
      <li>Factory air leakage detection systems</li>
      <li>Industrial gas consumption monitoring</li>
      <li>HVAC and pneumatic system optimization</li>
      <li>Multi-factory air transfer analysis</li>
    </ul>
  </li>

  <li><strong>Key Benefits:</strong>
    <ul>
      <li>Helps reduce compressed air costs and energy waste</li>
      <li>Enables real-time monitoring of compressor performance</li>
      <li>Supports predictive maintenance strategies</li>
      <li>No flow interruption and no pressure loss during operation</li>
      <li>Reliable, cost-efficient performance across diverse industrial settings</li>
    </ul>
  </li>
</ul>
                </div>
                
              </div>
            )}
            {activeTab === "Features" && (
<ul>
  <li><strong>No Pressure Loss:</strong> Engineered with a clear flow path and no moving parts, the TRX ensures zero pressure drop and energy loss, boosting system efficiency.</li>
  <li><strong>Long-Term Accuracy & Maintenance-Free Operation:</strong> High-accuracy measurement with no degradation over time — no recalibration, filters, or scheduled maintenance for up to 10 years.</li>
  <li><strong>Exceptional Durability in Harsh Environments:</strong> Robust build resists oil mist, moisture, and dust; ideal for contaminated or unfiltered compressed air systems.</li>
  <li><strong>Leak Detection & Low Flow Sensitivity:</strong> Wide turndown ratio (1:60) enables precise detection of low flow and air leakage, supporting proactive maintenance and energy conservation.</li>
  <li><strong>Reverse Flow Measurement:</strong> Capable of bi-directional flow monitoring, suitable for loop piping and inter-factory air distribution setups.</li>
  <li><strong>Multiple Gas Compatibility:</strong> Supports air, nitrogen, and inert gases, with outputs including RS485 Modbus, analog (4–20 mA), pulse, and alarm signals.</li>
  <li><strong>Energy Optimization Ready:</strong> When paired with a watt-hour meter, enables calculation of air/power ratio (kW/m³) for real-time compressor performance insights.</li>
</ul>            )}
            {activeTab === "Technical data" && (
              <ul>
  <li><strong>Pipe Range:</strong> DN25 to DN80</li>
  <li><strong>Accuracy:</strong> ±1.3%RD (at 0.5 MPa, ordinary temperature, dry air or nitrogen)</li>
  <li><strong>Fluid Temperature Range:</strong> –10°C to +60°C</li>
  <li><strong>Working Pressure:</strong> 0 to &lt;1 MPa (Gauge pressure)</li>
  <li><strong>Compensation Features:</strong> Built-in temperature and pressure compensation</li>
  <li><strong>Power Supply:</strong> External 24VDC ±10%</li>
  <li><strong>Output Interfaces:</strong> 4–20 mA (±0.5%FS), RS485</li>
  <li><strong>Measurable Fluids:</strong> Compressed Air, Nitrogen</li>
  <li><strong>Certifications:</strong> RoHS, CE, UKCA</li>
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
