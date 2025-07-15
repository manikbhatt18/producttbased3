import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/VFM 1.png';
import img2 from '../../images/VFM 2.png';
import img3 from '../../images/VFM 3.png';





import related1 from '../../images/VFM 1.png';
import related2 from '../../images/VFM 1.png';
import related3 from '../../images/p181.png';
import related4 from '../../images/Ultra-Nxt (1).png';


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
                 { img: related1, title: "Inline Vortex flow meters", link: "/product-detail/detail17" },
                 { img: related2, title: " IVF Insertion Vortex flow meter ", link: "/product-detail/detail18" },
                 { img: related3, title: "EQZ/EQZK Radial Turbine Gas Meters", link: "/product-detail/detail19" },
                 { img: related4, title: "Ultra-NXT Ultrasonic Gas Flow Meter", link: "/product-detail/detail20" },
                 
               ];

  return (
    <div className="text-dark">
      {/* Swapped: Product Info LEFT and Image RIGHT */}
      <div className="container py-5">
        <div className="row">
          {/* Product Info */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Steam Flow Meters</p>
            <h3 className="fw-semibold">VFM Vortex Flow Meters</h3>
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
             Vortex Flow Meter – Precision Flow Monitoring for Steam, Gas, and Liquid Applications
The IOTAFLOW Vortex Flow Meter is a high-accuracy flow measurement solution engineered for industrial gas, steam, and liquid applications, including saturated and superheated steam. Based on the Karman vortex shedding principle, it provides reliable, maintenance-free operation with robust signal stability in harsh environments.
Targeted Application Areas:
🔧 Power Plants & Boiler Systems
Optimized for steam flow measurement in turbine lines, boiler feed systems, and heat recovery loops. Delivers accurate readings in both saturated and superheated steam conditions.
⚗️ Chemical & Petrochemical Industries
Reliable in aggressive and corrosive process environments. Ideal for measuring process gases, vapors, and utility steam in reactors, pipelines, and heat exchangers.
🛢️ Oil & Gas Industry
Used in natural gas flow metering, compressed gas distribution, and flare gas monitoring, offering rugged durability in upstream and downstream operations.
🍺 Food & Beverage Industry
Supports CIP (Clean-in-Place) processes with hygienic-grade options. Accurately monitors steam, water, and CO₂ in beverage and dairy production.
💊 Pharmaceutical Industry
Ensures precise steam control for sterilization processes (SIP) and utility management in GMP-compliant environments.
🚗 Automotive & Metal Processing
Monitors cooling water, compressed air, and other industrial fluids in high-heat, high-vibration manufacturing conditions.
📦 Pulp, Paper & Textiles
Used for steam and condensate flow tracking in drying processes and for energy optimization in utility services.
💧 Water & Wastewater Treatment
Efficient in chlorine gas, aeration airflow, and process water flow measurement in treatment plants and distribution networks.

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
  <li>No Moving Parts: Maintenance-free design eliminates wear, leaks, and mechanical failure, ensuring long-term reliability and low lifecycle cost</li>
  <li>SS 316L Stainless Steel Construction: Rugged and corrosion-resistant, with industry-standard flange and wafer connections for flexible installation</li>
  <li>Optimized for Saturated and Superheated Steam: Integrated pressure and temperature compensation for accurate metering in boilers and thermal processes</li>
  <li>Wide Flow Turndown Ratio (Up to 1:20): Ideal for low-flow applications in steam distribution, compressed air systems, and process gases</li>
  <li>Negligible Pressure Drop: Up to 90% lower loss compared to orifice meters—boosts system efficiency and cuts energy costs</li>
  <li>IBR Approved: Complies with Indian Boiler Regulations for regulated steam and boiler applications</li>
  <li>High Accuracy and Repeatability: ±0.5% accuracy and ±0.2% repeatability even under fluctuating conditions</li>
  <li>Universal Media Compatibility: Suitable for air, steam, natural gas, nitrogen, and non-conductive liquids across industries</li>
  <li>Digital Communication Ready: Supports RS485, MODBUS, HART, and GPRS for seamless integration with DCS, PLC, and SCADA systems</li>
</ul>
          )}

          {activeTab === "Technical data" && (
           <ul>

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
