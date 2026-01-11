import React, { useEffect } from 'react';

// --- Placeholder Images for "On-site service support" section ---
// Replace these with your actual image imports later
const serviceImg1 = "https://placehold.co/600x400/1a202c/ffd700?text=Service+Image+1";
const serviceImg2 = "https://placehold.co/600x800/1a202c/ffd700?text=Service+Image+2";
const serviceImg3 = "https://placehold.co/600x400/1a202c/ffd700?text=Service+Image+3";


// --- Placeholder Images for "Inhouse Calibration Lab" section ---
const calibImg1 = "https://placehold.co/800x600/1a202c/ffd700?text=Calibration+Bench";
const calibImg2 = "https://placehold.co/800x600/1a202c/ffd700?text=Flow+Meter+Repair";

// --- Placeholder Images for "Service Cases Graph" section ---
const graphImg1 = "https://placehold.co/800x500/1a202c/ffd700?text=Service+Cases+Graph+1";
const graphImg2 = "https://placehold.co/800x500/1a202c/ffd700?text=Service+Cases+Graph+2";

// --- Placeholder Image for "Automation Services" section ---
const automationImg = "https://placehold.co/800x600/1a202c/ffd700?text=Automation+Services";

const servicesList = [
  {
    title: "Installation & commissioning service",
    description: "Expert installation and commissioning of flow meters and systems to ensure accurate measurement, compliance, and seamless start-up."
  },
  {
    title: "AMC / CAMC",
    description: "Comprehensive annual and comprehensive maintenance contracts to ensure continuous performance, reduced downtime, and extended equipment life."
  },
  {
    title: "On-site NABL calibration (water, wastewater, fluids, slurries & liquids – ISO 17025)",
    description: "NABL-accredited on-site calibration of liquid flow using portable ultrasonic flow meters in compliance with ISO/IEC 17025 standards."
  },
  {
    title: "On-site calibration for air & gases (portable thermal mass)",
    description: "Accurate on-site calibration of air and gas flow using portable thermal mass flow instruments for process reliability and compliance."
  },
  {
    title: "Site survey & assessment",
    description: "Detailed site surveys and technical assessments to recommend optimal flow measurement solutions based on process and application requirements."
  },
  {
    title: "IoT / telemetry integration",
    description: "Seamless integration of flow systems with IoT and telemetry platforms for real-time monitoring, data analytics, and remote access."
  }
];

const ServicesPage = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">

      {/* ==================== SECTION 1: On-site Service Support ==================== */}
      <section className="tw-py-16 md:tw-py-24">
        <div className="tw-container tw-mx-auto tw-px-4">
          
          {/* Grid Layout: Adjusted columns to make image section smaller (7 cols text / 5 cols images) */}
          <div className="tw-grid lg:tw-grid-cols-12 tw-gap-12 lg:tw-gap-16 tw-items-stretch">
            
            {/* --- Left Column: Text Content (Span 7) --- */}
            <div className="lg:tw-col-span-7 tw-flex tw-flex-col">
              {/* Section Heading */}
              <div className="tw-mb-10">
                <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-mb-2">
                  Our Expertise
                </h5>
                <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-black">
                  On-site service support
                </h1>
                <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-4 tw-rounded-full"></div>
              </div>

              {/* Service List (Text Only, No Cards) */}
              <div className="tw-space-y-8 tw-flex-1">
                {servicesList.map((service, index) => (
                  <div key={index} className="tw-group">
                    <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-mb-2 group-hover:tw-text-[#e6c200] tw-transition-colors">
                      {service.title}
                    </h3>
                    <p className="tw-text-gray-600 tw-text-base md:tw-text-lg tw-leading-relaxed">
                      {service.description}
                    </p>
                    {/* Subtle Separator (except for last item) */}
                    {index !== servicesList.length - 1 && (
                      <div className="tw-h-px tw-bg-gray-200 tw-mt-6 tw-w-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Column: Vertical Image Stack (Span 5 - Smaller) --- */}
            <div className="lg:tw-col-span-4 tw-relative tw-mt-8 lg:tw-mt-0 tw-h-full tw-min-h-[500px] lg:tw-min-h-auto">
              {/* Flex column to stack images, h-full to fill height, gap for spacing */}
              <div className="tw-flex tw-flex-col tw-gap-6 tw-h-full tw-justify-between">
                
                {/* Image 1 */}
                <div className="tw-flex-1 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                  <img 
                    src={serviceImg1} 
                    alt="Installation and commissioning" 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                  />
                </div>

                {/* Image 2 */}
                <div className="tw-flex-1 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                  <img 
                    src={serviceImg2} 
                    alt="Service technician on site" 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                  />
                </div>

                {/* Image 3 */}
                <div className="tw-flex-1 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                  <img 
                    src={serviceImg3} 
                    alt="Calibration and testing" 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                  />
                </div>

                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: Inhouse Calibration Lab ==================== */}
      <section className="tw-py-16 md:tw-py-24 tw-bg-gray-50">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-12">
            <h2 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black tw-mb-4 tw-max-w-5xl tw-mx-auto tw-leading-tight">
              Inhouse Calibration Lab as per 17025
            </h2>
            <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
            <p className="tw-text-gray-600 tw-text-base md:tw-text-lg tw-leading-relaxed">
              Our in-house calibration lab is ISO 17025 accredited, ensuring precise and reliable calibration services.
            </p>
          </div>

          <div className="tw-grid md:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12">
            {/* Item 1 */}
            <div className="tw-group">
              <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video tw-mb-6">
                <img src={calibImg1} alt="Calibration bench for water, oil and air" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105" />
              </div>
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-text-center">
                  Calibration bench for water, oil and air
              </h3>
            </div>

            {/* Item 2 */}
            <div className="tw-group">
              <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video tw-mb-6">
                <img src={calibImg2} alt="Inhouse repair of flow meters" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105" />
              </div>
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-text-center">
                  Inhouse repair of flow meters
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: Service Cases Graph ==================== */}
      <section className="tw-py-16 md:tw-py-24 tw-bg-gray-50">
        <div className="tw-container tw-mx-auto tw-px-4">
            <div className="tw-text-center tw-mb-12">
                 <h2 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black tw-mb-4 tw-max-w-5xl tw-mx-auto tw-leading-tight">
                    How are service cases has dropped over the last 4 years graphically depcited
                 </h2>
                 <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
            </div>

            <div className="tw-grid md:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12">
                <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video">
                    <img src={graphImg1} alt="Service Cases Graph 1" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 hover:tw-scale-105" />
                </div>
                <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video">
                    <img src={graphImg2} alt="Service Cases Graph 2" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 hover:tw-scale-105" />
                </div>
            </div>
        </div>
      </section>


      {/* ==================== SECTION 4: Automation Services ==================== */}
      <section className="tw-py-16 md:tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-items-center">
            
            {/* Left: Text Content */}
            <div>
               <h2 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-6 tw-leading-tight">
                  Beyond flow measurement we provide automation services like fuel ratio control, combustion system optimization, dosing control
                  <span className="tw-block tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-4 tw-rounded-full"></span>
               </h2>
               
               <div className="tw-text-gray-600 tw-text-base md:tw-text-lg tw-leading-relaxed tw-space-y-6">
                  <p>
                    We develop intelligent control solutions that manage critical process parameters such as fuel–air balance, thermal efficiency, and accurate chemical injection. These systems are engineered to deliver stable operations, minimize energy losses, and maintain consistent output quality across varying operating conditions.
                  </p>
                  <p>
                    By integrating real-time process data with advanced control logic, our solutions enable improved operational visibility, enhanced safety, and long-term reliability. The result is optimized performance, reduced manual intervention, and improved compliance with industry standards across diverse industrial applications.
                  </p>
               </div>
            </div>

            {/* Right: Image */}
            <div className="tw-relative tw-h-[300px] md:tw-h-[450px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
               <img 
                 src={automationImg} 
                 alt="Automation Services and Control Solutions" 
                 className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105" 
               />
               {/* Decorative Element */}
               <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-24 tw-h-24 tw-bg-[#ffd700] tw-rounded-tl-full tw-opacity-80"></div>
            </div>

          </div>
        </div>
      </section>

      

    </div>
  )
}

export default ServicesPage;