import React from "react";
import "./Accounts.css";

const Accounts = () => {

  return (
    <div className="AccountsPage">
      <section className="accounts">
        <h1>CONNECT US AT</h1>
        
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
          <h3>Or</h3>
          <h2><a href="mailto:anujashejwal55@gmail.com?subject=Hello&body=How%20are%20you?" style={{color:'#6b0209', textAlign:'center'}}>
          anujashejwal55@gmail.com
</a></h2>
        </section>
    </div>
  );
};

export default Accounts;
