import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/p181.png';
import img2 from '../../images/p182.png';
import img3 from '../../images/p183.png';
import img4 from '../../images/p184.png';






import related1 from '../../images/VFM 1.png';
import related2 from '../../images/VFM 1.png';
import related3 from '../../images/VFM 1.png';
import related4 from '../../images/Ultra-Nxt (1).png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1,img2,img3,img4];
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
                 { img: related1, title: "VFM Vortex Flow Meters", link: "/product-detail/detail16" },
                 { img: related2, title: "Inline Vortex flow meters ", link: "/product-detail/detail17" },
                 { img: related3, title: "IVF Insertion Vortex flow meter", link: "/product-detail/detail18" },
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
            <p className="text-muted">Gas Flow Meters</p>
            <h3 className="fw-semibold">EQZ/EQZK Radial Turbine Gas Meters</h3>
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
      <li>EQZ Radial Turbine Gas Meters by Elgas</li>
      <li>High-precision volumetric flow measurement for natural gas and clean, non-corrosive gases</li>
      <li>Optimized for industrial and commercial gas distribution networks</li>
      <li>Performs reliably in high-temperature and challenging environmental conditions</li>
      <li>Minimal pressure loss with easy integration into telemetry and smart metering systems</li>
      <li>Widely adopted across India for industrial and utility applications</li>
    </ul>
  </li>

  <li><strong>Applications in India:</strong>
    <ul>
      <li><em>Industrial Gas Flow Monitoring:</em>
        <ul>
          <li>Steel plants, refineries, chemical industries</li>
          <li>Supports process control and energy optimization</li>
        </ul>
      </li>
      <li><em>City Gas Distribution (CGD) Networks:</em>
        <ul>
          <li>Used in urban CGD projects approved by PNGRB</li>
          <li>Reliable billing and pipeline integrity for municipal systems</li>
        </ul>
      </li>
      <li><em>Power Plants & Captive Power Units:</em>
        <ul>
          <li>Gas-based thermal and combined cycle plants</li>
          <li>Tracks fuel efficiency and ensures CEA/DISCOM compliance</li>
        </ul>
      </li>
      <li><em>Commercial & Utility Metering:</em>
        <ul>
          <li>Commercial complexes, malls, hospitals, SEZs</li>
          <li>Supports LPG, PNG, and CNG billing across shared networks</li>
        </ul>
      </li>
      <li><em>Oil & Gas Pipelines (Upstream/Midstream):</em>
        <ul>
          <li>Custody transfer and flow measurement across major pipeline infrastructures</li>
          <li>Used in ONGC, GAIL, IndianOil, and EPC contractor deployments</li>
        </ul>
      </li>
      <li><em>EPC & Infrastructure Projects:</em>
        <ul>
          <li>Integrated into gas metering packages for L&T, Tata Projects, and others</li>
          <li>Supports government and private industrial builds</li>
        </ul>
      </li>
      <li><em>Research, Labs & Calibration Centers:</em>
        <ul>
          <li>Used for precision testing and calibration in R&D labs and test benches</li>
          <li>Supports technological development in energy and mechanical engineering</li>
        </ul>
      </li>
      <li><em>Rural & Remote Industrial Clusters:</em>
        <ul>
          <li>Installed in decentralized systems and agro-industrial networks</li>
          <li>Engineered for minimal maintenance and off-grid readiness</li>
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
  <li><strong>Wide Flow Range for Industrial Use:</strong> Handles high gas volumes up to 10,000 m³/h — ideal for large-scale industrial metering across India.</li>
  
  <li><strong>Available in Multiple Pipe Sizes (DN50–DN200):</strong> Compatible with standard Indian gas pipeline sizes; flanged connections simplify integration.</li>
  
  <li><strong>High Accuracy with Legal Metrology Compliance:</strong> ±1% or ±1.5% accuracy, certified under India’s Legal Metrology Act for regulated billing applications.</li>
  
  <li><strong>Robust Design for Harsh Indian Conditions:</strong> Engineered with durable aluminum or steel to withstand dust, heat, vibration, and corrosion.</li>
  
  <li><strong>Pulse Output Compatibility:</strong> LF and HF pulse outputs support seamless integration with SCADA and AMR systems under CGD projects.</li>
  
  <li><strong>Digital Metering Ready with IoT Integration:</strong> Supports GPRS/4G, remote telemetry, and cloud platforms — ideal for smart city and SEZ utility grids.</li>
  
  <li><strong>Minimal Pressure Loss:</strong> Turbine design reduces pressure drop, improving energy efficiency and lowering operational costs for consumers.</li>
  
  <li><strong>Low Maintenance & Long Service Life:</strong> Built for extended uptime and reduced service needs in remote, industrial, or EPC project environments.</li>
  
  <li><strong>MID & EN 12261 Certified:</strong> Globally recognized certifications for acceptance in PSU, CGD, and multinational tenders; backed by ISO 9001:2015 quality.</li>
</ul>          )}
          {activeTab === "Technical data" && (
            <ul>
  <li><strong>Meter Sizes:</strong> G16 to G400</li>
  <li><strong>Dimensions:</strong> DN40, DN50, DN80, and DN100</li>
  <li><strong>Operating Pressure:</strong> Up to 6 Bar</li>
  <li><strong>Accuracy:</strong>
    <ul>
      <li>From 0.2 Qmax to Qmax: ±1.5%</li>
      <li>Below 0.2 Qmax: ±2%</li>
    </ul>
  </li>
  <li><strong>Temperature Range:</strong>
    <ul>
      <li>Gas Temperature: –10°C to +60°C</li>
      <li>Ambient Temperature: –10°C to +60°C</li>
    </ul>
  </li>
  <li><strong>Certification:</strong> FTZÚ Type Examination Certificate (FTZÚ 15 ATEX 0172X)</li>
  <li><strong>Explosion Safety Marking:</strong> Ex II -/2G IIB T4</li>
  <li><strong>Installation Requirement:</strong> No straight run needed</li>
  <li><strong>Maintenance:</strong> Oil-free design for reduced service needs</li>
  <li><strong>Optional Integration:</strong> MID-certified Elcor Gas Volume Corrector</li>
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
