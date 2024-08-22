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
          <div className="location">
          <Typography variant='h6' className='india-text'>
              MUMBAI,
          </Typography>
          <Typography variant='h6' className='india-text'>
              INDIA
          </Typography>
          </div>
          

        </section>
        <section className='home-right'>
          <Typography className='home-para'>
          As a Software Engineer, freshly graduated in 2023, I’m here to elevate your web development projects and craft intuitive UI/UX designs. Beyond the code, I’m all about exploring the world, diving into tech trends, and chatting about lifestyle and more. Let’s create something awesome together!
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
