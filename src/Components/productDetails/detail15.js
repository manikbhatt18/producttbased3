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
import related4 from '../../images/VFM 1.png';


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
                 { img: related4, title: "VFM Vortex Flow Meters", link: "/product-detail/detail16" },
                 
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
              <p className="text-muted">Air Flow Meters</p>
              <h3 className="fw-semibold">Thermal Mass Flow Sensors (Insertion)</h3>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">&#9679;</li>
                <li className="mb-2">&#9679;</li>
                <li className="mb-2">&#9679;</li>
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
                  <p>
                    
                  </p>
                </div>
                
              </div>
            )}
            {activeTab === "Features" && (
              <p></p>
            )}
            {activeTab === "Technical data" && (
              <ul>
  <li><strong>Probe Length:</strong> Up to 600 mm (Special Length: 1000 mm available on request)</li>
  <li><strong>Pressure Range:</strong> 0–16 Bar (Optional extension up to 40 Bar)</li>
  <li><strong>Velocity Range:</strong> Up to 220 m/s</li>
  <li><strong>Accuracy:</strong> ±1% of measured value + (0.4% fmr; minimum 0.08 m/s)</li>
  <li><strong>Analog Outputs:</strong> Temperature and Flow Rate — 0...10 V / 4...20 mA (short-circuit protected) / Pulse</li>
  <li><strong>Operating Temperature:</strong> 20°C to +120°C (Optional high-temp version up to 350°C)</li>
  <li><strong>Explosion Protection:</strong> ATEX Category II 3G Ex nA ic IIC T4 Gc (available on request)</li>
  <li><strong>Measurable Fluids:</strong> Compressed Air, Nitrogen, Oxygen, Biogas, Natural Gas, and other specialty gases</li>
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
