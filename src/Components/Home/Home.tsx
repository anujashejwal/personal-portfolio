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
import Work from '../Work/Work';
import Accounts from '../Accounts/Accounts';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="home">
      <div className="home-container">
        <div className='home-sections'>
        <section className='home-left'>
        <Typography variant='h5' className='hello-txt'> Hello, I'm</Typography>
          <div className='my-name'>
            <Typography variant='h4' className='name-head'>
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
              margin: '20px auto',
              width:'30%',
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
          As a Software Engineer, graduated in 2023. Currently I am working as a Software Engineer at Jio Platform Limited, Navi Mumbai. I’m here to elevate your web development projects and craft intuitive UI/UX designs. Beyond the code, I’m all about exploring the world, diving into tech trends, and chatting about lifestyle and more. 
          Let’s create something awesome together!
          </Typography>
          
        </section>
        </div>
      </div>
      </div>
      {/* <Element name="about">
        <About />
      </Element> */}
      <Element name="work">
      <Work/>
     <Accounts/>
      </Element>
      <Footer />
    </div>
  );
}
