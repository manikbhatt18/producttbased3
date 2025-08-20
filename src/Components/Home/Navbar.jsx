import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./CustomNavbar.css";
import Logo from "../../images/logo1.png";
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
      { name: "Inline Ultrasonic", link: "/products/inline-ultrasonic" },
      { name: "Ultrasonic Inserted /Insertion Multipath", link: "/products/ultrasonic-inserted" },
      { name: "Ultrasonic Fixed Clamp-On", link: "/products/ultrasonic-fixed-clamp" },
      { name: "Ultrasonic Portable Clamp-On", link: "/products/ultrasonic-portable-clamp" },
      { name: "Ultrasonic Open Channel", link: "/products/ultrasonic-open-channel" },
      { name: "Ultrasonic Biogas Meter", link: "/products/ultrasonic-biogas" },
      { name: "Inline Ultrasonic BTU Meter", link: "/products/inline-ultrasonic-btu" },
      { name: "Clamp-On Ultrasonic BTU Meter", link: "/products/clamp-ultrasonic-btu" },
      { name: "Ultrasonic Air Meter", link: "/products/ultrasonic-air-meter" },
    ],
    "Electromagnetic Flow Meter": [
      { name: "Inline Electromagnetic", link: "/products/inline-electromagnetic" },
      { name: "Battery Powered Electromagnetic", link: "/products/battery-electromagnetic" },
      { name: "Electromagnetic Slurry Flow Meter", link: "/products/slurry-electromagnetic" },
    ],
    "Water Meter": [
      { name: "Domestic Water Meter", link: "/products/domestic-water" },
      { name: "Industrial Water Meter", link: "/products/industrial-water" },
      { name: "Smart AMR Water Meter", link: "/products/smart-water" },
    ],
    "Positive Displacement Meter": [
      { name: "Oval Gear Flow Meter", link: "/products/oval-gear" },
      { name: "Nutating Disc Meter", link: "/products/nutating-disc" },
    ],
    "Variable Area Rotameter": [
      { name: "Glass Tube Rotameter", link: "/products/glass-rotameter" },
      { name: "Metal Tube Rotameter", link: "/products/metal-rotameter" },
    ],
    "Differential Pressure Flow Meter": [
      { name: "Orifice Plate Meter", link: "/products/orifice" },
      { name: "Venturi Tube Meter", link: "/products/venturi" },
      { name: "Pitot Tube Meter", link: "/products/pitot" },
    ],
    "GAS Meter": [
      { name: "Diaphragm Gas Meter", link: "/products/diaphragm-gas" },
      { name: "Turbine Gas Meter", link: "/products/turbine-gas" },
    ],
    "Thermal Mass Flow sensor": [
      { name: "Inline Thermal Mass Meter", link: "/products/inline-thermal" },
      { name: "Insertion Thermal Mass Meter", link: "/products/insertion-thermal" },
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
            <div className="nav-item dropdown">
              <NavLink to="/about-us" className="nav-item" onClick={toggleMenu}>
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
              <NavLink to="/products" className="nav-item" onClick={toggleMenu}>
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
                          onClick={() => setActiveCategory(category)} // ✅ CLICK ONLY
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
             <div className="nav-item dropdown">
              <NavLink to="/resources" className="nav-item" onClick={toggleMenu}>
              Lean Resources
            </NavLink>
              <div className="dropdown-menu regular">
                <NavLink to="/lean/Lean Journey" onClick={toggleMenu}>
                 Lean Journey
                </NavLink>
                <NavLink to="/leans/ case study" onClick={toggleMenu}>
                 case study
                </NavLink>
              </div>
            </div>

            <button className="contact-btn mobile-contact" onClick={toggleMenu}>
              <span>Contact Us &gt;</span>
            </button>
          </div>
        </div>

        <button className="contact-btn desktop-contact">
          <span>
            Contact Us <img src={icon} alt="icon" className="icon-btn" />
          </span>
        </button>
      </nav>
    </>
  );
}

export default CustomNavbar;
