import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-box">
      <h3 className="footer-1">Location</h3>
      <p>Mumbai</p>
      <p>Maharashtra, India</p>
      <p>&copy; {currentYear} Anuja Shejwal. All rights reserved.</p>
      
    </div>
  );
};

export default Footer;
