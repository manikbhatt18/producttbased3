import React, { useState, useEffect, useRef } from 'react';//no image given
import { Link } from 'react-router-dom';

import img1 from '../../images/1.png';
import img2 from '../../images/1 (1).png';
import img3 from '../../images/3.png';
import img4 from '../../images/Background.png';


import related1 from '../../images/Buf lite (1) (1).png';
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
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Ultrasonic water meters</p>
            <h3 className="fw-semibold"> Clamp-ON (Portable) ULTRASONIC PF 222/333 </h3>
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
              <li>Compact electronic body, no moving parts</li>
              <li>Maintenance-free design</li>
              <li>Wired/Wireless communication options</li>
            </ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Principle: Transit Time (CE Approved)</li>
  <li>Pipe Range: 13 mm ID to 10,000 mm OD</li>
  <li>Transducer Operating Temperature:
    <ul>
      <li>Standard: –20°C to +135°C</li>
      <li>Optional Hi-Temp: –20°C to +200°C</li>
    </ul>
  </li>
  <li>Display Features: Flow rate, total flow, signal level, battery level</li>
  <li>Sensing Type: Non-invasive</li>
  <li>Language Options: English, French, German, Spanish</li>
  <li>Carrying Case Protection: IP67 Rated</li>
  <li>Power Operation:
    <ul>
      <li>Battery Life: 14 Hours</li>
      <li>Charging Time: 2.5 Hours</li>
      <li>Battery or Mains Operated</li>
    </ul>
  </li>
  <li>Accuracy: ±0.5% to ±3% (Dependent on flow and pipe size)</li>
  <li>Turn Down Ratio: 100:1</li>
  <li>Data Communications: USB (Supports most USB 2.0 BOM drives)</li>
  <li>Output:
    <ul>
      <li>3 × Pulse Output</li>
      <li>4–20 mA Output</li>
    </ul>
  </li>
  <li>Data Logging:
    <ul>
      <li>Capacity: 100,000,000 data points</li>
      <li>Named Sites: 12</li>
      <li>Download Format: CSV via USB, exportable to Excel</li>
    </ul>
  </li>
  <li>Temperature Sensors: Clamp-on PT100 Class B, 4-wire
    <ul>
      <li>Range: 0°C to 200°C (32°F to 392°F)</li>
      <li>Resolution: 0.1°C (0.18°F)</li>
      <li>Minimum delta T: 0.3°C (Optional)</li>
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
                <Link to={product.id} className="text-decoration-none text-dark">
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
