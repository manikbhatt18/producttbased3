import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Data for all 7 accessories
const accessoriesData = [
  {
    id: 1,
    title: "Strainers & Filters",
    description: (
      <>
        <p className="tw-mb-4">
          Industrial-grade strainers engineered for cold water, hot water, and oil service, ensuring long-term protection and accuracy for Woltmann, Multijet, and RPD flow meters. Available in Simplex, Duplex, Y-type, and TEE-type configurations for 8 mm–900 mm lines with flanged or screwed connections (PN 16 / Class #150).
        </p>
        <p className="tw-mb-4">
          Constructed from MS, Cast Iron, SS304, or SS316 with SS304 baskets rated 150 microns–1.6 mm (40 mesh / 250 µ). Withstand 10 bar working / 16 bar test pressure, feature neoprene seals, ¼″–1″ drain plugs, and optional butterfly valve isolation on duplex versions.
        </p>
        <p>
          Designed to extend meter life, maintain flow accuracy, and ensure compliance for industrial and utility applications under CGWA / CPCB monitoring frameworks.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=Strainers+%26+Filters"
  },
  {
    id: 2,
    title: "Matching Flanges, Nuts, Bolts & Gaskets (Installation Kit)",
    description: (
      <>
        <p className="tw-mb-4">
          Comprehensive installation kits comprising precision-machined mating flanges, nuts, bolts, and gaskets for secure coupling of Woltmann, electromagnetic, ultrasonic, turbine, Vortex and RPD flow meters.
        </p>
        <p className="tw-mb-4">
          Available for 8 mm–1200 mm line sizes, manufactured in MS, SS304, or SS316, and supplied with flanges drilled to ASME/ANSI B16.5 (Class 150 / 300) and EN 1092-1 PN16 standards for global compatibility.
        </p>
        <p>
          Suitable for water, oil, air, steam, slurry, and chemical services, the kits ensure accurate alignment, uniform sealing, and correct torque transfer, preventing meter strain and leakage. Delivered with GI/SS fasteners and CAF / EPDM / PTFE gaskets, they provide long-term sealing integrity and compliance with CGWA / CPCB flow-meter installation requirements.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=Installation+Kit"
  },
  {
    id: 3,
    title: "Air Release Systems",
    description: (
      <>
        <p className="tw-mb-4">
          IOTAFLOW Air Release Systems are designed for oil and hydrocarbon pipelines to remove trapped air and ensure accurate performance of RPD, Turbine, and Oval Gear flow meters. Suitable for 15 mm to 250 mm meter sizes, this unit is installed on the cover of IOTAFLOW Simplex Strainers for easy integration.
        </p>
        <p className="tw-mb-4">
          Built with a cast aluminium body and stainless-steel ball, the system quickly releases air pockets that cause wrong readings, pressure drops, corrosion, and water hammer. By maintaining a clean, air-free flow, it improves meter accuracy, pump efficiency, and overall pipeline reliability.
        </p>
        <p>
          Optimized for Indian conditions and widely used in industrial oil flow lines.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=Air+Release+Systems"
  },
  {
    id: 4,
    title: "Remote Display Units",
    description: (
      <>
        <div className="tw-mb-6">
          <h4 className="tw-font-bold tw-text-black tw-mb-2">Model: FI-106 Series – Flow Indicator Totalizers</h4>
          <p className="tw-mb-2">
            Remote Display Units are designed for clear, panel-mounted indication of flow rate and total flow for field-installed flow meters. Compatible with RPD, Turbine, Electromagnetic, Ultrasonic, and other inline meters, these units accept 0–20 mA, 4–20 mA, and voltage (1–5 V / 0–5 V) signals with linear or square-root extraction.
          </p>
          <p>
            Available in standard ABS enclosures and flame-proof CMRI-certified models, they offer large readouts up to 0–9999 (flow) and 0–99,999,999 (total) with optional pressure and temperature compensation. Powered by 230 VAC, 24 VDC, 110 VAC, or 24 VAC.
          </p>
        </div>
        <div>
          <h4 className="tw-font-bold tw-text-black tw-mb-2">Model: FI-108 Series (Data Logger Models)</h4>
          <p className="tw-mb-2">
            IOTAFLOW FI-108 Series Remote Display Data Loggers provide local indication and long-term data storage. Available in 1/2/3/4/8-channel configurations, logging up to 180 days of data.
          </p>
          <p>
            Equipped with a 3-inch LCD display, onboard RTC, and USB 2.0 data export. Sized at 160 mm × 80 mm, this compact accessory enhances visibility and strengthens digital compliance in Indian industrial flow-metering systems.
          </p>
        </div>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=Remote+Display+Units"
  },
  {
    id: 5,
    title: "Telemetry Systems - 4G RTU IOT Gateways",
    description: (
      <>
        <p className="tw-mb-4">
          IOTAFLOW Telemetry Systems combine 4G RTU Gateways and RTU-IOT4G NIC-compliant units to deliver fully automated, real-time data transfer for industrial water, oil, and groundwater monitoring applications. Built with integrated RTU, power supply, SIM tray, and 4G GSM/GPRS modem, these gateways support Modbus inputs from 1, 2, or 4 flow meters.
        </p>
        <p>
          Designed for India’s regulatory landscape, the system meets CGWA, CPCB, SPCB, and State Groundwater authority compliance by enabling automatic hourly data transfer, tamper-proof logging, and authenticated online reporting.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=Telemetry+Systems"
  },
  {
    id: 6,
    title: "UPS-600VA-IOTAFLOW",
    description: (
      <>
        <p className="tw-mb-4">
          Compact UPS Power Backup Unit ensures uninterrupted operation of flow meters, telemetry systems, RTUs, and data loggers used in Indian industrial water, oil, and utility monitoring. With a 360 W / 600 VA load capacity, AVR, and a wide 145–290 V input range, it stabilizes voltage and protects sensitive metering equipment.
        </p>
        <p>
          The unit provides three battery-backed, surge-protected outputs with 6A Indian sockets and a fast 10–12 ms transfer time, preventing data loss during power cuts. Optimized for CGWA, CPCB, SPCB, and NIC-compliant installations.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=UPS+Power+Backup"
  },
  {
    id: 7,
    title: "Custom Flow Straighteners",
    description: (
      <>
        <p className="tw-mb-2"><span className="tw-font-bold">Purpose:</span> Stabilize turbulence and achieve precise velocity profiles before measurement.</p>
        <p className="tw-mb-2"><span className="tw-font-bold">Use Case:</span> Non-ideal pipeline layouts, elbows or valves near the sensor.</p>
        <p><span className="tw-font-bold">Specs:</span> Material, L/D ratio, compatibility range (Customizable).</p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1f2937?text=Flow+Straighteners"
  }
];

const AccessoryItem = ({ item, isReversed }) => {
  return (
    // ADDED: id attribute to allow navigation to this specific section
    <div id={`accessory-${item.id}`} className={`tw-flex tw-flex-col ${isReversed ? 'md:tw-flex-row-reverse' : 'md:tw-flex-row'} tw-items-center tw-gap-8 md:tw-gap-16 tw-py-12 md:tw-py-20 tw-scroll-mt-24`}>
      
      {/* Image Side with Background Design */}
      <div className="tw-w-full md:tw-w-1/2 tw-relative tw-flex tw-items-center tw-justify-center">
        {/* The Decorative Background Shape */}
        <div 
          className={`tw-absolute tw-top-0 tw-bottom-0 tw-w-[120%] tw-bg-gray-100 tw-z-0
            ${isReversed 
              ? 'tw-rounded-l-[100px] tw-right-[-20%]' 
              : 'tw-rounded-r-[100px] tw-left-[-20%]'
            }
            hidden md:tw-block
          `}
        ></div>
         {/* Mobile Background Shape */}
         <div className="md:tw-hidden tw-absolute tw-inset-0 tw-bg-gray-100 tw-rounded-3xl tw-transform tw-scale-90 tw-z-0"></div>

        <img 
          src={item.image} 
          alt={item.title} 
          className="tw-relative tw-z-10 tw-w-full tw-max-w-md tw-h-auto tw-object-contain tw-drop-shadow-xl tw-transition-transform tw-duration-500 hover:tw-scale-105"
        />
      </div>

      {/* Content Side */}
      <div className="tw-w-full md:tw-w-1/2 tw-text-left">
        <h3 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-6">
          {item.title}
        </h3>
        
        <div className="tw-text-base tw-text-gray-600 tw-leading-relaxed tw-mb-8">
          {item.description}
        </div>

        <a 
          href="#contact" 
          className="tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-3 tw-text-base tw-font-bold tw-text-black tw-bg-[#ffd700] tw-rounded-full tw-shadow-md tw-transition-all tw-duration-300 hover:tw-bg-yellow-400 hover:tw-shadow-lg hover:-tw-translate-y-1"
        >
          Contact Us <span className="tw-ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

function Accessories() {
  const { hash } = useLocation();

  // Effect to handle scrolling when hash changes (e.g., clicking from navbar)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#'
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Slight delay to ensure rendering
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="tw-bg-white tw-overflow-hidden">
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-16">
        
        {/* Optional Header */}
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16">
          <h2 className="tw-text-3xl lg:tw-text-5xl tw-font-bold tw-text-black">
            Our Accessories
          </h2>
          <p className="tw-mt-4 tw-text-gray-600">
            Essential components for installation, compliance, and enhanced performance.
          </p>
        </div>

        {/* Accessories List */}
        <div className="tw-space-y-8">
          {accessoriesData.map((item, index) => (
            <AccessoryItem 
              key={item.id} 
              item={item} 
              isReversed={index % 2 !== 0} // Alternates: False, True, False...
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Accessories;