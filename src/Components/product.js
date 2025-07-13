import React, { useState, useEffect, useRef } from 'react';
import img1 from '../images/m1.png';
import img2 from '../images/m2.png';
// import img3 from '../images/ultrimis3.jpg';
// import img4 from '../images/ultrimis.jpg';
import related1 from '../images/img2.jpg'; // Add the 4 related images from your screenshot
import related2 from '../images/img3.jpg';
import related3 from '../images/img5.jpg';
import related4 from '../images/img4.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  const images = [img1, img2,];
  const [mainImage, setMainImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("Application");
  const tabContentRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.classList.remove('fade-in');
      void tabContentRef.current.offsetWidth;
      tabContentRef.current.classList.add('fade-in');
    }
  }, [activeTab]);

  const relatedProducts = [
    { img: related1, title: "JS Smart C+ (up to R160)" },
    { img: related2, title: "JS Smart D+ (up to R200)" },
    { img: related3, title: "JS Smart+ (up to R100)" },
    { img: related4, title: "JS Master C+ (up to R160)" },
  ];

  return (
    <div className="text-dark">
      {/* Product Image and Info Section */}
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

          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Ultrasonic water meters</p>
            <h3 className="fw-semibold">High-quality Ultrimis ultrasonic water meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; Many patented design and technological features</li>
              <li className="mb-2">&#9679; The lightest and smallest ultrasonic water meter available to our customers</li>
              <li className="mb-2">&#9679; None of the materials in contact with water used for the construction of this meter contain heavy metals</li>
            </ul>
            <button className='my-2 rounded'>Enquiry Now</button>
          </div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="container sticky-top bg-white shadow-sm" style={{ top: '0px', zIndex: 1020 }}>
        <ul className="nav nav-tabs border-0">
          {[
            "Description",
            "Features",
            "Technical data",
            "Downloads",
          ].map((tab) => (
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
                  Our ultrasonic water meters measure the flow and volume of water up to a max.
                  temperature of 50°C or 70°C using a closed-loop system...
                </p>
              </div>
              <div className="col-md-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/WgR0zWmuPaQ"
                    title="Ultrimis video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Measurement range" && (
            <p>Measuring range: Q3/Q1: R160-H/R160-V, R200-H/R200-V (DN20-25), R250-H/R250-V (DN32-50)</p>
          )}

          {activeTab === "Features" && (
            <p>
              Compact ultrasonic water meter with electronic measurement of water consumption, no moving parts...
            </p>
          )}

          {activeTab === "W- Sonic Technology" && (
            <p>
              W-Sonic technology provides advanced ultrasonic signal processing that ensures the highest accuracy...
            </p>
          )}

          {activeTab === "Technical data" && (
            <p>
                  <ul className="list-group">
        <li className="list-group-item">Pipe Range: DN15 - DN25</li>
        <li className="list-group-item"> Maximum permissible error Q1 &lt; Q &lt; Q2: 5%</li>
        <li className="list-group-item"> Nominal Pressure: 16 Bar</li>
        <li className="list-group-item"> Temperature Range: T30, T50, T90</li>
        <li className="list-group-item"> Hydraulic Part Material: Brass</li>
        <li className="list-group-item"> Installation: Horizontal/Vertical, Return flow/Forward flow</li>
        <li className="list-group-item"> Protection: IP65 (IP68 optional)</li>
        <li className="list-group-item"> End Connection: Threaded (ANSI Flanged Optional)</li>
        <li className="list-group-item"> Display: LCD, 8 digits + icons, Units in m³</li>
        <li className="list-group-item"> Interfaces: Pulse, M-BUS, Wireless M-BUS, RS485, Optical, RF Ultra Narrow Band</li>
        <li className="list-group-item"> In-Built LoRaWAN: Optional</li>
        <li className="list-group-item"> Power Supply: Battery Operated 3.6 V Lithium (12 years)</li>
        <li className="list-group-item"> Date History in EEPROM: 60 Months, 184 Days, 1488 Hours</li>
      </ul>

            </p>
          )}

          {activeTab === "Downloads" && (
            <p>
              Visit our documentation page to download the full technical specifications and data sheets.
            </p>
          )}
        </div>
      </div>

      
 {/* YOU MAY ALSO BE INTERESTED IN Section */}
<div style={{ backgroundColor: '#f6f8fc' }} className="py-5">
  <div className="container">
    <h5 className="fw-semibold mb-4">YOU MAY ALSO BE INTERESTED IN</h5>
    <div className="row justify-content-center">
      {relatedProducts.map((product, idx) => (
        <div className="col-6 col-md-3 mb-4 d-flex justify-content-center" key={idx}>
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
        </div>
      ))}
    </div>

   
    <div className="row text-center">
      {relatedProducts.map((product, idx) => (
        <div className="col-6 col-md-3 mb-3" key={`title-${idx}`}>
          <p className="fw-medium mb-0" style={{ fontSize: '15px' }}>{product.title}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      
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

export default Product;
