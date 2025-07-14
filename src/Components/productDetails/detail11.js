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



import related2 from '../../images/img3.jpg';
import related3 from '../../images/img5.jpg';
import related4 from '../../images/img4.jpg';


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
    { id: 2, img: related2, title: "JS Smart D+ (up to R200)" },
    { id: 3, img: related3, title: "JS Smart+ (up to R100)" },
    { id: 4, img: related4, title: "JS Master C+ (up to R160)" },
  ];

  return (
    <div className="text-dark">
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Positive Displacement Oil Meters</p>
            <h3 className="fw-semibold"> Contoil / RPD Flow Meters </h3>
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
             Contoil® Oil Flow Meters are precision-engineered for accurate measurement of fuel and lubrication oil in the most demanding industrial environments. Built for reliability and flexibility, these meters offer consistent performance regardless of fluid temperature or viscosity. Their compact design allows for easy installation in space-restricted systems, making them ideal for integration with power generators, boilers, burners, and closed-loop lubrication systems.
Applications Across Industries:
Fuel Consumption Measurement for:


Oil burners in heating systems and industrial furnaces, Unloading Applications
Ships, diesel locomotives, and emergency power units
Combined heat and power (CHP) systems


Lubrication Monitoring in:


Closed-loop systems for machinery bearings and motors
Machine test benches and engine testing labs


Remote Integration:


Optional digital output for integration into superior control systems and remote monitoring platforms
                </p>
              </div>
              <div className="col-md-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/WgR0zWmuPaQ"
                    title="JS Smart C+ video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <ul>
  <li>Unmatched Accuracy (0.5%): Reliable fuel consumption monitoring with temperature- and viscosity-independent readings</li>
  <li>Flexible Installation: Mount horizontally, vertically, or at an incline — even in space-constrained systems without the need for straight inlet/outlet runs</li>
  <li>Supports batching, dosing, and filling operations</li>
  <li>Dual-Side Pump Compatibility: Install on either the pressure or suction side of pumps</li>
  <li>Operational Simplicity: Mechanical display with a resettable counter and optional limiting value switch for flow rate control</li>
  <li>Built-In Diagnostics: Easy function checks, fast fault analysis, and on-site repairability reduce downtime and costs</li>
  <li>Compact Design: Optimized for tight enclosures and complex piping systems</li>
</ul>
          )}

          {activeTab === "Technical data" && (
<ul>
  <li>Pipe Range: DN4 - DN80</li>
  <li>Outputs:
    <ul>
      <li>Pulse</li>
      <li>Analog 4–20 mA (continuous for remote monitoring)</li>
    </ul>
  </li>
  <li>External Power Supply: Battery back-up option</li>
  <li>End Connections: Flange (DIN, ANSI, JIS), threaded ends</li>
  <li>Accuracy: 0.5% to 1%</li>
  <li>Performance: Independent of viscosity and temperature</li>
  <li>Display: Mechanical with resettable totalizer</li>
  <li>Installation: No straight run required</li>
  <li>Temperature Range: 130°C and 180°C</li>
  <li>Nominal Pressure: PN 16, PN 25, and PN 40</li>
  <li>Suitable Applications:
    <ul>
      <li>Heating fuel (extra light / light)</li>
      <li>Medium and heavy naphtha</li>
      <li>Diesel, petrol, and other lubricating liquids (oils)</li>
    </ul>
  </li>
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
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
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
