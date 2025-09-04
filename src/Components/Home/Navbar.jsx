import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./CustomNavbar.css";
import Logo from "../../images/Iotaf logo full.png";
import icon from "../../images/greater.png";
import GaugeIcon from "../../images/clockIconn.png"; // icon

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Ultrasonic Flow Meters");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ Product Data
  const productData = {
    "Ultrasonic Flow Meters": [
      { name: "Domestic Ultrasonic Water Meter", link: "/product" },
      { name: "Inline Ultrasonic Flow Meter", link: "/product-detail/detail2" },
      { name: "Intrusive Ultrasonic Flow Meter (1–4 Channels)", link: "/product-detail/detail3" },
      { name: "Clamp-On (Fixed) Ultrasonic Flow Meter ", link: "/product-detail/detail4" },
      { name: "Clamp-On (Portable) Ultrasonic Flow Meter", link: "/product-detail/detail5" },
      { name: "Ultrasonic BTU & Energy Meter", link: "/product-detail/detail17" },
      { name: "Area Velocity Doppler Flow Meter", link: "/product-detail/detail6" },
      { name: "Ultra-NXT Ultrasonic Gas Flow Meter", link: "/product-detail/detail20" },
      { name: "UF-Biosonic (Biogas Flow Meter)", link: "/product-detail/detail22" },
      { name: "TRX Ultrasonic Flow Meter (Air & Nitrogen)", link: "/product-detail/detail14" },


    ],
    "Electromagnetic Flow Meters": [
      { name: "MF-PRO", link: "/product-detail/detail7" },
      { name: "MF-TER (Ex-proof for Oil & Gas)", link: "/product-detail/detail7b" },
      { name: " Compact / Micro Electromagnetic Flow Meter", link: "/product-detail/detail8" },
    ],

    "Water Meters": [
      { name: "Smart Single-Jet Water Meter", link: "/product-detail/detail9" },
      { name: "Woltmann Turbine Water Meter ", link: "/product-detail/detail10" },
    ],
    "Positive Displacement Meters": [
      { name: "RPD (Ring Piston) Flow Meters", link: "/product-detail/detail11" },
      { name: "Oval Gear Flow Meters", link: "/product-detail/detail12" },
       { name: "Micro Stream Flow Sensor (OFZ Series)", link: "/product-detail/detail13" },
    ],
    "Rotameters (Variable Area Flow Meters)": [
      { name: "Metal tube Rotameters", link: "/product-detail/detail24" },
      { name: "Acrylic / Glass Tube Rotameters", link: "/product-detail/detail25" },
    ],
    "Special Application Flow Meters": [
      { name: "Conical Shape Flow Meter (Coke Oven Gas, High-Pressure/High-Temperature Gases, Wet Air, etc.)", link: "/product-detail/detail23" },
    ],
   "Thermal Mass Flow Meters": [
      { name: "Thermal Mass Flow Meter (Air & Gases: O₂, CO₂, Argon, Natural Gas, Biogas, etc.)", link: "/product-detail/detail15" },
    ],
    "Gas Flow Meters (Mechanical)": [
      { name: "EQZ/EQZK Turbine Gas Meters", link: "/product-detail/detail19" },
      { name: "GasPro RPD Gas Meter ", link: "/product-detail/detail21" },
    ],
    "Vortex Flow Meters": [
      { name: "VFM Vortex Flow Meters (Universal: Steam, Air, Gases, Liquids)", link: "/product-detail/detail16" },
      { name: "IVF Insertion Vortex Flow Meter", link: "/product-detail/detail18" },
    ],
  };

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

          {/* Hamburger */}
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

            {/* About Us dropdown */}
            <div className="nav-item dropdown">
              <NavLink to="/about-us" onClick={toggleMenu}>
                About Us
              </NavLink>
              <div className="dropdown-menu regular">
                <NavLink to="/about-us/certification" onClick={toggleMenu}>
                  Company
                </NavLink>
                <NavLink to="/about-us/result" onClick={toggleMenu}>
                  Certification
                </NavLink>
              </div>
            </div>

            {/* Products dropdown */}
            <div className="nav-item dropdown">
              <NavLink to="/product"  onClick={toggleMenu}>
                Product
              </NavLink>
              <div className="dropdown-menu">
                <div className="products-grid">
                  {/* Left Categories */}
                  <div className="product-categories">
                    <ul className="category-list">
                      {Object.keys(productData).map((category) => (
                        <li
                          key={category}
                          className={`category-item ${activeCategory === category ? "active" : ""}`}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Right Products */}
                  <div className="product-items">
                    {productData[activeCategory].map((product) => (
                      <Link
                        to={product.link}
                        key={product.name}
                        className="product-card"
                        onClick={toggleMenu}
                      >
                        <div className="product-icon">
                          <img src={GaugeIcon} alt="icon" />
                        </div>
                        <div className="product-info">
                          <h5 className="product-name">{product.name}</h5>
                        </div>
                      </Link>
                    ))}
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

            {/* Resources dropdown */}
            <div className="nav-item dropdown">
              <NavLink to="/resources"  onClick={toggleMenu}>
                Lean Resources
              </NavLink>
              <div className="dropdown-menu regular">
                <NavLink to="/about-us/certification" onClick={toggleMenu}>
                  Lean Journey
                </NavLink>
                <NavLink to="/about-us/result" onClick={toggleMenu}>
                  Case Studies
                </NavLink>
              </div>
            </div>
             <Link to="/contact">
            <button className="contact-btn mobile-contact" onClick={toggleMenu}>
              <span>Contact Us &gt;</span>
            </button>
             </Link>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div>
          <Link to="/contact">
            <button className="contact-btn desktop-contact">
              <span>
                Contact Us <img src={icon} alt="icon" className="icon-btn" />
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
