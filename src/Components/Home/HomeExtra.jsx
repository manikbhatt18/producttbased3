import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./home-extra.css";

/* ---------------- HERO ---------------- */
export function HeroBanner() {
  // Put bg1.jpg into /public/images/bg1.jpg (or import it)
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

/* ---------------- DIFFERENCE (kept in case you still want it separated) ---------------- */
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
    "/images/clients/adani.png",
    "/images/clients/cairn.png",
    "/images/clients/client2.jpg",
    "/images/clients/client3.png",
    "/images/clients/client4 (1).jpg",
    "/images/clients/client4-180x96.png",
    "/images/clients/client5-180x96.png",
    "/images/clients/client5.jpg",
    "/images/clients/client6-180x96.png",
    "/images/clients/client6.jpg",
    "/images/clients/client7-180x96.png",
    "/images/clients/client8-180x96.png",
    "/images/clients/client8.jpg",
    "/images/clients/client9-180x96.png",
    "/images/clients/client10-180x96.png",
    "/images/clients/client11-180x96.png",
    "/images/clients/client12-180x96.png",
    "/images/clients/Dr.-Reddys.png",
    "/images/clients/essar-steel.png",
    "/images/clients/Gaar.png",
    "/images/clients/hindustan.png",
    "/images/clients/itc-hotels.png",
    "/images/clients/jindal.png",
    "/images/clients/lt_logo.png",
    "/images/clients/Mahindra-rise.png",
    "/images/clients/mother-dairy.png",
    "/images/clients/NTPC.png",
    "/images/clients/ocm-lxury.png",
    "/images/clients/oilltd.png",
    "/images/clients/roorkee.png",
    "/images/clients/jindal.png",
    "/images/clients/Schneider.png",
    "/images/clients/smec.png",
    "/images/clients/sterling-wilson.png",
    "/images/clients/Taj.png",
    "/images/clients/ultratech-cement.png",
    "/images/clients/voltas.png",
   
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
        </Row>
      </Container>
    </section>
  );
}

/* ---------------- FAQ (black bg when open) ---------------- */
export function FAQSection() {
  const [activeKey, setActiveKey] = useState("0");

  const faqs = [
    {
      q: "What types of flow meters does IOTA Flow manufacture in India?",
      a: "IOTA Flow is a trusted Indian manufacturer of flow meters, offering a wide range of products such as ultrasonic flow meters, electromagnetic flow meters, and mechanical water meters. Our flow meters are made in India and designed to meet the needs of various industries, including water management, chemical processing, and oil & gas.",
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
      {/* keep or remove DifferenceBlock if you don't need it separately anymore */}
      {/* <DifferenceBlock /> */}
      <ClientsSection />
      <MoreAboutUs />
      <FAQSection />
    </>
  );
}
