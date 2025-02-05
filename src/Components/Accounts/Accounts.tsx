import React from "react";
import "./Accounts.css";

const Accounts = () => {

  return (
    <div className="AccountsPage">
      <section className="accounts">
        <h1>CONNECT US ON</h1>
        
          <div className="accounts-boxes">
          <div className="left-1">
            <a
              href="https://www.linkedin.com/in/anuja-shejwal-153b4419a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../images/linkedin-logo-3.png" className="logo-img" />

              {/* <h3>Linked In</h3> */}
            </a>
          </div>

          <div className="left-2">
            <a
              href="https://www.instagram.com/anuja_shejwal/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src="../images/insta-logo-3.png" className="logo-img" />
            {/* <h3>Instagram</h3> */}
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

              {/* <h3>Twitter</h3> */}
            </a>
          </div>
          </div>
          <h3 className="accountstext">Or mail us at </h3>
          <h3 className="accountstext" style={{textDecoration: "underline"}}>anujashejwal55@gmail.com</h3>
        </section>
    </div>
  );
};

export default Accounts;
