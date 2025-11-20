import React from 'react';

// --- Placeholder Icons ---
// You can replace these with your actual icon components when they are ready.

// Placeholder for "Remote Telemetry System" (Signal waves)
const IconTelemetry = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0-4.418-4.03-8-9-8S3 7.582 3 12c0 3.865 3.13 7.047 7.205 7.802" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6M12 18h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929C15.166 1.024 8.834 1.024 4.929 4.929" />
  </svg>
);

// Placeholder for "Smart Water Meter Support" (Water drop)
const IconWaterDrop = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

// Placeholder for "Industry 4.0 Ready" (Settings gear)
const IconSettings = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Placeholder for "Regulatory Compliance" (Shield)
const IconShield = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Placeholder for "Data Accessibility" (Database)
const IconDatabase = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v4c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
  </svg>
);
// --- End Placeholder Icons ---


// Card component to display each feature
const FeatureCard = ({ icon, title, className }) => (
  // Added tw-flex, tw-items-center, and tw-gap-4 to align icon and text side-by-side
  <div className={`tw-bg-white tw-border tw-border-gray-100 tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-items-center tw-gap-4 tw-text-left tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-scale-[1.02] ${className}`}>
    {/* Icon Wrapper with flex-shrink-0 to prevent squishing */}
    <div className="tw-inline-flex tw-flex-shrink-0 tw-items-center tw-justify-center tw-p-3 tw-rounded-lg tw-bg-[#ffd700]">
      {icon}
    </div>
    {/* Removed top margin (tw-mt-4) since it is now side-by-side */}
    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">
      {title}
    </h3>
  </div>
);

// Main Component
function WhychooseIOT() {
  const features = [
    {
      icon: <IconTelemetry className="tw-w-7 tw-h-7 tw-text-black" />,
      title: "Remote Telemetry System (RTS) for Flow",
    },
    {
      icon: <IconWaterDrop className="tw-w-7 tw-h-7 tw-text-black" />,
      title: "Smart Water Meter / Digital Water Meter Support",
    },
    {
      icon: <IconSettings className="tw-w-7 tw-h-7 tw-text-black" />,
      title: "Industry 5.0 & IIoT Ready",
    },
    {
      icon: <IconShield className="tw-w-7 tw-h-7 tw-text-black" />,
      title: "Regulatory Compliance",
    },
    {
      icon: <IconDatabase className="tw-w-7 tw-h-7 tw-text-black" />,
      title: "Data & Visualisation Anytime, Anywhere",
    }
  ];

  return (
    <div className="tw-bg-gray-50 tw-py-16 sm:tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        {/* Header Section */}
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto">
          <h2 className="tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-black">
            Why Choose IOT Sense?
          </h2>
        </div>

        {/* Features Container */}
        <div className="tw-mt-12 tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              className="tw-w-full md:tw-w-[calc(50%-1rem)] lg:tw-w-[calc(33.333%-1.333rem)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhychooseIOT;