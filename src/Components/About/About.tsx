
import "./About.css";
import Work from "../Work/Work";

export default function About() {
  return (
    <div className="about-section">
    
      <div className="about-page">
      
        <div className="profiles">
        <h1>Profiles</h1>
         <div className="profiles-sections">
        <div className="profile-txt">
           
        
      <b>
        Hey All, To explore my UI/UX work, you can check out my profiles on <strong>Dribbble</strong> and <strong>Behance</strong>. Simply click the buttons below to view them!
      </b>
      <ul>
        <li>
          Dribbble: Known for creative portfolios, Dribbble is where I showcase my designs, interact with other designers, and get feedback from the design community.
        </li>
        <li>
          Behance: On Behance, I share complete case studies of my projects, including in-depth processes, wireframes, and final designs, giving you a detailed look into how I approach each project.
        </li>
      </ul>
            <div className="profile-buttons">     
            <a
              href="https://dribbble.com/anujashejwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Dribbble</button>

            </a>
            <a
              href="https://www.behance.net/anujashejwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Behance</button>
            
            </a>   
            </div> 
        </div>
        
        <img src='../images/frames.png' className="frames-img"/>
        </div>
    
        
        </div>
        <Work/>
        <section className="accounts">
        <h1>Accounts</h1>
        
          <div className="accounts-boxes">
          <div className="left-1">
            <a
              href="https://www.linkedin.com/in/anuja-shejwal-153b4419a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../images/linkedin-logo-3.png" className="logo-img" />

              <h3>Linked In</h3>
            </a>
          </div>

          <div className="left-2">
            <a
              href="https://www.instagram.com/anuja_shejwal/?hl=en"
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
          </div>
        </section>
      </div>
    </div>
  );
}
