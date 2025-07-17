import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/VFM 1.png';
import img2 from '../../images/VFM 2.png';
import img3 from '../../images/VFM 3.png';





import related1 from '../../images/VFM 1.png';
import related2 from '../../images/VFM 1.png';
import related3 from '../../images/p181.png';
import related4 from '../../images/Ultra-Nxt (1).png';


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
                 { img: related1, title: "Inline Vortex flow meters", link: "/product-detail/detail17" },
                 { img: related2, title: " IVF Insertion Vortex flow meter ", link: "/product-detail/detail18" },
                 { img: related3, title: "EQZ/EQZK Radial Turbine Gas Meters", link: "/product-detail/detail19" },
                 { img: related4, title: "Ultra-NXT Ultrasonic Gas Flow Meter", link: "/product-detail/detail20" },
                 
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
              <p className="text-muted">Steam Flow Meters</p>
              <h3 className="fw-semibold">VFM Vortex Flow Meters </h3>
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
                  <p>
                    <ul>
  <li><strong>Product Overview:</strong>
    <ul>
      <li>IOTAFLOW Vortex Flow Meter</li>
      <li>High-accuracy flow monitoring for steam, gas, and liquid systems</li>
      <li>Based on Karman vortex shedding principle</li>
      <li>Designed for saturated and superheated steam measurement</li>
      <li>Robust signal stability and maintenance-free operation</li>
      <li>Engineered for industrial process environments</li>
    </ul>
  </li>

  <li><strong>Targeted Application Areas:</strong>
    <ul>
      <li><strong>🔧 Power Plants & Boiler Systems:</strong> Steam flow in turbines, boiler feed systems, heat recovery loops</li>
      <li><strong>⚗️ Chemical & Petrochemical:</strong> Process gases, vapors, and utility steam in reactors and pipelines</li>
      <li><strong>🛢️ Oil & Gas:</strong> Natural gas metering, compressed gas distribution, flare gas monitoring</li>
      <li><strong>🍺 Food & Beverage:</strong> CIP-compliant steam, water, and CO₂ monitoring</li>
      <li><strong>💊 Pharmaceutical:</strong> SIP sterilization and GMP utility control</li>
      <li><strong>🚗 Automotive & Metal Processing:</strong> Monitoring fluids in high-temperature, high-vibration systems</li>
      <li><strong>📦 Pulp, Paper & Textiles:</strong> Steam and condensate flow tracking in drying and utility services</li>
      <li><strong>💧 Water & Wastewater Treatment:</strong> Chlorine gas, aeration airflow, and process water measurement</li>
    </ul>
  </li>
</ul>
                  </p>
                </div>
                
              </div>
            )}
            {activeTab === "Features" && (
<ul>
  <li><strong>No Moving Parts:</strong> Maintenance-free design eliminates wear, leaks, and mechanical failure—ensuring long-term reliability and reduced lifecycle costs.</li>
  <li><strong>SS 316L Stainless Steel Construction:</strong> Rugged and corrosion-resistant body with standard flange and wafer connections for flexible installation.</li>
  <li><strong>Optimized for Saturated and Superheated Steam:</strong> Engineered with pressure and temperature compensation for accurate metering in thermal process systems.</li>
  <li><strong>Wide Flow Turndown Ratio (Up to 1:20):</strong> Exceptional rangeability suitable for low-flow steam, compressed air, and process gas applications.</li>
  <li><strong>Negligible Pressure Drop:</strong> Up to 90% lower pressure loss than orifice meters—boosting energy efficiency and reducing operational costs.</li>
  <li><strong>IBR Approved:</strong> Certified under Indian Boiler Regulations for regulated steam and boiler environments.</li>
  <li><strong>High Accuracy and Repeatability:</strong> Achieves ±0.5% accuracy and ±0.2% repeatability under dynamic operating conditions.</li>
  <li><strong>Universal Media Compatibility:</strong> Measures steam, air, natural gas, nitrogen, and non-conductive liquids across industries.</li>
  <li><strong>Digital Communication Ready:</strong> Integrates with RS485, MODBUS, HART, and GPRS protocols—compatible with DCS, PLC, and SCADA systems.</li>
</ul>            )}
            {activeTab === "Technical data" && (
              <ul>
                
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
