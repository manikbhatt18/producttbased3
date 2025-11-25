import React from 'react';

import waterUtilitiesImg from '../../images/Iotsense_Emoticons_WaterUtilities.png';
import industrialPlantsImg from '../../images/Iotsense_Emoticons_IndustrialPlants.png';
import groundwaterComplianceImg from '../../images/Iotsense_Emoticons_Ground-WaterCompliance.png';
import facilityManagementImg from '../../images/Iotsense_Emoticons_BuildingManagement.png';
import utilitiesEnergyImg from '../../images/Iotsense_Emoticons_Utilities&Energy.png';

// Card component for each Use Case
const UseCaseCard = ({ title, description, image, className }) => (
  <div 
    // Updated border to gray-200 for light theme compatibility
    className={`tw-relative tw-group tw-overflow-hidden tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-200 tw-h-64 md:tw-h-72 tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-scale-[1.02] ${className}`}
  >
    {/* Background Image */}
    <div 
      className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-transition-transform tw-duration-700 group-hover:tw-scale-110"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    
    {/* Dark Overlay (Low Opacity Background) - Kept dark to ensure text readability and theme consistency */}
    <div className="tw-absolute tw-inset-0 tw-bg-black/70 group-hover:tw-bg-black/60 tw-transition-colors tw-duration-300"></div>

    {/* Content */}
    <div className="tw-relative tw-z-10 tw-p-6 tw-h-full tw-flex tw-flex-col tw-justify-center tw-text-left">
      <h3 className="tw-text-xl tw-font-bold tw-text-[#ffd700] tw-mb-3">
        {title}
      </h3>
      <p className="tw-text-sm md:tw-text-base tw-text-gray-200 tw-leading-relaxed">
        {description}
      </p>
    </div>
    
    {/* Yellow Accent Line at bottom */}
    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-1 tw-bg-[#ffd700] tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-300 tw-origin-left"></div>
  </div>
);

// Main Component
function Usecases() {
  const cases = [
    {
      title: "Water Utilities & Smart Cities",
      description: "Deploy smart water meters, IoT telemetry, remote meter reading (AMR/AMI) networks for leak-detection, NRW (non-revenue water) reduction.",
      image: waterUtilitiesImg // Placeholder
    },
    {
      title: "Industrial Plants & Manufacturing",
      description: "Monitor flow in process lines (cooling water, chemicals, compressed air), correlate with energy use for Industry 4.0 optimisation.",
      image: industrialPlantsImg // Placeholder
    },
    {
      title: "Ground-water / Extraction Compliance",
      description: "Use flow telemetry to meet CGWA limits and export NIC-/government-data formats.",
      image: groundwaterComplianceImg // Placeholder
    },
    {
      title: "Building / Facility Management",
      description: "Flow-meter networks in large campuses, bore-well monitoring, rain-water harvesting, digital water meter networks.",
      image: facilityManagementImg // Placeholder
    },
    {
      title: "Utilities & Energy",
      description: "Steam/condensate flow monitoring, remote telemetry of flow meters in diverse fluid systems.",
      image: utilitiesEnergyImg // Placeholder
    }
  ];

  return (
    // Updated background to light gray (tw-bg-gray-50)
    <div className="tw-bg-gray-50 tw-py-16 sm:tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        
        {/* Header Section */}
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16">
          {/* Updated text color to black/dark gray for contrast on light bg */}
          <h2 className="tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-black">
            Use-Cases & Industry Verticals
          </h2>
          
        </div>

        {/* Use Cases Container (Flexbox for centered layout) */}
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
          {cases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              image={useCase.image}
              className="tw-w-full md:tw-w-[calc(50%-1rem)] lg:tw-w-[calc(33.333%-1.333rem)]"
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Usecases;