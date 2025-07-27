import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./CustomNavbar.css";
import Logo from "../../images/logo1.png";

function CustomNavbar() {
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

          {/* Menu Items */}
          <div className="nav-menu">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/about-us" className="nav-item">
              About Us
            </NavLink>

            {/* Products dropdown */}
            <div className="nav-item dropdown">
              <span>Products</span>
              <div className="dropdown-menu">
                <Link to="/products/ultrasonic">Ultrasonic Flow Meter</Link>
                <Link to="/products/electromagnetic">Electromagnetic Flow Meter</Link>
                <Link to="/products/water">Water Meter</Link>
                <Link to="/products/positive-displacement">Positive Displacement Meter</Link>
                <Link to="/products/variable-area">Variable Area Rotameter</Link>
                <Link to="/products/differential-pressure">Differential Pressure Flow</Link>
                <Link to="/products/gas">Gas Meter</Link>
                <Link to="/products/thermal-mass">Thermal Mass Flow Sensor</Link>
              </div>
            </div>

            <NavLink to="/application" className="nav-item">
              Application
            </NavLink>
            <NavLink to="/services" className="nav-item">
              Services
            </NavLink>
            <NavLink to="/tools" className="nav-item">
              Tools
            </NavLink>
            <NavLink to="/resources" className="nav-item">
              Lean Resources
            </NavLink>
          </div>

          {/* Contact Button */}
          
        </div>
         <button className="contact-btn">
            <span>Contact Us &gt;</span>
          </button>
      </nav>
    </>
  );
}

export default CustomNavbar;
