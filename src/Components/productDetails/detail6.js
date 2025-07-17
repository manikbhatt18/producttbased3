import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/7600 (1) Enhanced.png';
import img2 from '../../images/7600 enhanced.png';



import related1 from '../../images/1 with iota enhance.png';
import related2 from '../../images/vn-eng-1.3.png';
import related3 from '../../images/Enhanced.png';
import related4 from '../../images/Untitled design (32) Enhanced.png';



import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
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
                 { img: related1, title: "Electromagnetic Flow Meter (EMF Standard)", link: "/product-detail/detail7" },
                 { img: related2, title: " CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters ", link: "/product-detail/detail8" },
                 { img: related3, title: "  Multijet Water Meters, Aqua-Re Series ", link: "/product-detail/detail9" },
                 { img: related4, title: "Woltmann Water Meters, Aqua-Re Series", link: "/product-detail/detail10" },
                 
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
             <h3 className="fw-semibold">Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes</h3>
             <ul className="list-unstyled mt-3">
               <li className="mb-2">&#9679; UF AV5500 – Open Channel & Partially-Filled Pipe Flow Meter</li>
               <li className="mb-2">&#9679;Doppler-based area velocity flow meter for open channels & partially-filled pipes. Open channel & sewer flow meter for Indian drainage systems.</li>
               <li className="mb-2">&#9679; CE/CSA certified ultrasonic meter with Modbus & USB. Ideal for STP, ETP, canals & effluent line.</li>
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
      <li>UF AV5500 Area-Velocity Ultrasonic Flow Meter by IOTAFLOW</li>
      <li>Designed for accurate flow measurement in open channels, natural streams, stormwater drains, and partially-filled pipes</li>
      <li>Does not require flumes or weirs</li>
      <li>Utilizes submerged ultrasonic Doppler sensor for simultaneous velocity and level measurement</li>
      <li>Calculates flow volume in real time</li>
      <li>CE, CSA, and UL certified for reliability in harsh field conditions</li>
      <li>Ideal for wastewater, industrial effluent, stormwater, and irrigation flow monitoring</li>
    </ul>
  </li>

  <li><strong>Target Applications:</strong>
    <ul>
      <li>Wastewater flow monitoring in sewer lines and treatment plants</li>
      <li>Stormwater discharge measurement in municipal drainage systems</li>
      <li>Effluent tracking in industrial process lines and outfalls</li>
      <li>Irrigation and canal water flow measurement</li>
      <li>Environmental stream flow studies and hydrological monitoring</li>
      <li>Retrofit flow metering in existing gravity-fed and partially filled pipelines</li>
      <li>Smart water data logging for regulatory reporting and analytics</li>
    </ul>
  </li>
</ul>
               </div>
               
             </div>
           )}
           {activeTab === "Features" && (
<ul>
  <li><strong>Non-Contacting Doppler Ultrasonic Technology:</strong> Accurately measures level and velocity for open flow systems.</li>
  <li><strong>Ideal for Partially Filled Pipes and Irregular Channels:</strong> Works with custom-shaped conduits and storm drains.</li>
  <li><strong>No Flume or Weir Required:</strong> Simplifies installation, reduces civil work, and lowers cost.</li>
  <li><strong>Advanced Data Logging:</strong> Built-in logger with 26 million data point capacity and USB export functionality.</li>
  <li><strong>Weatherproof Enclosure:</strong> Rated NEMA 4X / IP66 for rugged outdoor performance.</li>
  <li><strong>Wide Velocity Range:</strong> Measures flows from 0.03 to 6.2 m/s, including reverse flows up to –1.5 m/s.</li>
  <li><strong>Level Range:</strong> Accurately tracks water levels from 1 inch (25.4 mm) to 15 ft (4.5 m).</li>
  <li><strong>Multiple Outputs:</strong> Includes 3 × 4–20 mA, Modbus RTU, USB, and 2 × Control Relays.</li>
  <li><strong>Certified for Global Standards:</strong>
    <ul>
      <li>CE</li>
      <li>CSA</li>
      <li>UL / EN 61010-1</li>
    </ul>
  </li>
  <li><strong>Intrinsic Safety Options:</strong> Suitable for hazardous or classified installations.</li>
  <li><strong>No Moving Parts:</strong> Maintenance-free design with resistance to fouling and corrosion.</li>
  <li><strong>Temperature Compensated Readings:</strong> Ensures reliable performance across varying field temperatures.</li>
</ul>           )}
           {activeTab === "Technical data" && (
             <ul>
  <li><strong>Application:</strong> Ideal for open channels and partially filled pipes</li>
  <li><strong>Measurement:</strong> Simultaneous velocity and level monitoring</li>
  <li><strong>Sensor Cable:</strong> 7.6 m / 25 ft submersible, shielded with 3 coaxial pairs</li>
  <li><strong>Flow Rate Range:</strong> 0.1 to 20 ft/sec; Reverse flow detection up to –5 ft/sec</li>
  <li><strong>Accuracy:</strong>
    <ul>
      <li>Velocity: ±2% of reading or ±0.04 ft/sec (whichever is greater)</li>
      <li>Level: ±0.25% of reading or ±0.08″ (whichever is greater)</li>
    </ul>
  </li>
  <li><strong>Enclosure:</strong> Watertight, NEMA 4X / IP66 polycarbonate</li>
  <li><strong>Totalizer:</strong> 14-digit display</li>
  <li><strong>Calibration:</strong> Integrated 5-key programmer</li>
  <li><strong>Outputs:</strong>
    <ul>
      <li>Three isolated 4–20mA / 0–5V signals for Flow, Level, and Velocity</li>
      <li>Two control relays – 5 amp SPDT (programmable for flow pulse or alarm)</li>
    </ul>
  </li>
  <li><strong>Datalogger:</strong> 128 MB capacity, stores up to 6.5 million data points</li>
  <li><strong>Power Input:</strong> 100–240 VAC, 50/60Hz, 10 VA max</li>
  <li><strong>Certifications:</strong> CE, UL, SCA, EN 61010-1</li>
  <li><strong>Additional Option:</strong> Portable Doppler Effect Flow Meter (D550 Series)</li>
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
