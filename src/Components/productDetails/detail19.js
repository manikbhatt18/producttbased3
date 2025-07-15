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
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Gas Flow Meters</p>
            <h3 className="fw-semibold">EQZ/EQZK Radial Turbine Gas Meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; Compact size with durable materials</li>
              <li className="mb-2">&#9679; Perfect for residential and commercial usage</li>
              <li className="mb-2">&#9679; Advanced features with long battery life</li>
            </ul>
            <button className='my-2 rounded'>Enquiry Now</button>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <div className="border mb-3 p-2 rounded shadow-sm" style={{ width: '100%', maxWidth: '300px' }}>
  <img
    src={mainImage}
    alt="Main Meter"
    className="img-fluid"
    style={{
      maxHeight: '220px',       // Controls height
      width: '100%',            // Keep width responsive
      objectFit: 'contain',     // Prevents stretching
    }}
  />
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
                      border: mainImage === img ? '2px solid #003e7e' : '1px solid #ddd',
                      borderRadius: '0px'
                    }}
                  />
                  <div
                    style={{
                      height: '3px',
                      width: '60%',
                      backgroundColor: mainImage === img ? '#cc0033' : 'transparent',
                      marginTop: '3px',
                      borderRadius: '2px',
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="container sticky-top bg-white shadow-sm" style={{ top: '0px', zIndex: 1020 }}>
        <ul className="nav nav-tabs border-0">
          {["Description", "Features", "Technical data", "Downloads"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link border-0 ${activeTab === tab ? 'bg-dark text-white' : 'text-dark'}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  borderRadius: '0px',
                  padding: '12px 20px',
                  fontWeight: '500'
                }}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="container">
        <div ref={tabContentRef} className="p-4 border shadow-sm bg-white fade-in">
          {activeTab === "Description" && (
            <div className="row">
              <div className="col-md-6">
                <p>
             The EQZ  radial turbine gas meters by Elgas are engineered for high-precision measurement of natural gas and other clean, non-corrosive gases. Widely adopted across India these meters deliver accurate volumetric flow readings in both industrial and commercial gas distribution networks.
Designed for performance in high-temperature environments and challenging climatic conditions, EQZ meters ensure long-term reliability, minimal pressure loss, and easy integration with telemetry and smart metering systems.

Applications of EQZ Turbine Gas Meters in India
Industrial Gas Flow Monitoring
 Used for high-accuracy measurement of natural gas consumption in steel plants, refineries, and chemical industries.
 Ideal for process control and energy optimization in large-scale industrial operations.

City Gas Distribution (CGD) Networks
 Widely applied in urban gas distribution under CGD projects approved by PNGRB in India.
 Ensures reliable flow data for billing and pipeline integrity in municipal gas supply systems.

Power Plants & Captive Power Units
 Used in gas-based thermal and combined cycle power plants for metering fuel gas input.
 Enables fuel efficiency tracking and regulatory compliance with CEA and DISCOM requirements.

Commercial & Utility Metering
 Installed in commercial complexes, malls, hospitals, and SEZs for accurate utility gas billing.
 Supports LPG, PNG, and CNG distribution within multi-tenant and shared infrastructure setups.

Oil & Gas Pipelines (Upstream/Midstream)
 Deployed in custody transfer and flow measurement of natural gas across oil & gas pipeline networks.
 Suitable for ONGC, GAIL, IndianOil, and EPC contractor projects requiring robust metering.

EPC and Infrastructure Projects
 Used in gas metering packages supplied to large EPC firms executing infrastructure and industrial projects.
 Preferred by L&T, Tata Projects, and other contractors for government and private sector builds.

Research, Labs & Calibration Centers
 Used in metrology labs and test benches for calibrating flow systems and developing gas control technologies.
 Supports precision testing for R&D in Indian energy and mechanical engineering institutes.

Rural & Remote Industrial Clusters
 Installed in decentralized energy systems, agro-industries, and remote industrial gas networks.
 Engineered for low-maintenance operation in off-grid or semi-urban regions.

                </p>
              </div>
              
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li>Wide Flow Range for Industrial Use: Handles high gas volumes up to 10,000 m³/h, ideal for large-scale industrial gas metering in India</li>
  <li>Available in Multiple Pipe Sizes (DN50 to DN200): Compatible with standard Indian gas pipeline sizes in CGD and industrial setups; flanged connections simplify integration</li>
  <li>High Accuracy with Legal Metrology Compliance: ±1% or ±1.5% accuracy ensures billing-grade precision; eligible for certification under India’s Legal Metrology Act</li>
  <li>Robust Design for Harsh Indian Conditions: Durable aluminum or steel body resists dust, heat, corrosion, vibration, and mechanical stress</li>
  <li>Pulse Output Compatibility for Smart Gas Monitoring: LF and HF pulse outputs support SCADA and AMR integration, aligning with India’s CGD smart metering goals</li>
  <li>Digital Metering Ready with IoT Integration: Compatible with remote telemetry, GPRS/4G, and cloud platforms — ideal for smart city, SEZ, and ULB utility networks</li>
  <li>Minimal Pressure Loss for Efficient Gas Flow: Turbine design minimizes pressure drop, enhancing energy efficiency and lowering operational costs</li>
  <li>Low Maintenance & Long Service Life: Engineered for durability and low service needs, perfect for remote or rural deployment in Indian oil & gas EPC projects</li>
  <li>MID & EN 12261 Certified for Global and Indian Utility Projects: Backed by ISO 9001:2015 quality standards; accepted across Indian PSU, CGD, and multinational tenders</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Sizes: G16 up to G400</li>
  <li>Dimensions: DN 40, DN 50, DN 80, DN 100</li>
  <li>Operating Pressure: Maximum 6 bar</li>
  <li>Accuracy:
    <ul>
      <li>0.2 Qmax to Qmax: ±1.5%</li>
      <li>Below 0.2 Qmax: ±2%</li>
    </ul>
  </li>
  <li>Operating Temperature Range:
    <ul>
      <li>Gas Temperature: –10°C to +60°C</li>
      <li>Ambient Temperature: –10°C to +60°C</li>
    </ul>
  </li>
  <li>Type Examination Certificate: FTZÚ 15 ATEX 0172X</li>
  <li>Equipment Marking: Ex II -/2G IIB T4</li>
  <li>Installation: No straight run required</li>
  <li>Maintenance: Oil-free, low-maintenance design</li>
  <li>Optional Feature: Elcor MID-certified gas volume corrector</li>
</ul>
          )}

          {activeTab === "Downloads" && (
            <p>Download data sheets and certifications from our documentation portal.</p>
          )}
        </div>
      </div>

      {/* YOU MAY ALSO BE INTERESTED IN Section */}
      <div style={{ backgroundColor: '#f6f8fc' }} className="py-5">
        <div className="container">
          <h5 className="fw-semibold mb-4">YOU MAY ALSO BE INTERESTED IN</h5>
          <div className="row justify-content-center">
            {relatedProducts.map((product) => (
              <div className="col-6 col-md-3 mb-4 d-flex justify-content-center" key={product.id}>
                <Link to={product.link} className="text-decoration-none text-dark">
                  <div
                    className="d-flex flex-column align-items-center p-3 shadow-sm"
                    style={{
                      backgroundColor: '#ffffff',
                      width: '180px',
                      height: '180px',
                      display: 'flex',
                      justifyContent: 'center',
                      borderRadius: '0px',
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
                  <p className="fw-medium text-center mt-2" style={{ fontSize: '15px' }}>{product.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
