import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/Ultra-Nxt (1).png';






import related1 from '../../images/VFM 1.png';
import related2 from '../../images/VFM 1.png';
import related3 from '../../images/VFM 1.png';
import related4 from '../../images/d211.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1];
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
                 { img: related1, title: "VFM Vortex Flow Meters", link: "/product-detail/detail16" },
                 { img: related2, title: "Inline Vortex flow meters ", link: "/product-detail/detail17" },
                 { img: related3, title: "IVF Insertion Vortex flow meter", link: "/product-detail/detail18" },
                 { img: related4, title: "GasPro RPD Gas Mete", link: "/product-detail/detail21" },
                 
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
             <h3 className="fw-semibold">Ultra-NXT Ultrasonic Gas Flow Meter </h3>
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
      <li>Ultra-Nxt Natural Gas Flow Meter</li>
      <li>Ultrasonic metering solution for industrial, commercial, and utility gas systems</li>
      <li>Provides real-time compensation for temperature, pressure, and gas compressibility</li>
      <li>High-accuracy flow and volume measurement with advanced multi-beam ultrasonic technology</li>
      <li>Wide dynamic range up to 1:200</li>
      <li>Reliable performance in harsh environments</li>
      <li>Ideal replacement for legacy membrane, rotary, and turbine gas meters</li>
    </ul>
  </li>

  <li><strong>Industry Applications:</strong>
    <ul>
      <li><em>Natural Gas Distribution & Utilities:</em> City gas metering, utility billing, smart grid integration; low pressure drop and silent operation</li>
      <li><em>Industrial Gas Flow Monitoring:</em> Oil & gas, chemical processing, metal manufacturing, and pharmaceutical sectors</li>
      <li><em>Commercial Infrastructure:</em> Used in commercial buildings, complexes, and industrial parks with BMS integration</li>
      <li><em>Hazardous Environments:</em> Explosion-proof design suitable for refineries, petrochemical plants, and LNG terminals</li>
    </ul>
  </li>

  <li><strong>Key Advantages:</strong>
    <ul>
      <li>12+ year service life and MTBF exceeding 60,000 hours</li>
      <li>Seamless integration with SCADA, IoT, and smart grid platforms</li>
      <li>Lower installation and operational costs than mechanical meters</li>
      <li>Future-ready for IIoT deployments and energy optimization</li>
    </ul>
  </li>
</ul>
               </div>
               
             </div>
           )}
           {activeTab === "Features" && (
<ul>
  <li><strong>High Accuracy Measurement:</strong> Volume accuracy of ±1.2% to ±2.3%, with optional calibration available to ±0.75%.</li>
  <li><strong>Advanced Ultrasonic Technology:</strong> Measures flow via time-of-flight analysis of ultrasonic pulses for precision metering.</li>
  <li><strong>Temperature & Pressure Compensation:</strong> Automatically adjusts readings to environmental variations, ensuring reliable standard volume output.</li>
  <li><strong>Wide Dynamic Range:</strong> Up to 1:400 (standard); enhanced to 1:600 in the Ultra-Nxt 2024 Pro version.</li>
  <li><strong>Built-in Data Logger:</strong> Archives hourly, daily, and monthly flow data, including alarms and event logs for diagnostics.</li>
  <li><strong>Multiple Communication Protocols:</strong> Interfaces include RS-232, RS-485, and optical ports for system connectivity.</li>
  <li><strong>Robust Environmental Tolerance:</strong> IP66-rated, explosion-proof (1Ex ib IIB T4 Gb X), suitable for operating conditions from –40°C to +60°C.</li>
  <li><strong>Flexible Installation:</strong> Compact footprint allows vertical or horizontal mounting; supports G10 to G4000 meter sizes.</li>
</ul>           )}
           {activeTab === "Technical data" && (
             <ul>
  <li><strong>Meter Sizes:</strong> G6 to G4000</li>
  <li><strong>Measurement Accuracy:</strong> ±1.2% to ±2% (calibration options available)</li>
  <li><strong>Flow Range Turndown:</strong> Up to 1:200</li>
  <li><strong>Operating Temperature:</strong> –40°C to +60°C</li>
  <li><strong>Maximum Pressure:</strong> 16 Bar</li>
  <li><strong>Output Interfaces:</strong> RS-232, RS-485, Optical Port</li>
  <li><strong>Optional Communication:</strong> Built-in or external GSM/3G modem options</li>
  <li><strong>Protection:</strong> IP66 rated</li>
  <li><strong>Explosion-Proof Certification:</strong> 1Ex ib IIB T4 Gb X</li>
  <li><strong>Measurable Gases:</strong> Natural Gas, Fuel Gases</li>
  <li><strong>Integrated Corrections:</strong> Built-in temperature, pressure, and gas composition correction — no external corrector required</li>
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
