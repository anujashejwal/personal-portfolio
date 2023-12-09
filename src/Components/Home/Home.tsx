import React from 'react';
import { Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll'; 
import { Element } from 'react-scroll';  // Import Element from react-scroll
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import About from '../About/About';
import Contact from '../Contact/Contact';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Element name="home">
      <div className="home-container">
        <div className='home-sections'>
        <section className='home-left'>
          <div className='my-name'>
            <Typography variant='h5' className='name-head'>
            <span className='animated-text'>ANUJA SHEJWAL</span>
              </Typography>
              {/* <Typography variant='h5' className='name-head' style={{color:'#F06870'}}>
              SHEJWAL
            </Typography> */}
          </div>
          <Divider 
            style={{ 
              backgroundColor: 'rgba(128,128,128,0.5)', 
              height: '1px', 
              margin: '40px auto',
              width:'30%' 
            }} 
          />
          <Typography variant='h6' className='india-text'>
              INDIA
          </Typography>

        </section>
        <section className='home-right'>
          <Typography className='home-para'>
          I am a Software Engineer graduated in year 2023. I’m here to help you with your Web development projects , UI/UX designs and to talk about  travel, lifestyle, technology and many more things...
          </Typography>
        </section>
        </div>
      </div>
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}
