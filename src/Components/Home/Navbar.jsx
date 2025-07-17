import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-dark text-white py-1 px-3 d-flex justify-content-end align-items-center gap-3">
        <span>✉ contact@iotaflow.com</span>
        <span>📞 +91-9910693866</span>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            X &gt;&gt;&gt; SAMATEX
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto align-items-center gap-3">
              <Nav.Link as={Link} to="/" className="nav-item-custom active-nav">
                Home
                <div className="nav-underline"></div>
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item-custom">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-item-custom">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/application" className="nav-item-custom">
                Application
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-item-custom">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/tools" className="nav-item-custom">
                Tools
              </Nav.Link>
              <Nav.Link as={Link} to="/resources" className="nav-item-custom">
                Lean Resources
              </Nav.Link>
            </Nav>

            <Button className="btn-enquiry">
              <span>Contact Us &gt;</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <style >{`
 
  /* Enquiry Button Style */
.btn-enquiry {
  position: relative;
  overflow: hidden;
  background-color: #ffcc00;
  color: black;
  border: none;
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
}

.btn-enquiry::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  z-index: 1;
}

.btn-enquiry:hover::before {
  transform: translateX(0);
}

.btn-enquiry span {
  position: relative;
  z-index: 2;
  transition: color 0.4s ease;
}

.btn-enquiry:hover span {
  color: white;
}



`}</style>

    </>
  );
}

export default CustomNavbar;
