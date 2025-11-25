import React from 'react';
import myVideo from '../../images/iotsensevideo.mp4';

function IOTvideo() {
  return (
    <div className="tw-relative tw-w-full tw-h-[600px] tw-flex tw-items-center tw-overflow-hidden">
      {/* Video Background - Absolute Positioning */}
      <video
        className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="tw-absolute tw-inset-0 tw-bg-black/30"></div>

      {/* Content Overlay */}
      <div className="tw-relative tw-z-10 tw-container tw-mx-auto tw-px-4">
        <div className="tw-max-w-3xl tw-bg-black/60 tw-p-8 md:tw-p-10 tw-rounded-xl tw-backdrop-blur-sm tw-border-l-4 tw-border-[#ffd700]">
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-6">
            <span className="tw-text-[#ffd700]">IOT Sense</span> – Smart Flow Intelligence Platform
          </h2>
          <p className="tw-text-lg md:tw-text-xl tw-text-gray-100 tw-leading-relaxed">
            Transform your flow-data into actionable intelligence with IOT Sense: the next-generation IoT & Industry 4.0 platform built specifically for flow measurement, smart water-/utility-metering and remote telemetry systems. Real-time dashboards, cloud connectivity, regulatory compliance (CGWA, CPCB, NIC data-requirements) and full workflow automation — all in one unified solution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IOTvideo;