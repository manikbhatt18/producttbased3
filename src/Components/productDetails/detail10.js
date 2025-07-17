import React, { useState, useEffect, useRef } from 'react';//no image given
import { Link } from 'react-router-dom';

import img1 from '../../images/Untitled design (32) Enhanced.png';
import img2 from '../../images/Untitled design (32) Final.png';
import img3 from '../../images/Untitled design (34) Final.png';
import img4 from '../../images/Woltman 2.png';






import related1 from '../../images/7600 (1) Enhanced.png';
import related2 from '../../images/1 with iota enhance.png';
import related3 from '../../images/vn-eng-1.3.png';
import related4 from '../../images/product11(1).png';


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
                 { img: related1, title: "Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes )", link: "/product-detail/detail6" },
                 { img: related2, title: " Electromagnetic Flow Meter (EMF Standard) ", link: "/product-detail/detail7" },
                 { img: related3, title: " CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters ", link: "/product-detail/detail8" },
                 { img: related4, title: "Contoil / RPD Flow Meters", link: "/product-detail/detail11" },
                 
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
             <h3 className="fw-semibold">Woltmann Water Meters, Aqua-Re Series</h3>
             <ul className="list-unstyled mt-3">
               <li className="mb-2">&#9679;</li>
               <li className="mb-2">&#9679;</li>
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
  <li><strong>Meter Type:</strong> Turbine Mechanical Water Meter with Magnetic Transmission</li>
  <li><strong>Pipe Range:</strong> DN50 to DN500</li>
  <li><strong>Mechanism:</strong> Removable with 360° rotational capability</li>
  <li><strong>Accuracy:</strong> Class B (as per ISO 4064), suitable for:
    <ul>
      <li>Cold Water: up to 50°C</li>
      <li>Hot Water: available versions for 90°C and 130°C</li>
    </ul>
  </li>
  <li><strong>Body Material:</strong> Cast Iron or Stainless Steel with epoxy outer coating</li>
  <li><strong>Display Parameters:</strong> Flow rate, Total flow, Resettable total</li>
  <li><strong>Relay Output:</strong> Available for flow rate monitoring</li>
  <li><strong>Communication & Power Options:</strong>
    <ul>
      <li>Pulse output for AMR (Automatic Meter Reading)</li>
      <li>Analog output: 4–20 mA</li>
      <li>Digital input: 24 VDC</li>
      <li>Optional built-in battery: 1.5 to 2 years lifespan</li>
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
