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
            HOME
          </ScrollLink>
          
          <ScrollLink to="work" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'15px'}}>
            WORK
          </ScrollLink>

          <ScrollLink to="accounts" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'15px'}}>
            CONNECT
          </ScrollLink>

          <a
            href="../Anuja_Shejwal Resume.pdf"
            download="Anuja_Shejwal Resume.pdf"
            className="nav-link"
            style={{fontSize:'15px'}} 
          >
            RESUME
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
