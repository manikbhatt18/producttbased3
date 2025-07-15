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
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Air Flow Meters</p>
            <h3 className="fw-semibold"> TRX Ultrasonic Air Meters </h3>
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
             Ultrasonic Air Flow Meter (TRX/TRZ Series)
Accurate. Efficient. Maintenance-Free.
The Ultrasonic Air Meter TRX Series is a high-precision, non-invasive flow measurement solution designed for compressed air and industrial gas applications. Engineered with advanced ultrasonic sensing technology, the TRX delivers long-term stability, zero pressure drop, and exceptional resistance to oil, moisture, and dust—making it the ideal choice for today's demanding production environments.
📈 Applications
Compressed Air Energy Audits


Factory Air Leakage Detection Systems


Industrial Gas Consumption Monitoring


HVAC and Pneumatic System Optimization


Multi-Factory Air Transfer Analysis

🔑 Why Choose the TRX Ultrasonic Air Flow Meter?
Whether you’re looking to reduce compressed air costs, monitor compressor efficiency, or implement predictive maintenance, the TRX Series provides unmatched performance, reliability, and cost-efficiency—all without system interruptions or pressure loss.

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
  <li>No Pressure Loss: Designed with a clear flow path and no moving parts, ensuring zero pressure drop and energy loss for improved system efficiency</li>
  <li>Long-Term Accuracy & Maintenance-Free Operation: High-accuracy measurement with no recalibration, filter replacements, or scheduled maintenance for up to 10 years</li>
  <li>Exceptional Durability in Harsh Environments: Robust construction resists oil mist, moisture, and dust for reliable performance in unfiltered compressed air lines</li>
  <li>Leak Detection & Low Flow Sensitivity: Wide turndown ratio (1:60) enables precise low flow and air leak detection, supporting proactive maintenance and energy savings</li>
  <li>Reverse Flow Measurement: Supports bi-directional flow, ideal for loop piping systems and multi-factory air distribution</li>
  <li>Multiple Gas Compatibility: Works with air, nitrogen, and inert gases; offers RS485 Modbus, analog (4–20 mA), pulse, and alarm outputs</li>
  <li>Energy Optimization Ready: With a watt-hour meter, calculates air/power ratio (kW/m³) for compressor efficiency and operational cost insights</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Pipe Range: DN25 – DN80</li>
  <li>Accuracy: ±1.3%RD (at 0.5 MPa, ordinary temperature, dry air or nitrogen)</li>
  <li>Fluid Temperature: –10°C to 60°C</li>
  <li>Working Pressure: 0 to less than 1 MPa (gauge pressure)</li>
  <li>Compensation: Built-in temperature and pressure compensation</li>
  <li>Power Supply: External 24 VDC ±10%</li>
  <li>Output Options:
    <ul>
      <li>4–20 mA (±0.5%FS)</li>
      <li>RS485</li>
    </ul>
  </li>
  <li>Measurable Fluids:
    <ul>
      <li>Compressed Air</li>
      <li>Nitrogen</li>
    </ul>
  </li>
  <li>Certifications: RoHS, CE, UKCA</li>
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
