import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./home-extra.css";

/* === import every logo that lives under src/images (put correct cases!) === */
import adani from "../../images/adani.png";
import cairn from "../../images/Cairn.png"; // <-- make sure this EXACTLY matches the file name
import client2 from "../../images/client2.jpg";
import client3 from "../../images/client3.png";
import client4_1 from "../../images/client4 (1).jpg";
import client4_180 from "../../images/client4-180x96.png";
import client5_180 from "../../images/client5-180x96.png";
import client5 from "../../images/client5.jpg";
import client6_180 from "../../images/client6-180x96.png";
import client6 from "../../images/client6.jpg";
import client7_180 from "../../images/client7-180x96.png";
import client8_180 from "../../images/client8-180x96.png";
import client8 from "../../images/client8.jpg";
import client9_180 from "../../images/client9-180x96.png";
import client10_180 from "../../images/client10-180x96.png";
import client11_180 from "../../images/client11-180x96.png";
import client12_180 from "../../images/client12-180x96.png";
import drReddys from "../../images/Dr.-Reddys.png";
import essarSteel from "../../images/essar-steel.png";
import gaar from "../../images/Gaar.png";
import hindustan from "../../images/hindustan.png";
import itcHotels from "../../images/itc-hotels.png";
import jindal from "../../images/jindal.png";
import ltLogo from "../../images/lt_logo.png";
import mahindraRise from "../../images/Mahindra-rise.png";
import motherDairy from "../../images/mother-dairy.png";
import ntpc from "../../images/NTPC.png";
import ocmLuxury from "../../images/ocm-lxury.png";
import oilLtd from "../../images/oilltd.png";
import roorkee from "../../images/roorkee.png";
import schneider from "../../images/Schneider.png";
import smec from "../../images/smec.png";
import sterlingWilson from "../../images/sterling-wilson.png";
import taj from "../../images/Taj.png";
import ultratech from "../../images/ultratech-cement.png";
import voltas from "../../images/voltas.png";

/* ---------------- HERO ---------------- */
export function HeroBanner() {
  // Put bg1.jpg into /public/images/bg1.jpg (or import it from src if you prefer)
  const HERO_IMG = "/images/bg1.jpg";

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${HERO_IMG})` }}
    >
      <div className="hero-overlay" />
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-end">
          <Col lg={6} className="hero-copy">
            <h1 className="display-1 fw-bold mb-3">
              IOTAFLOW <span className="badge-systems">Systems</span>
            </h1>
            <h2 className="display-5 fw-bold mb-3">
              FLOW METER | IOT/AMR | Calibration
            </h2>
            <p className="lead">
              We measure success by the way we touch the lives of the people. Be
              it our Team, our customers, our vendors or our bankers.
            </p>
            <Button variant="outline-dark" size="lg" className="rounded-0">
              Explore the experience
            </Button>
          </Col>
        </Row>
      </Container>

      <ScrollTop />
    </section>
  );
}

/* ---------------- COMBINED TEXT + CIRCLES ---------------- */
export function StatsModern() {
  return (
    <section className="stats-modern">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          {/* LEFT CONTENT */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="display-4 fw-bold mb-4">
              Your Flow Matters, Our Meters Make the Difference!
            </h2>
            <p className="lead mb-4">
              Iota means minuscule or minute, which we take as inspiration to
              design and deliver flow meters that have an iota of an error.
              Flow word is there to keep us focused on the fact that we shall
              design and deliver flow meters for everything that flows.
            </p>
            <ul className="list-unstyled modern-bullets">
              <li>
                <i className="bi bi-check-circle-fill"></i> 10+ Global Partnerships
              </li>
             
              <li>
                <i className="bi bi-check-circle-fill"></i> 2-2 Lean Manufacturing
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> 125+ Awards Recieved
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> 98% customer satisfaction
              </li>
            </ul>
          </Col>

          {/* RIGHT STATS */}
          <Col lg={6}>
          <div className="stats-right">
              <div className="stat-card vertical-card">
                <h3>10+</h3>
                <p>Exports</p>
              </div>

              <div className="stat-card main-card">
                <h2>10K</h2>
                <p>Products Delivered</p>
              </div>

              <div className="stat-card vertical-card">
                <h3>10+</h3>
                <p>Global Partnerships</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ---------------- DIFFERENCE (OPTIONAL) ---------------- */
export function DifferenceBlock() {
  const bullets = [
    "10+ Global Partnerships",
    "125+ Awards Recieved",
    "2-2 Lean Manufacturing",
    "98% customer satisfaction",
  ];

  return (
    <section className="difference-block">
      <Container>
        <Row>
          <Col lg={8}>
            <h2 className="display-1 fw-bold mb-4">Difference!</h2>
            <p className="lead">
              Iota means minuscule or minute, which we take as inspiration to
              design and deliver flow meters that have an iota of an error.
              flow word is there to keep us focused on the fact that we shall
              design and deliver flow meters for everything that flows
            </p>

            <Row className="mt-5 g-4">
              {bullets.map((b) => (
                <Col md={6} key={b}>
                
                  <div className="bullet-line">
                    
                    <span className="bullet-icon">
                     
                      <i className="bi bi-chevron-right" />
                    </span>
                    <span className="bullet-text fw-bold">{b}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ---------------- OUR CLIENTS (SLIDER) ---------------- */
export function ClientsSection() {
  const logos = [
    adani,
    cairn,
    client2,
    client3,
    client4_1,
    client4_180,
    client5_180,
    client5,
    client6_180,
    client6,
    client7_180,
    client8_180,
    client8,
    client9_180,
    client10_180,
    client11_180,
    client12_180,
    drReddys,
    essarSteel,
    gaar,
    hindustan,
    itcHotels,
    jindal,
    ltLogo,
    mahindraRise,
    motherDairy,
    ntpc,
    ocmLuxury,
    oilLtd,
    roorkee,
    schneider,
    smec,
    sterlingWilson,
    taj,
    ultratech,
    voltas,
  ];

  return (
    <section className="clients-section">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> OUR CLIENTS
        </h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="client-logo-card">
                <img src={src} alt={`client-${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

/* ---------------- MORE ABOUT US (VIDEOS) ---------------- */
export function MoreAboutUs() {
  return (
    <section className="more-about-us">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> MORE ABOUT US
        </h3>

        <Row className="g-4">
          <Col md={6}>
            <div className="ratio ratio-16x9 video-frame">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="video 1"
                allowFullScreen
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="ratio ratio-16x9 video-frame">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="video 2"
                allowFullScreen
              />
            </div>
          </Col>
           <Col md={6}>
            <div className="ratio ratio-16x9 video-frame">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="video 2"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQSection() {
  const [activeKey, setActiveKey] = useState("-1");

  const faqs = [
    {
      q: "What types of flow meters does IOTA Flow manufacture in India?",
      a: "IOTA Flow is a trusted Indian manufacturer of flow meters, offering a wide range...",
    },
    {
      q: "Are IOTA Flow’s flow meters suitable for Indian industrial and municipal applications?",
      a: "Answer text...",
    },
    {
      q: "How accurate are IOTA Flow’s ultrasonic flow meters in Indian applications?",
      a: "Answer text...",
    },
    {
      q: "Does IOTA Flow offer flow meter installation and after-sales service across India?",
      a: "Answer text...",
    },
    {
      q: "Why is IOTA Flow considered one of the best flow meter manufacturers in India?",
      a: "Answer text...",
    },
  ];

  return (
    <section className="faq-section">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> FAQ’S
        </h3>

        <Accordion
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k ?? "")}
          className="faq-accordion"
        >
          {faqs.map((f, idx) => {
            const key = String(idx);
            const isOpen = activeKey === key;
            return (
              <Accordion.Item
                eventKey={key}
                key={f.q}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <Accordion.Header>
                  <span className="sign">{isOpen ? "–" : "+"}</span> {f.q}
                </Accordion.Header>
                <Accordion.Body>{f.a}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
}

/* ---------------- Scroll To Top (reusable) ---------------- */
export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="scroll-top global"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <i className="bi bi-chevron-up"></i>
    </button>
  );
}

/* ---------------- Export a single plug-and-play component ---------------- */
export default function HomeExtra() {
  return (
    <>
      {/* <HeroBanner /> */}
      <StatsModern />
      {/* <DifferenceBlock /> */}
      <ClientsSection />
      <MoreAboutUs />
      <FAQSection />
    </>
  );
}
