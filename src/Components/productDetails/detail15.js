import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/p152.png';
import img2 from '../../images/p153.png';
import img3 from '../../images/p154.png';
import img4 from '../../images/p155.png';
import img5 from '../../images/p156.png';
import img6 from '../../images/p157.png';
import img7 from '../../images/p158.png';
import img8 from '../../images/p159.png';
import img9 from '../../images/p1510.png';
import img10 from '../../images/p1511.png';
import img11 from '../../images/p1512.png';
import img12 from '../../images/p1513.png';
import img13 from '../../images/p1514.png';
import img14 from '../../images/p1515.png';
import img15 from '../../images/p1516.png';
import img16 from '../../images/p1517.png';
import img17 from '../../images/Flow-Sensor-SS-20-600-1.png';
import img18 from '../../images/Flow-Sensor-SS-20-600-2.jpg';
import img19 from '../../images/Flow-Sensor-SS-20-600-3.jpg';
import img20 from '../../images/Flow-Sensor-SS-20-600-Deckel.jpg';
import img21 from '../../images/Flow-Sensor-SS-20-600-Durchgangskugelhahn.jpg';
import img22 from '../../images/Flow-Sensor-SS-23-700-EX-Deckel.png';
import img23 from '../../images/Flow-Sensor-SS-23-700-EX-Deckel2.png';
import img24 from '../../images/Flow-Sensor-SS-23-700-EX-Deckel.png.png';




import related1 from '../../images/product11(1).png';
import related2 from '../../images/p121.png';
import related3 from '../../images/of-z_h146.png';
import related4 from '../../images/TRX 1.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24];
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
                 { img: related1, title: "Contoil / RPD Flow Meters", link: "/product-detail/detail11" },
                 { img: related2, title: " Oval Gear Flow Meters (OGM) ", link: "/product-detail/detail12" },
                 { img: related3, title: " Micro Stream Flow Sensor OFZ Series", link: "/product-detail/detail13" },
                 { img: related4, title: "TRX Ultrasonic Air Meters", link: "/product-detail/detail14" },
                 
               ];

  return (
    <div className="text-dark">
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Air Flow Meters</p>
            <h3 className="fw-semibold">Thermal Mass Flow Sensors (Insertion)</h3>
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
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Probe Length: Up to 600 mm (special length 1000 mm on request)</li>
  <li>Pressure Range: 0–16 Bar (40 Bar optional)</li>
  <li>Velocity: Up to 220 m/s</li>
  <li>Accuracy: High precision (±1% of measured value + 0.4% fmr; minimum 0.08 m/s)</li>
  <li>Analogue Outputs for Temperature and Flow Rate:
    <ul>
      <li>0–10 V</li>
      <li>4–20 mA (protected against short circuits)</li>
      <li>Pulse</li>
    </ul>
  </li>
  <li>Operating Temperature: 20°C to +120°C (350°C high-temp optional)</li>
  <li>ATEX Category: II 3G Ex nA ic IIC T4 Gc (on request)</li>
  <li>Measurable Fluids:
    <ul>
      <li>Compressed Air</li>
      <li>Nitrogen</li>
      <li>Oxygen</li>
      <li>Biogas</li>
      <li>Natural Gas</li>
      <li>Other specialty gases</li>
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
