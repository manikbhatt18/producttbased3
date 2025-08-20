import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      
      <section className="contact-banner">
        <div className="overlay">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="location"
            className="location-icon"
          />
        </div>
      </section>

     
      <Container className="contact-form-section py-5">
        <Row>
          {/* Left Info Section */}
          <Col md={6} className="contact-info">
            <h2 className="mb-3">Get In Touch</h2>
            <p>Here’s how you can reach us,</p>

            <h5 className="mt-4">Talk to sales</h5>
            <p>
              📞 +91-9910693866 <br />
              ☎️ 011-46254603 <br />
              📧 contact@iotaflow.com
            </p>

            <h5 className="mt-4">Contact Service Support</h5>
            <p>
              📞 +91-9779085987 <br />
              📧 account@iotaflow.com
            </p>

            <div className="social-icons mt-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>

         
          <Col md={6}>
            <h2 className="mb-3">Drop in your details below</h2>
            <p>Let our experts take over from here!</p>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Company" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Button className="send-btn w-100" type="submit">
                SEND MESSAGE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      
      <section className="contact-location py-5">
        <Container>
          <Row>
            <Col md={4} className="text-center mb-3">
              <h6 className="text-uppercase">Our Location</h6>
              <p>A 2/13, Phase-II, Mayapuri Industrial Area, New Delhi – 110 064 India</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h6 className="text-uppercase">Mailing Address</h6>
              <p>contact@iotaflow.com</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h6 className="text-uppercase">Call Us Anytime</h6>
              <p>+91-9910693866 <br /> 011-46254603</p>
            </Col>
          </Row>
        </Container>

       
        <div className="map-container">
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d77.1209!3d28.6277"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
