import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../images/Iotaf logo icon.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer text-light pt-5">
      {/* Wave Shape */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a1a1a"
            d="M0,64 C360,160 1080,0 1440,96 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <Container>
        <Row className="gy-5">
          {/* Logo + About */}
          <Col lg={4} md={12}>
            <div className="main-con mb-3">
              <div className="footer-logo me-3">
                <img src={Logo} alt="IOTAFlow Logo" />
              </div>
              <div>
                <h4 className="fw-bold mb-0">IOTAFLOW</h4>
                <small className="d-block fw-2"><span>SYSTEMS PVT. LTD</span></small>
              </div>
            </div>

            <p >
              At IOTAFLOW Systems, we embrace Lean <br /> principles to deliver
              flow measurement, <br />IOT automation, and calibration solutions <br />
              that drive energy efficiency across industrial utilities.
            </p>

            <div className="mt-3">
              <p className="mb-1">Follow us</p>
              <div className="social-icons">
                <i className="bi bi-youtube"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Col>

          {/* Company Links */}
          <Col lg={2} md={6}>
            <FooterCol
              title="Company"
              items={["About Us", "Applications", "Case Studies", "Lean Resources"]}
            />
          </Col>

          {/* Support Links */}
          <Col lg={2} md={6}>
            <FooterCol
              title="Support"
              items={["FAQs", "Lodge a Complaint", "Feedback", "Downloads"]}
            />
          </Col>

          {/* Careers */}
          <Col lg={2} md={6}>
            <FooterCol title="Careers" items={["Career Opportunities"]} />
          </Col>

          {/* Contact Us */}
          <Col lg={2} md={6}>
            <div className="footer-col">
              <h5 className="fw-bold mb-3 footer-col-title">
                Contact Us
                <span className="footer-col-underline" />
              </h5>
              <p className="mb-1">
                <i className="bi bi-telephone me-2"></i> +91-9910693866
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone me-2"></i> +91-9779085987
              </p>
              <p className="mb-1">
                <i className="bi bi-envelope me-2"></i> contact@iotaflow.com
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2"></i> Find Us
              </p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2619677918765!2d77.1224383!3d28.621909699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034d4c4c02d3%3A0x4b397a3052ad9053!2sIOTAFLOW%20Systems%20Pvt%20Ltd%20-%20Flow%20meter%20manufacturer%20%26%20exporter%20in%20india!5e0!3m2!1sen!2sin!4v1755784905876!5m2!1sen!2sin"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Yellow Divider */}
      <div className="footer-divider"></div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom py-3 text-center">
        <Container>
          <small>© {new Date().getFullYear()} IOTAFLOW Systems Pvt. Ltd</small>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="footer-col">
      <h5 className="fw-bold mb-3 footer-col-title">
        {title}
        <span className="footer-col-underline" />
      </h5>
      <ul className="list-unstyled d-grid gap-2 mb-0">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-decoration-none text-light-50">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
