import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./CustomNavbar.css";
import Logo from "../../images/Iotaf logo full.png";
import icon from "../../images/greater.png";
import GaugeIcon from "../../images/clockIconn.png"; // icon

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Ultrasonic Flow Meter");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ Product Data
  const productData = {
    "Ultrasonic Flow Meter": [
      { name: "Ultrimis™ Domestic Ultrasonic Water Meter", link: "/product" },
      { name: "INLINE ULTRASONIC ROBUST Series", link: "/product-detail/detail2" },
      { name: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)", link: "/product-detail/detail3" },
      { name: " Clamp-ON (Fixed) ULTRASONIC UF 1500 Series", link: "/product-detail/detail4" },
      { name: " Clamp-ON (Portable) ULTRASONIC PF 222/333", link: "/product-detail/detail5" },
      { name: "Ultrasonic BTU meter (Heat & Energy measurement)", link: "/product-detail/detail17" },
      { name: "Area Velocity (Doppler Effect) AV5500 Series *Ideal for Open Channels & Partially Filled Pipes", link: "/product-detail/detail6" },
    ],
    "Electromagnetic Flow Meter": [
      { name: "MF-PRO Electromagnetic Flow Meter", link: "/product-detail/detail7" },
      { name: "MF-TER Electromagnetic Flow Meter", link: "/product-detail/detail7b" },
      { name: " CX/VN/VNS Compact / Micro Sized Electromagnetic Flow Meters", link: "/product-detail/detail8" },
    ],
    "Water Meter": [
      { name: "Smart Single Jet Water Meters", link: "/product-detail/detail9" },
      { name: " Woltmann Water Meters, Turbine Type ", link: "/product-detail/detail10" },
    ],
    "Positive Displacement Meter": [
      { name: "Contoil / RPD Flow Meters", link: "/product-detail/detail11" },
      { name: "Oval Gear Flow Meters", link: "/product-detail/detail12" },
       { name: "Micro Stream Flow Sensor OFZ Series", link: "/product-detail/detail13" },
    ],
    "Variable Area Rotameter": [
      { name: "Metal tube Rotameters (Variable Area measurement)", link: "/product-detail/detail24" },
      { name: "Acrylic / Glass Tube Rotameters", link: "/product-detail/detail25" },
    ],
    "Differential Pressure Flow Meter": [
      { name: "Conical shaped Flow meter", link: "/product-detail/detail23" },
    ],
    "GAS Meter": [
      { name: "TRX Ultrasonic Air Flow Meter", link: "/product-detail/detail14" },
      { name: "EQZ/EQZK Radial Turbine Gas Meters", link: "/product-detail/detail19" },
      { name: "Ultra-NXT Ultrasonic Gas Flow Meter ", link: "/product-detail/detail20" },
      { name: "GasPro RPD Gas Meter ", link: "/product-detail/detail21" },
      { name: "UF-Biosonic (Ultrasonic Flow Measurement for Biogas)", link: "/product-detail/detail22" },
    ],
    "Vortex Flow Meter": [
      { name: "VFM Vortex Flow Meters", link: "/product-detail/detail16" },
      { name: "IVF Insertion Vortex flow meter", link: "/product-detail/detail18" },
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
