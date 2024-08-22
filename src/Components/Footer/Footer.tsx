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
      <div className="follow">
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-github"></a>
     </div>
      
    </div>
  );
};

export default Footer;
