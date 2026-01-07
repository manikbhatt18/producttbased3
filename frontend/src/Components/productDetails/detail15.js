import React, { useEffect } from 'react';
import bannerImg from '../../images/Schimdt_banner.png';
import model20250Img from '../../images/SS_20.250.png';
import model20261Img from '../../images/SS_20.261.png';
import model20415Img from '../../images/SS_20.415.png';
import model20600Img from '../../images/SS_20.600.png';
import model23400Img from '../../images/SS_23.400.png';
import model30300Img from '../../images/SS_30.300.png';


// --- Placeholder Links ---
// Replace these with your actual destination URLs
const calculatorLink = "https://apps.schmidttechnology.de/stroemungsrechner/en/volumenstrom-geschwindigkeit.html";
const productLinkPlaceholder = "#"; 


// --- Application Data ---
const applicationsData = [
  { title: "Compressed air flow measurement", image: "https://placehold.co/600x400/1a202c/ffd700?text=Compressed+Air" },
  { title: "Industrial gas distribution lines", image: "https://placehold.co/600x400/1a202c/ffd700?text=Gas+Distribution" },
  { title: "Energy audits and consumption tracking", image: "https://placehold.co/600x400/1a202c/ffd700?text=Energy+Audits" },
  { title: "Ventilation and HVAC air balancing", image: "https://placehold.co/600x400/1a202c/ffd700?text=HVAC+Balancing" },
  { title: "Cleanrooms & Pharmaceuticals", image: "https://placehold.co/600x400/1a202c/ffd700?text=Cleanrooms" },
  { title: "Hazardous gas area monitoring (ATEX zones)", image: "https://placehold.co/600x400/1a202c/ffd700?text=Hazardous+Areas" },
  { title: "Burners, Furnaces & Combustion Control", image: "https://placehold.co/600x400/1a202c/ffd700?text=Combustion+Control" },
  { title: "Sewage Treatment & Biogas", image: "https://placehold.co/600x400/1a202c/ffd700?text=Sewage+%26+Biogas" },
  { title: "Heavy‑Duty Industrial Applications", image: "https://placehold.co/600x400/1a202c/ffd700?text=Heavy+Industry" },
];

// --- Component for individual Model Row (Image Left, Text Right) ---
const ModelRow = ({ title, description, imagePlaceholder, link }) => (
  <div className="tw-group tw-flex tw-flex-col md:tw-flex-row tw-items-start tw-gap-8 lg:tw-gap-12 tw-py-12 tw-border-b tw-border-gray-200 last:tw-border-0">
    
    {/* Left: Clickable Image */}
    <div className="tw-w-full md:tw-w-1/3 lg:tw-w-1/4 tw-flex-shrink-0">
      <a 
        href={link || productLinkPlaceholder} 
        target="_blank" 
        rel="noopener noreferrer"
        className="tw-block tw-relative tw-rounded-2xl tw-overflow-hidden tw-shadow-lg hover:tw-shadow-2xl tw-transition-all tw-duration-500 tw-cursor-pointer"
      >
        {/* Aspect ratio container */}
        <div className="tw-aspect-[4/3] tw-w-full tw-bg-gray-100">
          <img 
            src={imagePlaceholder || "https://placehold.co/600x400/f3f4f6/1a202c?text=View+Product"} 
            alt={`View ${title}`} 
            className="tw-w-full tw-h-full tw-object-contain tw-transition-transform tw-duration-700 group-hover:tw-scale-110" 
          />
        </div>
      </a>
    </div>

    {/* Right: Text Content */}
    <div className="tw-flex-1 tw-pt-2">
      {/* Title - No link, bright color */}
      <h4 className="tw-text-2xl tw-font-bold tw-text-[#e6c200] tw-mb-4">
        {title}
      </h4>
      <p className="tw-text-gray-600 tw-text-base tw-leading-relaxed">
        {description}
      </p>

      {/* Added Arrow Link */}
      <a 
        href={link || productLinkPlaceholder}
        target="_blank" 
        rel="noopener noreferrer"
        className="tw-inline-flex tw-items-center tw-text-[#ffd700] hover:tw-text-[#e6c200] tw-font-bold tw-text-sm tw-transition-colors tw-no-underline"
      >
        View product <span className="tw-ml-1">→</span>
      </a>
    </div>
    
  </div>
);

// --- Component for Section Header (Industry/Application) ---
const SectionHeader = ({ number, title, idealFor, industries }) => (
  <div className="tw-mb-8">
    <div className="tw-flex tw-items-center tw-gap-4 tw-mb-6">
      <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl shadow-md">
        {number}
      </span>
      <h3 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-black">
        {title}
      </h3>
    </div>
    <div className="tw-pl-0 md:tw-pl-16 tw-text-gray-700 tw-space-y-3 tw-text-lg">
      <p><strong className="tw-text-black">Ideal for:</strong> {idealFor}</p>
      <p><strong className="tw-text-black">Typical industries:</strong> {industries}</p>
    </div>
  </div>
);

// --- Component for Application Card ---
const ApplicationCard = ({ title, image }) => (
  <div className="tw-group tw-relative tw-h-32 md:tw-h-40 tw-rounded-lg tw-overflow-hidden tw-shadow-sm hover:tw-shadow-md tw-transition-all tw-duration-300">
    {/* Background Image */}
    <div 
      className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-transition-transform tw-duration-700 group-hover:tw-scale-110"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    
    {/* Overlay */}
    <div className="tw-absolute tw-inset-0 tw-bg-black/60 group-hover:tw-bg-black/70 tw-transition-colors tw-duration-300"></div>

    {/* Content */}
    <div className="tw-relative tw-z-10 tw-h-full tw-flex tw-items-center tw-justify-center tw-p-4 tw-text-center">
      <h4 className="tw-text-sm md:tw-text-base tw-font-bold tw-text-white group-hover:tw-text-[#ffd700] tw-transition-colors tw-leading-tight">
        {title}
      </h4>
    </div>
    
    {/* Bottom Border Accent */}
    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-1 tw-bg-[#ffd700] tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-300"></div>
  </div>
);


const Detail15 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-gray-50 tw-min-h-screen tw-font-sans">
      
      {/* ==================== HERO SECTION (Banner No Circle) ==================== */}
      <div className="tw-relative tw-w-full tw-h-[400px] md:tw-h-[500px] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
        {/* Banner Image Background */}
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        
        {/* Dark Overlay for contrast */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/50"></div>

        {/* Centered Text */}
        <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-p-4">
          <h5 className="tw-text-white tw-font-extrabold tw-uppercase tw-tracking-widest tw-mb-4 tw-text-3xl md:tw-text-5xl tw-drop-shadow-md">
            SCHMIDT
          </h5>
          
          <h1 className="tw-text-3xl md:tw-text-5xl tw-font-extrabold tw-text-white tw-leading-tight tw-drop-shadow-lg">
            THERMAL MASS <br/> FLOW SENSORS
          </h1>
        </div>
      </div>


      {/* ==================== CONTENT SECTION (Below Banner) ==================== */}
      <div className="tw-bg-black tw-text-white tw-py-16">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-5xl tw-mx-auto">
            
            {/* Calculator Intro & Button (Moved below banner) */}
            <div className="tw-text-center tw-mb-20">
              <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
                Instantly calculate the flow velocity or volume flow of air and industrial gases including compressed air, nitrogen, oxygen, carbon dioxide, argon, methane, natural gas, biogas, helium, and hydrogen with our smart, interactive calculator powered by SCHMIDT Technology, Germany.
              </p>
              <a 
                href={calculatorLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tw-inline-block tw-bg-[#ffd700] tw-text-black tw-font-bold tw-py-4 tw-px-10 tw-rounded-full tw-shadow-lg tw-transition-transform hover:tw-scale-105 hover:tw-bg-yellow-400 tw-no-underline"
              >
                Launch Calculator ↗
              </a>
            </div>

            {/* Brand Intro */}
            <div className="tw-bg-white/5 tw-backdrop-blur-sm tw-p-8 md:tw-p-12 tw-rounded-3xl tw-border-l-8 tw-border-[#ffd700]">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-white tw-mb-6">Precision Engineering by SCHMIDT</h2>
              <div className="tw-space-y-4 tw-text-gray-300 tw-text-lg tw-leading-relaxed">
                <p>
                  SCHMIDT Technology, a globally trusted German brand, is a pioneer in precision-engineered thermal mass flow sensors for the accurate measurement of air and gases across industrial and utility applications.
                </p>
                <p>
                  With more than 35 years of expertise, SCHMIDT flow sensors deliver unmatched accuracy and long-term stability for compressed air and a wide range of gases, including compressed air, nitrogen, oxygen, argon, carbon dioxide, methane, natural gas, helium, hydrogen, and biogas.
                </p>
                <p>
                  Engineered on the thermal anemometer principle, SCHMIDT sensors directly measure mass flow and velocity without requiring separate pressure or temperature compensation. This makes them ideal for energy monitoring, leak detection, process control, and cleanroom applications, providing reliable performance even in demanding industrial environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==================== PRODUCT SECTIONS ==================== */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-16 md:tw-py-24 tw-space-y-24">

        {/* --- SECTION 1: Compressed Air --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="1"
            title="Flow Sensors for Compressed Air & Industrial Processes"
            idealFor="Energy audits, compressor monitoring, leakage detection, process gas flow, and industrial automation."
            industries="Manufacturing, metal, cement, food processing, chemicals, and power plants."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="SS 20.600 / SS 20.600 Ex"
              description="Chamber head sensors with wide measuring range (0.2–220 m/s), withstand up to 40 bar, ideal for compressed air and industrial gas systems."
              imagePlaceholder={model20600Img}
              link="#"
            />
            <ModelRow 
              title="SS 20.651"
              description="Chamber head sensor for drying processes and air compressors, up to 350 °C and 16 bar."
              imagePlaceholder={model20600Img} // Reusing image as placeholder if specific one not available
              link="#"
            />
             <ModelRow 
              title="SS 20.700 / SS 23.700 Ex"
              description="Double pin “heavy-duty” sensors for biogas, natural gas, and harsh gas media. Stainless-steel encapsulation for contamination resistance."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.700"
              link="#"
            />
            <ModelRow 
              title="IL 30.0xx MPM"
              description="Inline flow sensors with multi-point measurement (MPM) for direct volume flow in compressed air lines up to 16 bar."
              imagePlaceholder={model30300Img}
              link="#"
            />
          </div>

          
        </section>

        {/* --- SECTION 2: Cleanroom & Pharma --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="2"
            title="Cleanroom & Pharmaceutical Applications"
            idealFor="Laminar airflow validation, differential pressure control, contamination prevention, GMP and ISO cleanroom compliance."
            industries="Pharmaceutical manufacturing, biotechnology, life sciences, semiconductor, and healthcare facilities."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="SS 20.250 / SS 20.250 HD"
              description="Dumb-bell head sensors for laminar flow from 0.06–20 m/s. Integrated temperature measurement and clean design."
              imagePlaceholder={model20250Img}
              link="#"
            />
            <ModelRow 
              title="SS 20.400 / SS 23.400 Ex"
              description="Thermopile sensors for low-velocity clean gases (0.05–20 m/s), with optional bidirectional flow measurement."
              imagePlaceholder={model23400Img}
              link="#"
            />
            <ModelRow 
              title="SS 20.415 / SS 20.515 / SS 20.715"
              description="Ceiling-mount laminar flow sensors for cleanroom installations; Twin versions (SS 20.415 Twin / SS 20.515 Twin) offer redundant dual sensing."
              imagePlaceholder={model20415Img}
              link="#"
            />
             <ModelRow 
              title="SS 20.450"
              description="Verification probe for on-site validation of other sensors; Bluetooth-enabled."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.450"
              link="#"
            />
          </div>

          
        </section>

        {/* --- SECTION 3: Ventilation & HVAC --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="3"
            title="Ventilation & HVAC Flow Measurement"
            idealFor="Air-handling units (AHUs), duct flow monitoring, ventilation balancing, and HVAC system optimization."
            industries="Commercial buildings, factories, infrastructure, data centers."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
             <ModelRow 
              title="HVAC 100"
              description="Compact immersion-type sensor for building ventilation systems; 0.2–20 m/s; dust-resistant."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=HVAC+100"
              link="#"
            />
            <ModelRow 
              title="SS 20.260"
              description="Chamber head sensor for AHU and duct flow measurement up to 60 m/s."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.260"
              link="#"
            />
             <ModelRow 
              title="SS 20.200"
              description="Flow switch for airflow monitoring with switching output and LED indication."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.200"
              link="#"
            />
            <ModelRow 
              title="SS 20.500 / SS 20.500 Ex"
              description="Dumb-bell head sensor for air conditioning and ventilation systems, up to 50 m/s and ATEX zones 2 & 22."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.500"
              link="#"
            />
            <ModelRow 
              title="SS 20.250"
              description="Low-velocity flow sensor for balancing and low-pressure HVAC applications."
              imagePlaceholder={model20250Img}
              link="#"
            />
          </div>

          
        </section>

        {/* --- SECTION 4: Energy & Environmental --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="4"
            title="Energy & Environmental Monitoring"
            idealFor="Sustainability projects, exhaust gas flow monitoring, biogas plants, and energy audits."
            industries="Environmental monitoring, utilities, sustainability audits, energy plants."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="SS 20.700 / SS 23.700 Ex"
              description="Double pin stainless steel sensors for biogas and process exhaust gases; resistant to humidity and aggressive media."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.700"
              link="#"
            />
            <ModelRow 
              title="SS 20.600 Ex / SS 20.651"
              description="Chamber head sensors for energy audits and emission monitoring in high-pressure and high-temperature systems."
              imagePlaceholder={model20600Img}
              link="#"
            />
             <ModelRow 
              title="IL 30.0xx MPM"
              description="Inline version for compressed air energy monitoring with wireless data transfer (Bluetooth)."
              imagePlaceholder={model30300Img}
              link="#"
            />
          </div>

          
        </section>

        {/* --- SECTION 5: Display & Integration --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="5"
            title="Display & Integration Solutions"
            idealFor="On-site display, system monitoring, and control integration."
            industries="Industrial Automation, Control Rooms, Plant Management."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="MD 10.010 / MD 10.015"
              description="LED measured-value displays for flow, volume, or temperature; wall or panel mounting."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=MD+10.010"
              link="#"
            />
             <ModelRow 
              title="MD 10.020"
              description="Remote display module for IL 30.0xx MPM sensors; plug-and-play with dual-line readout."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=MD+10.020"
              link="#"
            />
            <ModelRow 
              title="BT 10.010"
              description="Bluetooth® module for wireless data transmission and sensor configuration via the SCHMIDT® Sensor App."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=BT+10.010"
              link="#"
            />
          </div>
        </section>

        {/* --- SECTION 6: Applications (New) --- */}
        <section className="tw-max-w-6xl tw-mx-auto tw-pb-16">
           <div className="tw-mb-8 tw-text-center">
            <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-black tw-mb-4">
              Applications
            </h2>
            <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
          </div>
          
          <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
            {applicationsData.map((app, index) => (
              <ApplicationCard 
                key={index} 
                title={app.title} 
                image={app.image} 
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Detail15;