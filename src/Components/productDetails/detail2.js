import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/Copy of Old 1.png';
import img2 from '../../images/Copy of Old 2.png';
import img3 from '../../images/Copy of Old 3.png';

import related1 from '../../images/Buf lite-2-1.png';
import related2 from '../../images/1.png';
import related3 from '../../images/1.png';
import related4 from '../../images/1.png';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const images = [img1, img2,img3];
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
    { img: related1, title: "Domestic Ultrasonic Flow Meters", link: "/" },
    { img: related2, title: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)", link: "/product-detail/detail3" },
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
             <h3 className="fw-semibold">INLINE ULTRASONIC ROBUST Series</h3>
             <ul className="list-unstyled mt-3">
               <li className="mb-2">&#9679;Robust™ Inline Ultrasonic Water Flow Meter</li>
               <li className="mb-2">&#9679; No Moving Parts, 10-Year Battery</li>
               <li className="mb-2">&#9679;Smart ultrasonic water meter for residential & industrial use. IP67, 10-year battery, NFC app, LoRa/GSM communication & built-in data logger.</li>
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
  <li>Struggling with frequent failures in mechanical water meters? Say goodbye to costly downtime, moving part replacements, and clogging issues with the IOTAFLOW Inline Ultrasonic Flow Meter – Robust Series.</li>
  <li>Designed for precision water flow measurement in harsh and high-demand environments.</li>
  <li>Offers long-lasting reliability and superior accuracy, even in low-flow or particle-heavy water lines.</li>
  <li>Uses ultrasonic transit-time technology — no internal obstructions.</li>
  <li>Compatible with raw water, treated water, DM water, hot water, and condensate up to 130°C, even with sand or suspended solids.</li>

  <li><strong>Target Applications:</strong>
    <ul>
      <li>Residential water metering for cold/hot domestic water</li>
      <li>Industrial water flow monitoring in manufacturing, chemical, and food processing</li>
      <li>Irrigation systems in agriculture and landscape management</li>
      <li>DM water and condensate flow measurement in pharmaceutical and boiler plants</li>
      <li>Water consumption tracking in buildings, commercial complexes, and smart cities</li>
      <li>District cooling and heating systems, HVAC water distribution</li>
      <li>Utility water supply networks and non-revenue water (NRW) control</li>
      <li>CGWA flow meter for groundwater abstraction plants</li>
      <li>CPCB/PCB/NIC data logger compliant water metering systems</li>
    </ul>
  </li>

  <li><strong>Compliance Features:</strong>
    <ul>
  <li><strong>Sand/Particle Interference? NO PROBLEM</strong> – Rugged design handles poor-quality water effortlessly.</li>
  <li><strong>No External Power? NO PROBLEM</strong> – 10-year lithium battery life with optional 24V DC supply.</li>
  <li><strong>Hot Water/Condensate? NO PROBLEM</strong> – Operates reliably up to 130°C.</li>
  <li><strong>No Connectivity? NO PROBLEM</strong> – Supports RS485, Modbus (wired/wireless), GSM/GPRS, LoRaWAN, and NFC.</li>
  <li><strong>Outdoor Use? NO PROBLEM</strong> – IP67/IP68-rated enclosure for extreme weather conditions.</li>
  <li><strong>Low Flow Conditions? NO PROBLEM</strong> – Incredible 1:125 turndown ratio, ideal for residential and industrial low-demand scenarios.</li>
  <li><strong>Built-in Data Logger</strong> – Stores hourly data for 1440 hours, daily data for 460 days, and monthly data for 48 months.</li>
  <li><strong>Smart Monitoring via NFC & Mobile App</strong> – Instantly access real-time readings, usage trends, and diagnostics by tapping an Android phone to the meter. Perfect for remote monitoring and smart utility integration.</li>
</ul>
  </li>
</ul>
               </div>
               
             </div>
           )}
           {activeTab === "Features" && (
<ul>
  <li><strong>4-Channel Measurement:</strong> High-accuracy flow readings using four-beam sensing across multiple insertion points for enhanced volumetric precision.</li>
  <li><strong>Non-Intrusive, Low-Pressure Loss Design:</strong> Insertion sensors minimize obstruction—preserving fluid integrity and system efficiency.</li>
  <li><strong>Wide Diameter Compatibility:</strong> Supports DN15 to DN6000 pipes across metallic, plastic, and composite materials.</li>
  <li><strong>Advanced DSP Technology:</strong> Digital signal processing ensures noise immunity, stable readings, and ultra-low drift.</li>
  <li><strong>High Accuracy & Repeatability:</strong> Achieves ±1.5% accuracy with ±0.1% repeatability—even in turbulent or variable flow conditions.</li>
  <li><strong>Data Logging & Retention:</strong> Stores hourly, daily, and monthly data internally for up to 1 year—even without external power.</li>
  <li><strong>Industrial Outputs:</strong> RS-232, RS-485 (Modbus), 4–20 mA analog, pulse output, and optional Ethernet—compatible with SCADA, PLC, and BMS systems.</li>
  <li><strong>Durable Build:</strong> Wetted parts in SS316 stainless steel; sensor heads rated IP67, control units IP54 for rugged deployment.</li>
  <li><strong>Extreme Environment Ready:</strong> Operates from –40°C to +65°C ambient and –30°C to +150°C liquid (extendable to +350°C).</li>
  <li><strong>Secure Configuration:</strong> Password-protected settings and safeguards against unauthorized access or tampering.</li>
  <li><strong>Batching and Alarm Modes:</strong> Supports volume-based batching, start-stop control, and real-time diagnostics with alarm logging.</li>
</ul>           )}
           {activeTab === "Technical data" && (
             <ul>
  <li><strong>Pipe Range:</strong> DN32 – DN300 / up to DN1000</li>
  <li><strong>NFC Communication:</strong> Enabled</li>
  <li><strong>Accuracy:</strong> ± 2.0% of MV</li>
  <li><strong>Maximum Pipeline Pressure:</strong> 2.5 MPa / 25 bar</li>
  <li><strong>Fluid Temperature Range:</strong> 50°C to 130°C (For Hot Water)</li>
  <li><strong>Ambient Temperature Range:</strong> 5°C to 65°C</li>
  <li><strong>Protection Rating:</strong> IP67 (IP68 optional)</li>
  <li><strong>End Connection:</strong> ASME/ANSI B16.5 Class 150, Tri-Clover, PN16</li>
  <li><strong>Compliance:</strong> ISO 4064</li>
  <li><strong>Interfaces:</strong> Pulse, RS485, Analog 4–20mA (Optional), In-built LoRaWAN (Optional)</li>
  <li><strong>Power Supply:</strong> Battery Operated (3.6 V Lithium, 10 years), Power Operated (Optional)</li>
  <li><strong>Measurement Data Logging:</strong>
    <ul>
      <li>1440 Hourly Logs</li>
      <li>460 Daily Logs</li>
      <li>48 Monthly Logs</li>
    </ul>
  </li>
  <li><strong>Certifications:</strong> CE, MID Certified</li>
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
