import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/7600 (1) Enhanced.png';
import img2 from '../../images/7600 enhanced.png';



import related1 from '../../images/1 with iota enhance.png';
import related2 from '../../images/vn-eng-1.3.png';
import related3 from '../../images/Enhanced.png';
import related4 from '../../images/Untitled design (32) Enhanced.png';



import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1, img2];
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
                 { img: related1, title: "Electromagnetic Flow Meter (EMF Standard)", link: "/product-detail/detail7" },
                 { img: related2, title: " CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters ", link: "/product-detail/detail8" },
                 { img: related3, title: "  Multijet Water Meters, Aqua-Re Series ", link: "/product-detail/detail9" },
                 { img: related4, title: "Woltmann Water Meters, Aqua-Re Series", link: "/product-detail/detail10" },
                 
               ];

  return (
    <div className="text-dark">
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Ultrasonic water meters</p>
            <h3 className="fw-semibold"> Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes </h3>
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
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, quae.
                </p>
              </div>
              
            </div>
          )}

          {activeTab === "Features" && (
            <ul>
              
            </ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Ideal for open channels and partially filled pipes</li>
  <li>Measures flow velocity and level simultaneously</li>
  <li>Sensor Cable: 7.6 m / 25 ft, submersible, shielded 3-coaxial pairs</li>
  <li>Flow Rate Range:
    <ul>
      <li>Forward: 0.1 to 20 ft/sec</li>
      <li>Reverse: up to –5 ft/sec</li>
    </ul>
  </li>
  <li>Accuracy:
    <ul>
      <li>Velocity: ±2% of reading or ±0.04 ft/sec (whichever is greater)</li>
      <li>Level: ±0.25% of reading or ±0.08" (whichever is greater)</li>
    </ul>
  </li>
  <li>Enclosure: Watertight, NEMA4X (IP66), polycarbonate</li>
  <li>Totalizer: 14-digit display</li>
  <li>Calibration: Built-in 5-key programmer</li>
  <li>Outputs (Isolated):
    <ul>
      <li>4–20 mA</li>
      <li>0–5 V</li>
      <li>Flow, Level, and Velocity channels</li>
    </ul>
  </li>
  <li>Control Relays: Two SPDT relays (5 amp), programmable for:
    <ul>
      <li>Flow proportional pulse output</li>
      <li>Flow and/or level alarms</li>
    </ul>
  </li>
  <li>Datalogger: 128 MB storage (6.5 million points)</li>
  <li>Power Input: 100–240 VAC, 50/60 Hz, 10 VA max</li>
  <li>Certifications: CE, UL/SCA/EN 61010-1</li>
  <li>Note: Portable Doppler Effect (D550 Series) also available</li>
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
