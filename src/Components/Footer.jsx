import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Services.css"; // Move footer-specific CSS here if needed

function Footer() {
  return (
    <footer className="footer-mega text-light pt-5 mt-10">
      <Container className="pb-5">
        <Row className="gy-5">
          <Col lg={4}>
            <div className="logo mb-4">
              <span className="logo-x">XX</span>
              <span className="logo-chevrons">›››</span>
            </div>
            <p className="mb-4">
              Samatex - is the leading company with the known name and rich
              history in a wide range of industries. We have presence on 5
              continents in 207 countries worldwide
            </p>
           {/* <button className="my-2 btn-enquiry">
              <span>Enquiry Now</span>
            </button> */}
          </Col>

          <Col lg={2} md={6}>
            <FooterCol
              title="Company"
              items={[
                "Overview",
                "History",
                "Vision",
                "Core values",
                "Leadership",
                "Strategy",
              ]}
            />
          </Col>
          <Col lg={2} md={6}>
            <FooterCol
              title="Investors"
              items={[
                "Overview",
                "Earnings Releases",
                "Presentations",
                "Governance",
                "Financial Info",
                "Stock Information",
              ]}
            />
          </Col>
          <Col lg={2} md={6}>
            <FooterCol
              title="Community"
              items={[
                "Overview",
                "Community Stories",
                "Health & Wellness",
                "Arts & Culture",
                "Education",
                "Parks & Recreation",
              ]}
            />
          </Col>
          <Col lg={2} md={6}>
            <FooterCol
              title="Careers"
              items={[
                "Overview",
                "Job Openings",
                "Our Culture",
                "Workforce Diversity",
                "Supply Chain",
                "Spotlights",
              ]}
            />
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="small text-muted">
            Copyright © Samatex Ind. 2019
          </div>
          <div className="d-flex gap-3 fs-5">
            <i className="bi bi-youtube" />
            <i className="bi bi-google" />
            <i className="bi bi-facebook" />
            <i className="bi bi-twitter" />
            <i className="bi bi-skype" />
            <i className="bi bi-envelope" />
          </div>
        </Container>
      </div>

      {/* Scroll to top button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <i className="bi bi-chevron-up"></i>
      </button>
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
