import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";

export default function About() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="about-page">
        <section className="section-left">
          <div className="left-1">
            <a
              href="https://www.linkedin.com/in/anuja-shejwal-153b4419a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="../images/linkedin-logo.jpg" className="logo-img" /> */}
              <img src="../images/linkedin-logo-3.png" className="logo-img" />

              <h3>Linked In</h3>
            </a>
          </div>

          <div className="left-2">
            <a
              href="https://www.instagram.com/framesnpixel/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src="../images/insta-logo-3.png" className="logo-img" />
            <h3>Instagram</h3>
            </a>
          </div>
          <div className="left-3">
            <a
              href="https://twitter.com/AnujaShejwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="../images/twitter-logo.jpg" className="logo-img" /> */}
              <img src="../images/twitter-logo-3.png" className="logo-img" />

              <h3>Twitter</h3>
            </a>
          </div>
        </section>

        <section className="section-middle">
          <div className="dribbble-link">
            <h2 data-text="HEYYAAA!!">HEYYAAA!!</h2>
            <p>I hope you're all doin good. To check out my UI/UX and Figma Designs/Animation here is my dribble account link. Go check out it might help you to get some ideas. Please click on the logo.
            </p>
            <a
              href="https://dribbble.com/anujashejwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="../images/twitter-logo.jpg" className="logo-img" /> */}
              <img src="../images/dribbble-logo.png" className="dribbble-logo-img" />

            </a>
          </div>
          <div className="certificates">
          <h1 className='certf-head animated'>Certificates</h1>
            <div className="certificate-links">
            <a
              href="../Foundation of UX Design.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // to open link in another tab
            >Foundation of UX Design</a>
          
             <a
              href="../High-Fidelity designs and prototypes in figma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // to open link in another tab
            >High-Fidelity designs and prototypes in figma</a>
             </div>
          </div>
        </section>
{/* High-Fidelity designs and prototypes in figma.pdf */}
        <section className="section-right">
          <div className="ps-section">
            <h3>PS.</h3>{" "}
            <p>
              I am really interested in discussing movies, travel, cooking and
              pets so if you like any one of those, we'll be good to go :)
            </p>
          </div>
          <div className="resume-dload">
          <a
              href="../Anuja_Shejwal Resume.pdf"
              download="Anuja_Shejwal Resume.pdf"
            >
            <img src="../images/download-logo-2.png" className="dload-logo" />
            
              <p>Download my resume here</p>
              </a>
          </div>
        </section>
      </div>
    </div>
  );
}
