import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "./Navbar.css";

export default function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <div>
      <AppBar position="fixed" className='navbar'>
        <Toolbar>
          <ScrollLink to="home" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'20px'}} >
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'20px'}}>
            About
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="nav-link" style={{fontSize:'20px'}}>
            Contact
          </ScrollLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
