import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/Ultra-Nxt (1).png';






import related1 from '../../images/VFM 1.png';
import related2 from '../../images/VFM 1.png';
import related3 from '../../images/VFM 1.png';
import related4 from '../../images/d211.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1];
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
                 { img: related4, title: "GasPro RPD Gas Mete", link: "/product-detail/detail21" },
                 
               ];

  return (
    <div className="text-dark">
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Gas Flow Meters</p>
            <h3 className="fw-semibold">Ultra-NXT Ultrasonic Gas Flow Meter</h3>
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
             Ultra-Nxt Ultrasonic Gas Flow Meter
Precision Gas Measurement for Industrial & Utility Applications
The Ultra-Nxt Natural Gas Flow Meter is a state-of-the-art ultrasonic gas metering solution designed for industrial gas measurement, natural gas utilities, and commercial metering systems. Engineered for high-accuracy flow and volume measurement, it provides real-time compensation for temperature, pressure, and gas compressibility, delivering reliable performance even in the harshest environments.
With advanced multi-beam ultrasonic technology, a wide dynamic range of up to 1:200, and industry-leading data logging and communication options, Ultra-Nxt stands out as the ideal replacement for legacy membrane, rotary, and turbine gas meters.
🏭 Industry Applications
1. Natural Gas Distribution & Utilities
Ideal for city gas metering, smart grid integration, and utility billing, Ultra-Nxt ensures accurate consumption measurement with minimal pressure drop and silent operation — essential for residential and municipal deployments.
2. Industrial Gas Flow Monitoring
Trusted in sectors such as oil & gas, chemical processing, metal manufacturing, and pharmaceuticals, where precision and durability are crucial. Replaces outdated turbine and rotary meters with a low-maintenance, solid-state alternative.
3. Commercial Infrastructure
Used in commercial buildings, complexes, and industrial parks for bulk gas monitoring and integration with BMS (Building Management Systems) for centralized energy efficiency.
4. Hazardous Environments
With an explosion-proof design and resistance to magnetic fields and high humidity, Ultra-Nxt is suitable for hazardous zones in refineries, petrochemical plants, and LNG terminals.
Why Choose Ultra-Nxt?
12+ Year Service Life and MTBF of 60,000+ hours


Seamless integration with SCADA/IoT platforms


Lower installation and operational costs


Future-ready with smart grid and IIoT compatibility


Optimize your gas flow measurement systems with Ultra-Nxt — the smart, scalable, and sustainable choice for modern gas metering.


                </p>
              </div>
              
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li>High Accuracy Measurement: Volume accuracy of ±1.2% to ±2.3%, with optional calibration to ±0.75%</li>
  <li>Advanced Ultrasonic Technology: Measures flow by analyzing time-of-flight differences in ultrasonic pulses</li>
  <li>Temperature & Pressure Compensation: Auto-adjusts to environmental changes for reliable standard volume output</li>
  <li>Wide Dynamic Range: Up to 1:400 (standard); 1:600 with Ultra-Nxt 2024 Pro version</li>
  <li>Built-in Data Logger: Hourly, daily, and monthly data archiving with alarms and event logs</li>
  <li>Multiple Communication Protocols: RS-232, RS-485, and optical port</li>
  <li>Robust Environmental Tolerance: IP66 rated, explosion-proof (1Ex ib IIB T4 Gb X), operates from –40°C to +60°C</li>
  <li>Flexible Installation: Compact design with vertical or horizontal configuration; compatible with G10 to G4000 gas meter sizes</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Sizes: G6 up to G4000</li>
  <li>Measurement Accuracy Options: ±1.2% to ±2%</li>
  <li>Flow Range Turndown: 1:200</li>
  <li>Operating Temperature: –40°C to +60°C</li>
  <li>Maximum Pressure: 16 Bar</li>
  <li>Output Interfaces:
    <ul>
      <li>RS-232</li>
      <li>RS-485</li>
      <li>Optical ports</li>
    </ul>
  </li>
  <li>Connectivity Options: Built-in or external GSM/3G modems</li>
  <li>Protection Class: IP66</li>
  <li>Explosion-Proof Rating: 1Ex ib IIB T4 Gb X</li>
  <li>Measurable Gases:
    <ul>
      <li>Natural gas</li>
      <li>Fuel gases</li>
    </ul>
  </li>
  <li>Integrated Compensation: Built-in temperature, pressure, and gas correction (no external corrector required)</li>
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
