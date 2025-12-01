import React from 'react';

import realWorldImg from '../../images/TRX_Ultrasonic_Air_Flow_Meter.png';

function Realworld() {
  return (
    <div className="tw-bg-white tw-py-16 sm:tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        
        {/* Grid Layout: Content Left, Image Right */}
        <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-items-center">
          
          {/* Left Side: Content with Vertical Line */}
          <div className="tw-flex tw-items-stretch">
            
            {/* The Vertical Grey Line */}
            <div className="tw-w-1.5 tw-bg-gray-300 tw-rounded-full tw-flex-shrink-0 tw-mr-6 sm:tw-mr-8"></div>

            {/* Text Content */}
            <div className="tw-py-2">
              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Real-World Application: Enhancing Compressor Efficiency with TRX Ultrasonic Air Flow Meter
              </h2>

              <div className="tw-space-y-4 tw-text-base sm:tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                <p>
                  Compressed air systems are among the most energy-intensive operations in manufacturing — accounting for <span className="tw-font-bold tw-text-black">up to 23% of a plant’s total energy consumption.</span>
                </p>
                
                <p>
                  By integrating our TRX Ultrasonic Air Flow Meter (UFM) with the IoT Sense platform and an energy meter, you can achieve real-time monitoring of air generation versus energy consumption. The system tracks kilowatt-hours (kWh) consumed per cubic meter (m³) of compressed air produced, providing an instant snapshot of compressor performance.

                </p>
                
                <p className="tw-italic tw-text-gray-600 tw-font-medium">
                  An interactive live dashboard instantly detects efficiency drops, leakages, or overloading, enabling proactive, predictive maintenance that drives energy savings, enhances operational transparency, and reduces compressor energy costs for sustainable performance.

                </p>
              </div>

              {/* Learn More Button */}
              <div className="tw-mt-8">
                <a 
                  href="/" // Replace with your actual link
                  className="tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-3 tw-text-base tw-font-bold tw-text-black tw-bg-[#ffd700] tw-rounded-lg tw-shadow-md tw-transition-all tw-duration-300 hover:tw-bg-yellow-400 hover:tw-shadow-lg hover:-tw-translate-y-1 tw-no-underline"
                >
                  Learn More
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="tw-relative tw-w-full tw-h-54 sm:tw-h-80 lg:tw-h-full tw-min-h-[400px] tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center tw-shadow-sm">
            {/* Replace this image source with your actual image later */}
            <img 
              src= {realWorldImg}
              alt="Real World Use Case Visual" 
              className="tw-w-full tw-h-full tw-object-contain"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Realworld;