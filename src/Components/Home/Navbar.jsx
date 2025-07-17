import React from 'react';

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <span>✉ contact@iotaflow.com</span>
        <span>📞 +91-9910693866</span>
      </div>
      <nav className="nav-bar">
        <div className="logo">X <span>&gt;&gt;&gt;</span> SAMATEX</div>
        <ul>
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Application</li>
          <li>Services</li>
          <li>Tools</li>
          <li>Lean Resources</li>
        </ul>
        <button className="contact-btn">Contact Us &gt;</button>
      </nav>
    </>
  );
}

export default Navbar;