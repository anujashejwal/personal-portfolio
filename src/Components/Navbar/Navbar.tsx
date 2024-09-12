import { AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "./Navbar.css";

export default function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <div>
      <AppBar position="fixed" className='navbar'>
        <Toolbar>
          {/* Navigation links */}
          <ScrollLink to="home" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'15px'}}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'15px'}}>
            About
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'15px'}}>
            Contact
          </ScrollLink>
          <a
            href="../Anuja_Shejwal Resume.pdf"
            download="Anuja_Shejwal Resume.pdf"
            className="nav-link"
            style={{fontSize:'15px'}} 
          >
            Resume
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
