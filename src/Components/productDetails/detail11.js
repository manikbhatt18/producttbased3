import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/product11(1).png';
import img2 from '../../images/product11(2).png';
import img3 from '../../images/product11(3).png';
import img4 from '../../images/product11(4).png';
import img5 from '../../images/product11(5).png';
import img6 from '../../images/product11(6).png';
import img7 from '../../images/product11(7).png';
import img8 from '../../images/product11(8).png';
import img9 from '../../images/product11(9).png';
import img10 from '../../images/RPD png.png';
import img11 from '../../images/RPD SERIES FLOW METER.png';
import img12 from '../../images/product11(12).png';
import img13 from '../../images/contoil (2).png';
import img14 from '../../images/contoil (3).png';
import img15 from '../../images/contoil.png';




import related1 from '../../images/p121.png';
import related2 from '../../images/of-z_h146.png';
import related3 from '../../images/TRX 1.png';
import related4 from '../../images/p152.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1, img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15];
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
                 
                 { img: related1, title: " Oval Gear Flow Meters (OGM) ", link: "/product-detail/detail12" },
                 { img: related2, title: " Micro Stream Flow Sensor OFZ Series", link: "/product-detail/detail13" },
                 { img: related3, title: "TRX Ultrasonic Air Meters", link: "/product-detail/detail14" },
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
            <p className="text-muted">Positive Displacement Oil Meters </p>
            <h3 className="fw-semibold">Contoil / RPD Flow Meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; ContOil® Inline Oil Flow Meter -</li>
              <li className="mb-2">&#9679;For Boilers, Generators, and Engine Test Benches</li>
              <li className="mb-2">&#9679;High Accuracy Volumetric Flow Meters</li>
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
      <li>Contoil® Oil Flow Meters are precision-engineered for accurate fuel and lubrication oil measurement.</li>
      <li>Designed for demanding industrial environments with high reliability and flexibility.</li>
      <li>Performance remains consistent regardless of fluid temperature or viscosity.</li>
      <li>Compact design allows for easy integration into space-constrained systems.</li>
      <li>Ideal for use with power generators, boilers, burners, and closed-loop lubrication systems.</li>
    </ul>
  </li>

  <li><strong>Applications Across Industries:</strong>
    <ul>
      <li><em>Fuel Consumption Measurement:</em>
        <ul>
          <li>Oil burners in heating systems and industrial furnaces</li>
          <li>Unloading applications</li>
          <li>Ships, diesel locomotives, and emergency power units</li>
          <li>Combined heat and power (CHP) systems</li>
        </ul>
      </li>
      <li><em>Lubrication Monitoring:</em>
        <ul>
          <li>Closed-loop systems for machinery bearings and motors</li>
          <li>Machine test benches and engine testing laboratories</li>
        </ul>
      </li>
      <li><em>Remote Integration:</em>
        <ul>
          <li>Optional digital output for integration with control systems</li>
          <li>Supports remote monitoring platforms</li>
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
  <li><strong>Unmatched Accuracy (±0.5%):</strong> Reliable fuel consumption monitoring that remains stable regardless of fluid temperature or viscosity.</li>
  <li><strong>Flexible Installation:</strong> Can be mounted horizontally, vertically, or at an incline—ideal for space-constrained systems and adaptable to batching, dosing, and filling operations.</li>
  <li><strong>Dual-Side Pump Compatibility:</strong> Installs on both pressure and suction sides of pumps.</li>
  <li><strong>Operational Simplicity:</strong> Mechanical display with resettable counter and optional limiting value switch for flow rate control.</li>
  <li><strong>Built-In Diagnostics:</strong> Enables function checks, fault analysis, and on-site repairability to minimize downtime and service costs.</li>
  <li><strong>Compact Design:</strong> Suitable for tight enclosures and complex piping environments.</li>
</ul>          )}
          {activeTab === "Technical data" && (
           <ul>
  <li><strong>Pipe Range:</strong> DN4 to DN80</li>
  <li><strong>Output Types:</strong> Pulse output, Analog 4–20 mA (continuous for remote monitoring)</li>
  <li><strong>Power Supply:</strong> External power with battery backup option</li>
  <li><strong>Connection Type:</strong> Flange (DIN, ANSI, JIS) or threaded ends</li>
  <li><strong>Accuracy:</strong> ±0.5% to ±1%</li>
  <li><strong>Viscosity & Temperature Independence:</strong> Measurement unaffected by changes in fluid viscosity or temperature</li>
  <li><strong>Display:</strong> Mechanical with resettable totalizer</li>
  <li><strong>Straight Run Requirement:</strong> Not required</li>
  <li><strong>Temperature Range:</strong> 130°C and 180°C versions available</li>
  <li><strong>Nominal Pressure Ratings:</strong> PN 16, PN 25, and PN 40 bar</li>
  <li><strong>Suitable Applications:</strong>
    <ul>
      <li>Heating fuels: Extra light, Light</li>
      <li>Petroleum derivatives: Medium and heavy naphtha, diesel, petrol</li>
      <li>Lubricating liquids: Various oils</li>
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
