import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/Buf lite1.png';
import img2 from '../images/Buf lite-2-1.png';
import related1 from '../images/Copy of Old 1.png';
import related2 from '../images/1.png';
import related3 from '../images/1.png';
import related4 from '../images/1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
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
    { img: related1, title: "INLINE ULTRASONIC ROBUST Series", link: "/product-detail/detail2" },
    { img: related2, title: "INTRUSIVE ULTRASONIC UF 1500 Series", link: "/product-detail/detail3" },
    { img: related3, title: "Clamp-ON (Fixed) ULTRASONIC UF 1500 Series", link: "/product-detail/detail4" },
    { img: related4, title: "Clamp-ON (Portable) ULTRASONIC PF 222/333", link: "/product-detail/detail5" },
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
            <p className="text-muted">Water Meters</p>
            <h3 className="fw-semibold">Domestic Ultrasonic Flow Meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679; Many patented design and technological features</li>
              <li className="mb-2">&#9679; The lightest and smallest ultrasonic water meter available to our customers</li>
              <li className="mb-2">&#9679; None of the materials in contact with water used for the construction of this meter contain heavy metals</li>
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
                  Our ultrasonic water meters measure the flow and volume of water up to a max.
                  temperature of 50°C or 70°C using a closed-loop system...
                </p>
              </div>
              
            </div>
          )}
          {activeTab === "Features" && (
            <p>Compact ultrasonic water meter with electronic measurement of water consumption, no moving parts...</p>
          )}
          {activeTab === "Technical data" && (
            <ul>
              <li>Pipe Range: DN15 - DN25</li>
              <li>Maximum Permissible Error: Q1 &lt; Q &lt; Q2 - 5%</li>
              <li>Nominal Pressure: 16 Bar</li>
              <li>Temperature Range: T30, T50, T90 (°C)</li>
              <li>Hydraulic Part Material: Brass</li>
              <li>Installation: Return flow / forward flow, horizontal / vertical</li>
              <li>Protection: IP65 (IP68 optional)</li>
              <li>End Connection: Threaded (ANSI Flanged optional)</li>
              <li>Display: LCD, 8 digits + icons, Units m³</li>
              <li>Interfaces:
                <ul>
                  <li>Pulse</li>
                  <li>M-BUS</li>
                  <li>Wireless M-BUS</li>
                  <li>RS485</li>
                  <li>Optical</li>
                  <li>RF ultra narrow band</li>
                </ul>
              </li>
              <li>In-Built LoraWAN: Optional</li>
              <li>Power Supply: Battery operated (3.6 V, Lithium), 12 years life</li>
              <li>Data History in EEPROM Memory:
                <ul>
                  <li>60 Months</li>
                  <li>184 Days</li>
                  <li>1488 Hours</li>
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
  background-color: #ffcc00;
  color: black;
  border: none;
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
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
  transition: transform 0.4s ease;
  z-index: 1;
}

.btn-enquiry:hover::before {
  transform: translateX(0);
}

.btn-enquiry span {
  position: relative;
  z-index: 2;
  transition: color 0.4s ease;
}

.btn-enquiry:hover span {
  color: white;
}



`}</style>

    </div>
  );
}

export default Product;
