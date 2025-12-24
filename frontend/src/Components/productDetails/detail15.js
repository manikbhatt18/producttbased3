import React, { useEffect } from 'react';

import bannerImg from '../../images/Schimdt_banner.png';

// --- Placeholder Links ---
// Replace these with your actual destination URLs
const calculatorLink = "https://www.schmidt-sensors.com/en/service-support/flow-calculator/"; // Example link
const productLinkPlaceholder = "#"; 
const heroBgImage = bannerImg; // Placeholder for Hero BG

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
            className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 group-hover:tw-scale-110" 
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
      
      {/* ==================== HERO: CALCULATOR & INTRO ==================== */}
      <div className="tw-relative tw-bg-black tw-text-white tw-overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        ></div>
        <div className="tw-absolute tw-inset-0 tw-bg-black/85"></div>

        {/* Content Wrapper - Reduced Height via Padding */}
        <div className="tw-relative tw-z-10 tw-py-12 md:tw-py-16">
          <div className="tw-container tw-mx-auto tw-px-4">
            <div className="tw-max-w-5xl tw-mx-auto">
              
              {/* Calculator Section */}
              <div className="tw-text-center tw-mb-16">
                <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-mb-4">
                  SCHMIDT Technology
                </h5>
                <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-mb-6">
                  Flow Rate & Velocity Calculator
                </h1>
                <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-8 tw-leading-relaxed">
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
              <div className="tw-bg-white/5 tw-backdrop-blur-sm tw-p-8 md:tw-p-10 tw-rounded-3xl tw-border-l-8 tw-border-[#ffd700]">
                <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-white tw-mb-4">Precision Engineering by SCHMIDT</h2>
                <div className="tw-space-y-4 tw-text-gray-300 tw-text-lg tw-leading-relaxed">
                  <p>
                    SCHMIDT Technology, a globally trusted German brand, is a pioneer in precision-engineered thermal mass flow sensors for the accurate measurement of air and gases across industrial and utility applications.
                  </p>
                  <p>
                    With more than 35 years of expertise, SCHMIDT flow sensors deliver unmatched accuracy and long-term stability for compressed air and a wide range of gases. Engineered on the thermal anemometer principle, they directly measure mass flow and velocity without requiring separate pressure or temperature compensation.
                  </p>
                </div>
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
              title="SS 20.600"
              description="High-precision chamber head sensor for measuring air/gas flow velocities from 0.2 to 220 m/s. Built for compressed air systems and industrial processes. Optional ATEX version for Zone 2 environments."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.600"
              link="#"
            />
            <ModelRow 
              title="SS 20.605"
              description="Compact version with integrated temperature measurement and robust stainless-steel probe. Excellent for space-restricted installations."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.605"
              link="#"
            />
            <ModelRow 
              title="SS 30.300 / SS 30.302"
              description="Inline flow sensors for direct pipe installation (up to DN 80, 16 bar). Ideal for compressed air distribution and energy monitoring."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+30.300"
              link="#"
            />
          </div>

          {/* Key Features */}
          <div className="tw-pl-0 md:tw-pl-16">
            <div className="tw-bg-gray-50 tw-p-8 tw-rounded-2xl tw-border-l-4 tw-border-[#ffd700]">
              <h4 className="tw-font-bold tw-text-xl tw-text-black tw-mb-4">Key Features</h4>
              <ul className="tw-grid md:tw-grid-cols-3 tw-gap-4 tw-text-gray-700">
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Plug-and-play installation</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> No compensation required</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Highly durable design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: Cleanroom & Pharma --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="2"
            title="Cleanroom & Pharmaceutical Applications"
            idealFor="Laminar flow monitoring, differential pressure validation, airflow direction control, contamination prevention."
            industries="Pharmaceutical manufacturing, biotechnology, life sciences, semiconductor, and healthcare facilities."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="SS 20.250"
              description="Dumb-bell head sensor for precise laminar flow measurement (0.05 – 20 m/s). Detects airflow direction for cleanroom validation."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.250"
              link="#"
            />
            <ModelRow 
              title="SS 23.400 / SS 23.415"
              description="Thermopile sensors for ultra-sensitive bi-directional flow measurement. Ideal for cleanrooms and critical pharma environments."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+23.400"
              link="#"
            />
            <ModelRow 
              title="SS 20.261"
              description="Compact, direction-sensitive sensor with optional digital outputs for BMS integration."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.261"
              link="#"
            />
          </div>

          <div className="tw-pl-0 md:tw-pl-16">
            <div className="tw-bg-gray-50 tw-p-8 tw-rounded-2xl tw-border-l-4 tw-border-[#ffd700]">
              <h4 className="tw-font-bold tw-text-xl tw-text-black tw-mb-4">Key Features</h4>
              <ul className="tw-grid md:tw-grid-cols-3 tw-gap-4 tw-text-gray-700">
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> High accuracy at low flow</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Stable, drift-free readings</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> GMP & ISO compatible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: Ventilation & HVAC --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="3"
            title="Ventilation & HVAC Flow Measurement"
            idealFor="Air-handling units, duct flow monitoring, ventilation balancing, and HVAC system optimization."
            industries="Commercial buildings, factories, infrastructure, data centers."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="SS 20.285"
              description="Chamber head sensor optimized for HVAC ducts; easy calibration and mounting."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.285"
              link="#"
            />
            <ModelRow 
              title="SS 20.250 / SS 20.261"
              description="Compact flow sensors for airflow direction detection and balancing in ventilation systems."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=HVAC+Flow+Sensors"
              link="#"
            />
          </div>

          <div className="tw-pl-0 md:tw-pl-16">
            <div className="tw-bg-gray-50 tw-p-8 tw-rounded-2xl tw-border-l-4 tw-border-[#ffd700]">
              <h4 className="tw-font-bold tw-text-xl tw-text-black tw-mb-4">Key Features</h4>
              <ul className="tw-grid md:tw-grid-cols-3 tw-gap-4 tw-text-gray-700">
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Energy-saving airflow control</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Reliable in variable conditions</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Fast response time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: Energy & Environmental --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="4"
            title="Energy & Environmental Monitoring"
            idealFor="Measuring exhaust air, biogas flow, and energy optimization projects."
            industries="Environmental monitoring, utilities, sustainability audits, energy plants."
          />
          
          <div className="tw-pl-0 md:tw-pl-16 tw-mb-10">
            <ModelRow 
              title="SS 20.600 / SS 30.303"
              description="For high-temperature or high-pressure gas flow measurement."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.600+%2F+30.303"
              link="#"
            />
            <ModelRow 
              title="SS 23.415"
              description="Thermopile model for bi-directional or low-speed airflows."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+23.415"
              link="#"
            />
          </div>

          <div className="tw-pl-0 md:tw-pl-16">
            <div className="tw-bg-gray-50 tw-p-8 tw-rounded-2xl tw-border-l-4 tw-border-[#ffd700]">
              <h4 className="tw-font-bold tw-text-xl tw-text-black tw-mb-4">Key Features</h4>
              <ul className="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-text-gray-700">
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Enables carbon footprint reduction</li>
                <li className="tw-flex tw-items-start"><span className="tw-text-[#ffd700] tw-mr-2">✔</span> Proven reliability in harsh conditions</li>
              </ul>
            </div>
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
              title="MD 10.010 / MD 10.020 – LED Measured-Value Displays"
              description="Digital LED display for real-time flow velocity, temperature, or volume data. Wall or panel mounting options. Configurable alarms and 4–20 mA / relay outputs."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=MD+10.010+%2F+10.020"
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