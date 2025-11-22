import React from 'react';

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
                Real-World Use Case: Ultrasonic Air Flow Monitoring
              </h2>

              <div className="tw-space-y-4 tw-text-base sm:tw-text-lg tw-text-gray-700 tw-leading-relaxed">
                <p>
                  Integrating our <span className="tw-font-bold tw-text-black">Ultrasonic Air Flow Meter (UFM)</span> with the <span className="tw-font-bold tw-text-black">IOT Sense platform</span> and a <span className="tw-font-bold tw-text-black">power meter</span> on your compressor enables real-time tracking of air generation vs energy consumption.
                </p>
                
                <p>
                  A live dashboard visualises <span className="tw-font-bold tw-text-black">kW consumed per m³ of compressed air</span>, highlighting falling efficiency, leakages, or overloading conditions instantly.
                </p>
                
                <p className="tw-italic tw-text-gray-600 tw-font-medium">
                  This powerful combination delivers predictive maintenance, energy savings, and operational transparency.
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
          <div className="tw-relative tw-w-full tw-h-64 sm:tw-h-80 lg:tw-h-full tw-min-h-[400px] tw-bg-gray-100 tw-rounded-2xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center tw-shadow-sm">
            {/* Replace this image source with your actual image later */}
            <img 
              src="https://placehold.co/800x600/f3f4f6/9ca3af?text=Section+Image+Here" 
              alt="Real World Use Case Visual" 
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Realworld;