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
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Steam Flow Meters</p>
            <h3 className="fw-semibold">Conical shaped Flow meter</h3>
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
The IOTAFLOW Conical Shaped Flow Meter (CSF) is a high-performance differential pressure flow meter engineered for challenging industrial conditions where precision, reliability, and compact installation are critical. Its unique centrally suspended cone design reshapes the velocity profile of the flow, resulting in exceptional accuracy, stable signal output, and minimal pressure drop—ideal for industries handling difficult fluids such as Biogas, CBM, Steam, and Dust-Laden Air.
</p>

<p>
Whether you're measuring corrosive gases, hot steam, or low-pressure flows, the CSF meter ensures consistent, repeatable performance with low maintenance and long service life.
</p>

<h4>Application-Specific Use Cases</h4>
<p>Ideal for industrial flow measurement in both standard and aggressive service environments:</p>

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Application Area</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Biogas</td>
      <td>Measures variable, low-pressure flows with high moisture content and particulates. Excellent for digesters and renewable gas systems.</td>
    </tr>
    <tr>
      <td>Coke Oven Gas</td>
      <td>Resistant to corrosive and dusty by-products in steel plants; stable in fluctuating operating conditions.</td>
    </tr>
    <tr>
      <td>Coal Bed Methane (CBM)</td>
      <td>Suitable for low-pressure gas extraction and monitoring in upstream energy sectors.</td>
    </tr>
    <tr>
      <td>Gas Mixtures</td>
      <td>High accuracy for blended or multi-component gas streams; maintains performance with wide turndown.</td>
    </tr>
    <tr>
      <td>Dust-Laden Air</td>
      <td>Maintains measurement accuracy even in air with particulates; ideal for ventilation, exhaust, and mining systems.</td>
    </tr>
    <tr>
      <td>Steam (Saturated/Superheated)</td>
      <td>Reduces noise and head loss in both high- and low-pressure steam lines; ideal for power plants and boiler monitoring.</td>
    </tr>
  </tbody>
</table>
              </div>
              
            </div>
          )}

          {activeTab === "Features" && (
<ul>
  <li>High Accuracy (±1.0%) & Repeatability (±0.5%): Ensures consistent performance in harsh and variable flow environments</li>
  <li>Wide Turndown Ratio: Up to 10:1 rangeability, outperforming conventional orifice meters (typically 3:1)</li>
  <li>Minimal Signal Noise: Produces high-frequency, low-noise signals ideal for gas and steam applications</li>
  <li>Self-Conditioning Flow Design: Integrated cone flow conditioner requires only 0–3D upstream and 0–1D downstream piping</li>
  <li>Low Head Loss: Optimized geometry minimizes pressure drop, boosting system efficiency and reducing energy costs</li>
  <li>Built for Harsh Media: Material options include SS316, SS304, Duplex, Hastelloy, and Carbon Steel — suited for aggressive gases and steam</li>
  <li>Custom Sizing: Available from 0.5" to 120”+ with flanged, threaded, or welded-end connections</li>
  <li>Smart Instrumentation Integration: Compatible with digital indicators, totalizers, 3-way manifolds, and differential pressure transmitters</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>
  <li>Pipe Range: DN10 to DN3000 or larger</li>
  <li>Accuracy: ±1% for total system</li>
  <li>Turn Down Ratio: 10:1 with compact installation</li>
  <li>Body Material Options:
    <ul>
      <li>Duplex 2205</li>
      <li>304 Stainless Steel</li>
      <li>316 Stainless Steel</li>
      <li>Hastelloy C-276</li>
      <li>254 SMO</li>
      <li>Carbon Steels</li>
      <li>Special materials available on request</li>
    </ul>
  </li>
  <li>End Fittings:
    <ul>
      <li>Flanged</li>
      <li>Threaded</li>
      <li>Hub</li>
      <li>Weld-end</li>
      <li>Others on request</li>
    </ul>
  </li>
  <li>RTD Specifications:
    <ul>
      <li>Sensor Type: PT-100, thin film</li>
      <li>Range: –58°F to 752°F (–50°C to 400°C)</li>
    </ul>
  </li>
  <li>Manifold Configuration: 3-valve</li>
  <li>dP Transmitter:
    <ul>
      <li>Housing Material: F30 Aluminum</li>
      <li>Membrane Material: 316L</li>
      <li>Enclosure Rating: NEMA 4X/6P, IP66/67</li>
      <li>Electrical Connections: NPT 1/2" thread</li>
    </ul>
  </li>
  <li>Flow Computer Output:
    <ul>
      <li>4–20 mA</li>
      <li>Isolated Pulse</li>
    </ul>
  </li>
  <li>Pressure Range: Up to 1500 psi (100 bar)</li>
  <li>Temperature Range: Up to 1600°F (870°C)</li>
  <li>Applications:
    <ul>
      <li>Biogas</li>
      <li>Coke Oven Gas</li>
      <li>Coal Bed Methane (CBM)</li>
      <li>Gas Mixtures</li>
      <li>Air (with dust)</li>
      <li>Steam</li>
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
