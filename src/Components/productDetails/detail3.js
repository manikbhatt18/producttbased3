import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/1.png';
import img2 from '../../images/1 (1).png';
import img3 from '../../images/3.png';
import img4 from '../../images/Background.png';

import related1 from '../../images/Buf lite1.png';
import related2 from '../../images/Copy of Old 1.png';
import related3 from '../../images/1.png';
import related4 from '../../images/1.png';


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
             <h3 className="fw-semibold"> INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)</h3>
             <ul className="list-unstyled mt-3">
               <li className="mb-2">&#9679; UF-1500 Series Insertion Ultrasonic Flow Meter – Precision Flow Measurement for Large Pipelines</li>
               <li className="mb-2">&#9679;Discover the UF-1500 Insertion Ultrasonic Flow Meter by IOTAFLOW – ideal for accurate, bidirectional flow monitoring in full or partially filled large-diameter pipes.</li>
               <li className="mb-2">&#9679; Supports DN15 to DN6000 mm.</li>
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
      <li>UF-1500 Series Insertion Ultrasonic Flow Meter by IOTAFLOW</li>
      <li>High-precision, 4-channel (4-beam) insertion-type design</li>
      <li>Accurate bidirectional flow measurement in large-diameter pipelines</li>
      <li>Advanced ultrasonic time-pulse technology with multi-point sensing</li>
      <li>Stable and reliable readings under challenging flow conditions</li>
      <li>Non-intrusive design minimizes pressure loss</li>
      <li>Suitable for full and partially filled pipes</li>
      <li>Supports pipe diameters from DN15 mm to DN6000 mm</li>
      <li>Compatible with Z, V, and U configuration schemes</li>
    </ul>
  </li>

  <li><strong>Applications:</strong>
    <ul>
      <li><em>Industrial Sectors:</em>
        <ul>
          <li>Power Generation (boiler feedwater, condensate loops)</li>
          <li>Municipal Water Supply and Wastewater Treatment</li>
          <li>Chemical and Petrochemical Plants</li>
          <li>Food and Beverage Production (milk, syrups, CIP)</li>
          <li>Oil and Gas Pipeline Monitoring</li>
          <li>HVAC and Thermal Energy Management</li>
        </ul>
      </li>
      <li><em>Compatible Fluids:</em>
        <ul>
          <li>Potable and process water (hot/cold)</li>
          <li>Partially filled pipelines</li>
          <li>Wastewater and sewage</li>
          <li>Acids, alkalis, and corrosive fluids</li>
          <li>Dairy, juices, syrups, and other liquid foods</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
               </div>
               
             </div>
           )}
           {activeTab === "Features" && (
<ul>
  <li><strong>4-Channel Measurement:</strong> Enhanced accuracy using four-beam sensing across multiple insertion points for precise volumetric flow readings.</li>
  <li><strong>Non-Intrusive, Low-Pressure Loss Design:</strong> Insertion sensors minimize obstruction and maintain fluid integrity—ideal for process-critical pipelines.</li>
  <li><strong>Wide Diameter Compatibility:</strong> Supports DN15 mm to DN6000 mm pipes across metallic, plastic, and composite materials.</li>
  <li><strong>Advanced DSP Technology:</strong> Robust digital signal processing ensures noise immunity, stable readings, and low drift performance.</li>
  <li><strong>High Accuracy & Repeatability:</strong> Achieves ±1.5% accuracy with ±0.1% repeatability, even under turbulent or variable flow conditions.</li>
  <li><strong>Data Logging & Retention:</strong> Internal storage logs hourly, daily, and monthly data—preserved for up to 1 year without external power.</li>
  <li><strong>Industrial Outputs:</strong> RS-232/RS-485 (Modbus), 4–20 mA analog, pulse output, and optional Ethernet—ready for SCADA, PLC, and BMS integration.</li>
  <li><strong>Durable Build:</strong> Wetted parts made from SS316 stainless steel; sensor heads rated IP67, control unit IP54.</li>
  <li><strong>Extreme Environment Ready:</strong> Operates between -40°C to +65°C ambient and -30°C to +150°C liquid temp (extendable to +350°C).</li>
  <li><strong>Secure Configuration:</strong> Password-protected settings and data protection from unauthorized access.</li>
  <li><strong>Batching and Alarm Modes:</strong> Supports volume-based batching, start-stop batching, and real-time diagnostics with alarm logging.</li>
</ul>           )}
           {activeTab === "Technical data" && (
             <ul>
  <li><strong>Nominal Diameter of Pipeline:</strong> DN15 to DN6000</li>
  <li><strong>Measurement Principle:</strong> Ultrasonic Transit Time</li>
  <li><strong>Measuring Channels:</strong> 1 to 4 (Single Track | Dual Track | Four Track)</li>
  <li><strong>Clamp-on PEA Accuracy:</strong>
    <ul>
      <li>Single-beam: ±2%</li>
      <li>Two-beam: ±1%</li>
      <li>Four-beam: ±0.5%</li>
    </ul>
  </li>
  <li><strong>Flow Velocity Range:</strong> 0.1 – 20 m/s</li>
  <li><strong>Fluid Temperature Range:</strong> –30°C to +160°C</li>
  <li><strong>Transmitter Ambient Temperature:</strong> 0°C to +50°C</li>
  <li><strong>Maximum Pipeline Pressure:</strong> 2.5 MPa / 25 bar</li>
  <li><strong>Protection Rating:</strong> Transmitter – IP54, Transducers – IP68</li>
  <li><strong>Measurement Data Logging:</strong>
    <ul>
      <li>Hourly Logs: 1440</li>
      <li>Daily Logs: 60</li>
      <li>Monthly Logs: Programmable up to 14400</li>
      <li>Batching Records: 512</li>
    </ul>
  </li>
  <li><strong>Power Supply:</strong> 24VDC</li>
  <li><strong>Power Consumption:</strong> &lt;12W</li>
  <li><strong>Transmitter Weight:</strong> &lt;3 kg</li>
  <li><strong>Transmitter Dimensions:</strong> 250 × 132 × 90 mm</li>
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
