import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./CustomNavbar.css";
import Logo from "../../images/logo1.png";
import icon from "../../images/greater.png";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Clock/Gauge icon component to match your image
  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <span>✉ contact@iotaflow.com</span>
        <span>📞 +91-9910693866</span>
      </div>

      {/* Navbar */}
      <nav className="custom-navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu Items */}
          <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" className="nav-item" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about-us" className="nav-item" onClick={toggleMenu}>
              About Us
            </NavLink>

            {/* Products dropdown with grid layout */}
            <div className="nav-item dropdown">
              <NavLink to="/products" className="nav-item" onClick={toggleMenu}>
                Product
              </NavLink>
              <div className="dropdown-menu">
                <div className="products-grid">
                  {/* Left Side - Categories */}
                  <div className="product-categories">
                    <h4>Flow Meter Categories</h4>
                    <ul className="category-list">
                      <li><Link to="/products/ultrasonic" onClick={toggleMenu}>Ultrasonic Flow Meter</Link></li>
                      <li><Link to="/products/electromagnetic" onClick={toggleMenu}>Electromagnetic Flow Meter</Link></li>
                      <li><Link to="/products/water" onClick={toggleMenu}>Water Meter</Link></li>
                      <li><Link to="/products/positive-displacement" onClick={toggleMenu}>Positive Displacement Meter</Link></li>
                      <li><Link to="/products/variable-area" onClick={toggleMenu}>Variable Area Rotameter</Link></li>
                      <li><Link to="/products/differential-pressure" onClick={toggleMenu}>Differential Pressure Flow Meter</Link></li>
                      <li><Link to="/products/gas" onClick={toggleMenu}>GAS Meter</Link></li>
                      <li><Link to="/products/thermal-mass" onClick={toggleMenu}>Thermal Mass Flow sensor</Link></li>
                    </ul>
                  </div>

                  {/* Right Side - Product Cards */}
                  <div className="product-items">
                    <Link to="/products/inline-ultrasonic" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Inline Ultrasonic</h5>
                      </div>
                    </Link>

                    <Link to="/products/ultrasonic-inserted" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Ultrasonic Inserted /Insertion Multipath</h5>
                      </div>
                    </Link>

                    <Link to="/products/ultrasonic-fixed-clamp" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Ultrasonic Fixed Clamp-On</h5>
                      </div>
                    </Link>

                    <Link to="/products/ultrasonic-portable-clamp" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Ultrasonic Portable Clamp-On</h5>
                      </div>
                    </Link>

                    <Link to="/products/ultrasonic-open-channel" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Ultrasonic Open Channel</h5>
                      </div>
                    </Link>

                    <Link to="/products/ultrasonic-biogas" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Ultrasonic Biogas Meter</h5>
                      </div>
                    </Link>

                    <Link to="/products/inline-ultrasonic-btu" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Inline Ultrasonic BTU Meter</h5>
                      </div>
                    </Link>

                    <Link to="/products/clamp-ultrasonic-btu" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Clamp-On Ultrasonic BTU Meter</h5>
                      </div>
                    </Link>

                    <Link to="/products/ultrasonic-air-meter" className="product-card" onClick={toggleMenu}>
                      <div className="product-icon">
                        <ClockIcon />
                      </div>
                      <div className="product-info">
                        <h5>Ultrasonic Air Meter</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/application" className="nav-item" onClick={toggleMenu}>
              Application
            </NavLink>
            <NavLink to="/services" className="nav-item" onClick={toggleMenu}>
              Services
            </NavLink>
            <NavLink to="/tools" className="nav-item" onClick={toggleMenu}>
              Tools
            </NavLink>
            <NavLink to="/resources" className="nav-item" onClick={toggleMenu}>
              Lean Resources
            </NavLink>

            {/* Contact Button in mobile menu */}
            <button className="contact-btn mobile-contact" onClick={toggleMenu}>
              <span>Contact Us &gt;</span>
            </button>
          </div>

          
          
        </div>
        <button className="contact-btn desktop-contact">
            <span>Contact Us<img src={icon} alt="icon" /></span>
          </button>
      </nav>
    </>
  );
}

export default CustomNavbar;