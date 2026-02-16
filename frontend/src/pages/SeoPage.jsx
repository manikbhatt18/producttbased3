import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Accordion, useAccordionButton, Card } from 'react-bootstrap';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// ====================================================================
// 🟢 IMAGE PLACEHOLDERS (Replace these with your real imports)
// ====================================================================
import slide1 from "../images/banner 25.jpg";
import slide2 from "../images/bg2.jpg";
import slide3 from "../images/Flow web banner  (1600 x 833 px).jpg";

/* === Import every logo that lives under src/images (put correct cases!) === */
import adani from "../images/adani.png";
import cairn from "../images/Cairn.png";
import client2 from "../images/client2.jpg";
import client3 from "../images/client3.png";
import client4_1 from "../images/client4 (1).jpg";
import client4_180 from "../images/client4-180x96.png";
import client5_180 from "../images/client5-180x96.png";
import client5 from "../images/client5.jpg";
import client6_180 from "../images/client6-180x96.png";
import client6 from "../images/client6.jpg";
import client7_180 from "../images/client7-180x96.png";
import client8_180 from "../images/client8-180x96.png";
import client8 from "../images/client8.jpg";
import client9_180 from "../images/client9-180x96.png";
import client10_180 from "../images/client10-180x96.png";
import client11_180 from "../images/client11-180x96.png";
import client12_180 from "../images/client12-180x96.png";
import drReddys from "../images/Dr.-Reddys.png";
import essarSteel from "../images/essar-steel.png";
import gaar from "../images/Gaar.png";
import hindustan from "../images/hindustan.png";
import itcHotels from "../images/itc-hotels.png";
import jindal from "../images/jindal.png";
import ltLogo from "../images/lt_logo.png";
import mahindraRise from "../images/Mahindra-rise.png";
import motherDairy from "../images/mother-dairy.png";
import ntpc from "../images/NTPC.png";
import ocmLuxury from "../images/ocm-lxury.png";
import oilLtd from "../images/oilltd.png";
import roorkee from "../images/roorkee.png";
import schneider from "../images/Schneider.png";
import smec from "../images/smec.png";
import sterlingWilson from "../images/sterling-wilson.png";
import taj from "../images/Taj.png";
import ultratech from "../images/ultratech-cement.png";
import voltas from "../images/voltas.png";



// Product Images
import ultrasonicimg from "../images/p1a.png";
import electromagneticimg from "../images/p7a.jpg";
import watermetersimg from "../images/sja.png";
import podisplacementimg from "../images/p11a.jpg";
import rotameterimg from "../images/p24a.jpg";
import sappflowmeter from "../images/p23a.png";
import thermalmassimg from "../images/p15a.png";
import gasflowmeterimg from "../images/p19a.png";
import vorteximg from "../images/p16a.jpg";
// Icons for RightChoiceSeo
const iconExperience = "https://placehold.co/100x100/ffd700/000?text=Exp";
const iconCustomize = "https://placehold.co/100x100/ffd700/000?text=Cust";
const iconShipment = "https://placehold.co/100x100/ffd700/000?text=Ship";
const iconSatisfaction = "https://placehold.co/100x100/ffd700/000?text=Sat";
const iconExperts = "https://placehold.co/100x100/ffd700/000?text=Team";
const iconQuality = "https://placehold.co/100x100/ffd700/000?text=Qual";

// Image for MainContentSeo
const mainContentImg = "https://placehold.co/600x500/ffd700/000?text=Playschool+Toys";




// Client Logos (Mock array)
const clientLogos = Array(15).fill("https://placehold.co/150x80/fff/ccc?text=Client+Logo");


// ====================================================================
// 🔹 DATA CONSTANTS
// ====================================================================

const featuresData = [
  { icon: iconExperience, title: 'Years Of Experience', description: 'With 75+ years of experience in this industry, we have established ourselves as a trusted name.' },
  { icon: iconCustomize, title: 'Customize Collection', description: 'We aim to nurture the needs of our clients by offering tailored and customized solutions.' },
  { icon: iconShipment, title: 'Worldwide Shipment', description: 'With worldwide reach, we are devoted to delivering undamaged products promptly.' },
  { icon: iconSatisfaction, title: 'Client Satisfaction', description: 'Since our establishment, we are committed to bringing the utmost satisfaction to our clients.' },
  { icon: iconExperts, title: 'Team Of Experts', description: 'We have a dedicated team of experts who are committed to offering unparalleled service.' },
  { icon: iconQuality, title: 'Premium Quality Products', description: 'Experience top-quality products that enhance your operations and provide lasting value.' },
];

const seoContent = [
  {
    image: mainContentImg,
    sections: [
      {
        title: 'Playschool Toys in Ranchi',
        paragraphs: [
          'In Ranchi, Maskeen Overseas is one of the leading and most dignified names in the industry related to the manufacturing of playschool toys and school furniture. We are a renowned manufacturer in Ranchi of playschool toys and were founded in 1948 to bring joy and happiness to the fascinating and vibrant world of children. This kid’s brand was incepted under the majestic leadership of CEO Mr. Sahibjeet Singh, who aims to deliver valuable and money-worthy products.',
          'The nature of our business in Ranchi involves trusted manufacturers, suppliers, and exporters of this industry. The key features of our unmatched services in Ranchi include the best customer care support, fast-paced delivery, high-quality material, undamaged product shipment. In Ranchi, with our years of expertise in this respective domain, we have made momentous growth to understand the need of this sector and are dedicated to serving in Ranchi an exquisite range of safe and durable playschool toys at competitive price rates.',
          'Introducing Maskeen Overseas - your go-to destination for high-quality toys in Ranchi that inspire imagination and foster creativity. As one of the leading Play School Toys Manufacturers in Ranchi, we take immense pride in crafting a diverse range of toys that cater to the unique needs of young learners. Our commitment to excellence and safety ensures that every toy in Ranchi we create not only entertains but also educates, making playtime an enriching experience for children. You can trust in the power of play and the importance of a conducive learning environment in Ranchi. We are dedicated to providing you with top-notch toys and school furniture in Ranchi. Our products in Ranchi are made to enrich the lives of children and help them grow.',
        ],
      },
      {
        title: 'School Furniture Suppliers in Ranchi',
        paragraphs: [
          'We understand that a conducive learning environment in Ranchi is crucial for students’ growth and development. Therefore, our school furniture in Ranchi is thoughtfully designed to promote comfort and ergonomic support, fostering an ideal atmosphere for learning. Beyond our captivating selection of toys, we extend our expertise as one of the most reliable School Furniture Suppliers in Ranchi. From colourful playroom setups to functional classroom arrangements, we offer durable and aesthetically pleasing furniture solutions in Ranchi to elevate any educational space. As suppliers of school furniture in Ranchi, we are committed to providing affordable and safe products that encourage children to learn and grow in a healthy environment.',
        ],
      },
    ],
  },
];

const productData = {
  "Ultrasonic Flow Meters": { name: "Ultrasonic Flow Meters", link: "/product", image: ultrasonicimg },
  "Electromagnetic Flow Meters": { name: "Electromagnetic Flow Meters", link: "/product-detail/detail7", image: electromagneticimg },
  "Water Meters": { name: "Water Meters", link: "/product-detail/detail9", image: watermetersimg },
  "Positive Displacement Meters": { name: "Positive Displacement Meters", link: "/product-detail/detail11", image: podisplacementimg },
  "Rotameters (Variable Area Flow Meters)": { name: "Rotameters (Variable Area Flow Meters)", link: "/product-detail/detail24", image: rotameterimg },
  "Special Application Flow Meters": { name: "Special Application Flow Meters", link: "/product-detail/detail23", image: sappflowmeter },
  "Thermal Mass Flow Meters": { name: "Thermal Mass Flow Meters", link: "/product-detail/detail15", image: thermalmassimg },
  "Gas Flow Meters (Mechanical)": { name: "Gas Flow Meters (Mechanical)", link: "/product-detail/detail19", image: gasflowmeterimg },
  "Vortex Flow Meters": { name: "Vortex Flow Meters", link: "/product-detail/detail16", image: vorteximg }
};

const videoData = {
  mainHeading: "Recognized for Excellence in Play School Toys and Furniture",
  mainDescription: "Maskeen Overseas proudly stands as an industry leader, recognized for its commitment to quality and innovation. Awarded the prestigious titles of “Best Playschool Toys and Furniture Brand of the Year” and “Most Trusted Play School Toys Manufacturer in India,” we continue to craft toys and furniture that inspire joy, learning, and trust. These accolades reflect our dedication to creating safe, educational, and delightful experiences for children across the nation.",
  videos: [
    { videoId: '7y3uk_SI-Ys', title: 'Maskeen Overseas Won GEA2022 For Best Playschool Toys and Furniture Brand of the Year' },
    { videoId: 'Q0HQlCzq0Hs', title: 'Maskeen Overseas won GEA2019 award for Most Trusted Play School Toys Manufacturer in India' },
  ],
};

const faqs = [
    { q: "What types of flow meters are available, and how do they differ?", a: "At IOTAFLOW, we don’t believe in a one-size-fits-all solution. Through partnerships with 8+ global technology leaders across Europe and Japan, we offer a complete portfolio of flow measurement technologies — so you always get the right-fit solution, not a forced one. Our range includes Electromagnetic (Mag) meters, Ultrasonic meters, Thermal Mass meters, Coriolis mass meters, Vortex meters, Positive Displacement & Oval Gear meters, and Rotameters. With 25+ years of engineering expertise, IOTAFLOW delivers solutions that are accurate, efficient, and application-specific — never compromised." },
    { q: "Which flow meter should I choose for my application?", a: "The best flow meter depends on the type of fluid (liquid, gas, slurry), flow range, accuracy requirements, temperature and pressure conditions, and integration needs (digital output, IoT/LoRaWAN, etc.). Our team at IOTAFLOW works with global partners to recommend the right-fit solution, ensuring accuracy and efficiency without overspending." },
    { q: "What factors affect accuracy in flow measurement?", a: "Several factors can reduce accuracy: poor installation, air bubbles or solid particles, incorrect meter selection, wear and tear, and lack of regular calibration. At IOTAFLOW, we not only supply the right flow meter but also guide you on proper installation, filtration, and calibration to ensure long-term accuracy and peace of mind." },
    { q: "Why is proper meter installation and flow conditioning essential?", a: "Proper installation and flow conditioning are critical for accurate measurement. Factors like turbulence, short pipe runs, or incorrect alignment can create distorted flow profiles that lead to errors. Using straight pipe runs, flow conditioners, and correct mounting ensures your flow meter delivers reliable and repeatable data. At IOTAFLOW, we guide customers through best practices in installation and setup to ensure long-term accuracy." },
    { q: "How do I integrate flow meter data into my control systems?", a: "Most modern flow meters provide outputs such as Analog (4–20mA), Pulse outputs, and Digital protocols (Modbus, Profibus, Ethernet, etc.). At IOTAFLOW, we deliver solutions that integrate seamlessly with your SCADA, PLC, or IoT / LoRaWAN systems, enabling real-time monitoring and control." },
    { q: "What details should I provide when requesting a flow meter?", a: "To receive the most accurate solution, please provide: fluid type and properties, flow rate and pressure range, temperature conditions, accuracy requirements, pipe size and connection details, preferred signal outputs, and any IoT / LoRaWAN or CGWA Compliance requirements." },
];

// ====================================================================
// 🔹 HELPER COMPONENTS
// ====================================================================

function CustomToggle({ children, eventKey, activeKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);
  const isOpen = activeKey === eventKey;
  return (
    <div onClick={decoratedOnClick} className={`tw-w-full tw-cursor-pointer tw-p-5 tw-text-xl tw-font-bold tw-flex tw-transition-all tw-duration-300 focus:tw-outline-none ${isOpen ? 'tw-bg-black tw-text-white' : 'tw-bg-white tw-text-black'}`}>
      <span className="tw-font-bold tw-mr-3">{isOpen ? "–" : "+"}</span>
      <span>{children}</span>
    </div>
  );
}

const YouTubeEmbed = ({ videoId, title }) => (
  <>
    <iframe className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded-xl" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black/20 group-hover:tw-bg-black/40 tw-transition-all tw-duration-300 tw-rounded-xl tw-pointer-events-none">
        <svg className="tw-w-16 tw-h-16 tw-text-white/80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
    </div>
  </>
);



// ====================================================================
// 🔹 SECTIONS
// ====================================================================

function BannerSliderSeo() {
  const [index, setIndex] = useState(0);
  const slides = [
    { img: slide2, heading: "UTILITIES are most Valuable,", subHeading: "When they stay INVISIBLE.", text: "Un-regulated / Un-Monitored utility expenses are draining your Money." },
    { img: slide1, heading: "Protecting Your Reputation,", subHeading: "Always.", text: "With IOTAFLOW, you gain a lean, reliable partner ensuring accuracy, efficiency, and peace of mind in flow measurement — year after year." },
    { img: slide3, heading: "Your Process is Unique,", subHeading: "So Are Our Solutions.", text: "We don’t believe in one-size-fits-all. At IOTAFLOW, every customer gets custom flow measurement solutions designed to fit their unique needs — without compromise." },
  ];
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);
  const handlePrev = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
  const handleNext = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div className="tw-relative">
      <Carousel fade controls={false} indicators={false} interval={4000} pause={false} activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className="!tw-h-auto">
            <motion.div initial={{ scale: 1 }} animate={{ scale: 1.05 }} transition={{ duration: 4, ease: "easeInOut" }}>
              <img src={slide.img} className="tw-block tw-w-full tw-shadow-lg tw-h-auto tw-max-h-[300px] sm:tw-max-h-[600px] tw-object-cover tw-bg-black" alt={`Slide ${idx}`} />
              <Carousel.Caption className="!tw-p-6 sm:!tw-p-12 md:!tw-p-24 !tw-top-1/2 !tw-left-0 !tw-right-auto !tw-bottom-auto !-tw-translate-y-1/2 !tw-text-left">
                <div className="tw-bg-black/50 tw-p-7 tw-ml-10 tw-rounded-lg tw-max-w-md lg:tw-max-w-2xl tw-text-white">
                  <h1 className="tw-font-bold tw-text-yellow-400 tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl">{slide.heading}</h1>
                  <h2 className="tw-font-bold tw-text-white tw-text-xl sm:tw-text-2xl lg:tw-text-3xl">{slide.subHeading}</h2>
                  <p className="tw-text-sm sm:tw-text-base lg:tw-text-lg">{slide.text}</p>
                  <button className="tw-hidden sm:tw-inline-block tw-relative group tw-overflow-hidden tw-border-none tw-text-lg tw-py-2 tw-px-4 tw-rounded-md tw-cursor-pointer hover:tw-scale-105 tw-transition-transform tw-duration-300 tw-bg-yellow-400 tw-text-black ">
                    <span className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-white tw-transform tw--translate-x-full group-hover:tw-translate-x-0 tw-transition-transform tw-duration-500 tw-ease-in-out tw-z-10"></span>
                    <span className="tw-relative tw-z-20 tw-transition-colors tw-duration-300 group-hover:tw-text-yellow-500">Our Products</span>
                  </button>
                </div>
              </Carousel.Caption>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="tw-hidden md:tw-flex tw-absolute tw-bottom-5 tw-right-5 tw-z-10 tw-gap-2">
        <Button variant="light" onClick={handlePrev}>&lt;</Button>
        <Button variant="warning" onClick={handleNext}>&gt;</Button>
      </div>
    </div>
  );
}

function RightChoiceSeo() {
  return (
    <section className="tw-bg-white tw-py-20 tw-text-[#1f1e1d]">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4">
            Why We're the Right Choice?
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-20 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>
        <Row className="justify-content-center">
          {featuresData.map((feature, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="group tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-h-full hover:tw-bg-[#ffcc00] hover:tw--translate-y-2 tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden">
                <div className="tw-flex tw-items-start tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0">
                  <div className="tw-mr-5">
                    <img src={feature.icon} alt={`${feature.title} icon`} className="tw-w-12 tw-h-12" />
                  </div>
                  <div className="tw-text-left">
                    <h5 className="tw-text-yellow-400 tw-font-semibold tw-text-xl tw-mb-2">{feature.title}</h5>
                    <p className="tw-text-[#1f1e1d] tw-text-base tw-mb-0">{feature.description}</p>
                  </div>
                </div>
                <div className="tw-absolute tw-inset-0 tw-p-6 tw-flex tw-items-center tw-justify-center tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300">
                  <p className="tw-text-[#1f1e1d] tw-text-base tw-text-center tw-mb-0">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function MainContentSeo() {
  const contentBlock = seoContent[0];
  const mainSection = contentBlock.sections[0];
  const otherSections = contentBlock.sections.slice(1);
  return (
    <section className="tw-bg-[#ffcc00] tw-py-16">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h1 className="tw-font-bold tw-text-4xl tw-text-gray-800">{mainSection.title}</h1>
          <div className="tw-mt-2 tw-mx-auto tw-w-24 tw-h-1 tw-bg-[#f6e6aa]"></div>
        </div>
        <Row className="tw-items-center">
          {contentBlock.image && (
            <Col md={5} className="tw-mb-8 md:tw-mb-0">
              <img src={contentBlock.image} alt="Promotional collage" className="tw-rounded-lg tw-shadow-lg tw-w-full" />
            </Col>
          )}
          <Col md={contentBlock.image ? 7 : 12}>
            <div className="tw-space-y-4">
              {mainSection.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="tw-text-black tw-leading-relaxed">{paragraph}</p>
              ))}
            </div>
            {otherSections.map((section, secIndex) => (
              <div key={secIndex} className="tw-mt-8">
                <h2 className="tw-font-bold tw-text-3xl tw-text-gray-800 tw-mb-4">{section.title}</h2>
                <div className="tw-space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="tw-text-black tw-leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function ProductsSeo() {
  const products = Object.values(productData);
  return (
    <section className="tw-bg-white tw-py-20">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4">
            Our Products
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-24 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={6} lg={4} className="tw-mb-8">
              <Link to={product.link} onClick={() => window.scrollTo(0, 0)} className="tw-block tw-group">
                <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-aspect-video">
                  <img src={product.image} alt={product.name} className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 tw-ease-in-out group-hover:tw-scale-110 tw-will-change-transform" />
                  <div className="tw-absolute tw-inset-0 tw-bg-black/50 tw-transition-all tw-duration-300 group-hover:tw-bg-black/70"></div>
                  <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-p-4">
                    <h5 className="tw-text-white tw-font-bold tw-text-xl tw-text-center tw-transition-transform tw-duration-300 group-hover:tw-scale-105">{product.name}</h5>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function OurClients() {

  const clientLogos = [
      adani, cairn, client2, client3, client4_1, client4_180, client5_180, 
      client5, client6_180, client6, client7_180, client8_180, client8, 
      client9_180, client10_180, client11_180, client12_180, drReddys, 
      essarSteel, gaar, hindustan, itcHotels, jindal, ltLogo, mahindraRise, 
      motherDairy, ntpc, ocmLuxury, oilLtd, roorkee, schneider, smec, 
      sterlingWilson, taj, ultratech, voltas,
    ];
  return (
    <section className="tw-py-2 tw-mt-[30px]">
      <Container>
        <h3 className="tw-font-bold tw-text-base tw-tracking-wider tw-uppercase tw-flex tw-items-center tw-gap-2.5 tw-mb-5">
          <span className="tw-w-1 tw-h-6 tw-bg-yellow-400 tw-inline-block" /> OUR CLIENTS
        </h3>
        <Swiper slidesPerView={4} spaceBetween={24} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} modules={[Autoplay]} breakpoints={{ 0: { slidesPerView: 2 }, 576: { slidesPerView: 3 }, 992: { slidesPerView: 4 } }}>
          {clientLogos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-h-[300px] tw-flex tw-items-center tw-justify-center">
                <img src={src} alt={`client-logo-${i}`} className="tw-max-h-[200px] tw-max-w-[90%] tw-object-contain tw-grayscale-[20%] tw-transition-all tw-duration-300 hover:tw-grayscale-0 hover:tw-scale-105" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

function YtSeo() {
  return (
    <section className="tw-bg-gray-100 tw-py-20">
      <Container>
        <div className="tw-text-center tw-max-w-4xl tw-mx-auto tw-mb-12">
          <h2 className="tw-font-bold tw-text-3xl md:tw-text-4xl tw-mb-4">
            {videoData.mainHeading.split('Play School Toys and Furniture').map((part, index, array) => index < array.length - 1 ? <span key={index}>{part}<span className="tw-text-yellow-500">Play School Toys and Furniture</span></span> : <span key={index}>{part}</span>)}
          </h2>
          <p className="tw-text-gray-600 tw-text-base md:tw-text-lg">{videoData.mainDescription}</p>
        </div>
        <Row className="justify-content-center">
          {videoData.videos.map((video, index) => (
            <Col key={index} md={10} lg={6} className="mb-8">
              <div className="tw-bg-white tw-p-4 tw-rounded-xl tw-shadow-md">
                <div className="tw-relative tw-w-full tw-overflow-hidden tw-rounded-xl tw-cursor-pointer group" style={{ paddingBottom: '56.25%' }}>
                    <YouTubeEmbed videoId={video.videoId} title={video.title} />
                </div>
                <p className="tw-font-semibold tw-text-center tw-mt-4 tw-px-2">{video.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function Faqs() {
  const [activeKey, setActiveKey] = useState("-1");
  return (
    <section className="tw-py-20 tw-pb-[140px]">
      <Container>
        <h3 className="tw-text-3xl tw-font-bold tw-mb-8"><span className="tw-border-l-4 tw-border-yellow-400 tw-pl-3">FAQ’S</span></h3>
        <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k ?? "")}>
          {faqs.map((f, idx) => {
            const key = String(idx);
            const isOpen = activeKey === key;
            return (
              <Card key={f.q} className="tw-border-2 tw-border-black tw-rounded-lg tw-mb-3 tw-overflow-hidden !tw-bg-transparent">
                <Card.Header className="!tw-p-0 !tw-border-0">
                  <CustomToggle eventKey={key} activeKey={activeKey}>{f.q}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={key}>
                  <Card.Body className={`!tw-p-6 ${isOpen ? 'tw-bg-black' : 'tw-bg-white'}`}>
                    <p className={`tw-text-base tw-leading-relaxed tw-m-0 ${isOpen ? 'tw-text-white' : 'tw-text-gray-700'}`}>{f.a}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
}

// ====================================================================
// 🔹 MAIN COMPONENT
// ====================================================================

const SeoPage = () => {
  return (
    <>
      <BannerSliderSeo />
      <RightChoiceSeo />
      <MainContentSeo />
      <ProductsSeo />
      <OurClients />
      <YtSeo />
      <Faqs />
    </>
  );
}

export default SeoPage;