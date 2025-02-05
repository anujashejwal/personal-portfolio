
import "./About.css";

export default function About() {
  return (
    <div className="about-section">
    
      <div className="about-page">
     
        <div className="profiles">
        <h1>PROFILES</h1>
         <div className="profiles-sections">
        <div className="profile-txt">
           
        
      <b>
        Hey All, To explore my UI/UX work, you can check out my profiles on <strong>Dribbble</strong> and <strong>Behance</strong>. Simply click the buttons below to view them!
      </b>
      <ul>
        <li>
          Dribbble: Known for creative portfolios, Dribbble is where I showcase my designs, interact with other designers, and get feedback from the design community.
        </li>
        <br></br>
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
        
        {/* <img src='../images/frames.png' className="frames-img"/> */}
        </div>
    
        
        </div>
        
      
      </div>
    </div>
  );
}
