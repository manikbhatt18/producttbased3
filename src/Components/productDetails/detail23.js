import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/conical.png';
import img2 from '../../images/conical 02.png';
import img3 from '../../images/conical 03.png';







import related1 from '../../images/d211.png';
import related2 from '../../images/Biogas  New 2.png';
import related3 from '../../images/MTFM (1) edit.png';
import related4 from '../../images/Acrylic Rotameter enhanced (1).png';

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
                 { img: related1, title: "GasPro RPD Gas Meter", link: "/product-detail/detail21" },
                 { img: related2, title: "UF-Biosonic (Ultrasonic Flow Measurement for Biogas)", link: "/product-detail/detail22" },
                 { img: related3, title: "Metal tube Rotameters (Variable Area measurement)", link: "/product-detail/detail24" },
                 { img: related4, title: "Acrylic / Glass Tube Rotameters ", link: "/product-detail/detail25" },
                 
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
              <p className="text-muted">Gas Flow Meters</p>
              <h3 className="fw-semibold">Conical shaped Flow meter </h3>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">&#9679;</li>
                <li className="mb-2">&#9679; </li>
                <li className="mb-2">&#9679; </li>
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
      <li>High-performance differential pressure flow meter for complex gas and steam applications</li>
      <li>Centrally suspended cone reshapes velocity profile for accurate, stable measurements</li>
      <li>Minimal pressure drop and compact installation</li>
      <li>Suited for challenging industrial environments and difficult fluid types</li>
      <li>Delivers consistent, repeatable performance with low maintenance and extended service life</li>
    </ul>
  </li>

  <li><strong>Application-Specific Use Cases:</strong>
    <ul>
      <li><strong>Biogas:</strong> Accurate measurement of low-pressure, high-moisture flows; ideal for digesters and renewable systems</li>
      <li><strong>Coke Oven Gas:</strong> Corrosion and dust resistant; reliable in fluctuating steel plant conditions</li>
      <li><strong>Coal Bed Methane (CBM):</strong> Suitable for low-pressure gas extraction in upstream operations</li>
      <li><strong>Gas Mixtures:</strong> Maintains high accuracy across blended or multi-component gas streams</li>
      <li><strong>Dust-Laden Air:</strong> Reliable in particulate-heavy air; ideal for mining, exhaust, and ventilation systems</li>
      <li><strong>Steam (Saturated/Superheated):</strong> Reduces head loss and noise; dependable in boiler and power plant applications</li>
    </ul>
  </li>
</ul>
                </div>
                
              </div>
            )}
            {activeTab === "Features" && (
<ul>
  <li><strong>High Accuracy & Repeatability:</strong> ±1.0% accuracy and ±0.5% repeatability, ensuring consistent performance even in harsh flow environments.</li>
  <li><strong>Wide Turndown Ratio:</strong> Capable of handling variable flow conditions with up to 10:1 rangeability — superior to conventional orifice meters (typically 3:1).</li>
  <li><strong>Minimal Signal Noise:</strong> Generates high-frequency, low-noise signals optimized for gas and steam applications requiring signal stability.</li>
  <li><strong>Self-Conditioning Flow Design:</strong> Built-in flow conditioner eliminates need for long straight pipe runs — only 0–3D upstream and 0–1D downstream required.</li>
  <li><strong>Low Head Loss:</strong> Optimized conical profile reduces pressure drop, enhancing overall system efficiency and lowering energy consumption.</li>
  <li><strong>Durable Construction for Harsh Media:</strong> Available in SS316, SS304, Duplex, Hastelloy, and Carbon Steel — corrosion- and heat-resistant materials tailored for aggressive fluids.</li>
  <li><strong>Custom Sizing Options:</strong> Available from 0.5" to over 120", with flanged, threaded, or welded-end connections for diverse installation needs.</li>
  <li><strong>Smart Instrumentation Integration:</strong> Compatible with digital indicators, totalizers, 3-way manifolds, and differential pressure transmitters for complete flow monitoring systems.</li>
</ul>            )}
            {activeTab === "Technical data" && (
              <ul>
  <li><strong>Pipe Range:</strong> DN10 to DN3000 and larger (custom sizing available)</li>
  <li><strong>System Accuracy:</strong> ±1% for total measurement system</li>
  <li><strong>Turn Down Ratio:</strong> Up to 10:1 with compact installation</li>
  <li><strong>Body Material Options:</strong> 
    <ul>
      <li>Duplex 2205</li>
      <li>Stainless Steel: 304 or 316</li>
      <li>Hastelloy C-276</li>
      <li>254 SMO</li>
      <li>Carbon Steels</li>
      <li>Special materials on request</li>
    </ul>
  </li>
  <li><strong>End Fittings:</strong> Flanged, threaded, hub, or weld-end (custom interfaces available)</li>
  <li><strong>RTD Sensor:</strong>
    <ul>
      <li>Type: PT-100, thin film</li>
      <li>Temperature Range: –58°F to +752°F (–50°C to +400°C)</li>
    </ul>
  </li>
  <li><strong>Manifold Configuration:</strong> 3-valve setup</li>
  <li><strong>Differential Pressure (dP) Transmitter:</strong>
    <ul>
      <li>Housing: F30 Aluminum</li>
      <li>Membrane: 316L Stainless Steel</li>
      <li>Enclosure Rating: NEMA 4X/6P, IP66/IP67</li>
      <li>Electrical Connection: NPT 1/2" thread</li>
    </ul>
  </li>
  <li><strong>Flow Computer Output:</strong> 4–20 mA and isolated pulse signal</li>
  <li><strong>Pressure Range:</strong> Up to 1500 psi (100 bar)</li>
  <li><strong>Temperature Range:</strong> Up to 1600°F (870°C)</li>
  <li><strong>Suitable Applications:</strong>
    <ul>
      <li>Biogas</li>
      <li>Coke Oven Gas</li>
      <li>Coal Bed Methane (CBM)</li>
      <li>Mixed Gases</li>
      <li>Dust-laden Air</li>
      <li>Saturated and Superheated Steam</li>
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
