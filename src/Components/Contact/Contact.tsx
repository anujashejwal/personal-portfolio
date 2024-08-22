'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../Navbar/Navbar';
import { Typography, Button, TextField, InputProps } from '@mui/material';
import './Contact.css';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { log } from 'console';

const Contact: React.FC = () => {
  const [firstname, setfirstname] = useState()
  const [lastname, setlastname] = useState()
  const [email, setemail] = useState()
  const [message, setmessage] = useState()
  const backendURL = process.env.REACT_APP_API;
  const formdata={
    firstname :firstname,
    lastname:lastname,
    email:email,
    message : message
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendURL}/api/messages/create`, formdata);
      console.log(response.data);
    } catch (error) {
      console.error('Error occurred during the API call:', error);
      alert('Failed to submit the form. Please try again later.');
    }
  };
  
  

  return (
    <div className="contactpage">
      {/* <Navbar /> */}
      
      <div className="contact-container">
        <Typography variant="h4" className="contact-head">
          Get in Touch
        </Typography>

        <form
          onSubmit={handleSubmit}>

          <div className='names-input'>
          <input
            type="text"
            className="form-input"
            placeholder="First Name"
            name="firstName"
            value={firstname}
            onChange={(e:any) => setfirstname(e.target.value)}
            style={{width:'31%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px',marginRight:'30px'}}
            />
            <input
            type="text"
            className="form-input"
            placeholder="Last Name"
            name="lastName"
            value={lastname}
            onChange={(e:any) => setlastname(e.target.value)}
            style={{width:'31%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px'}}
            />
        </div>
          <input
            type='text'
            className="form-input"
            placeholder='Email'
            name="email"
            value={email}
            onChange={(e:any) => setemail(e.target.value)}
            style={{width:'70%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px',marginBottom:'30px'}}

          />
          <textarea 
            rows={4} 
            cols={50} 
            value={message}
            onChange={(e:any) => setmessage(e.target.value)}
            placeholder="Message"
          
            name="message"
            className='textarea'
            style={{width:'70%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px',marginBottom:'30px'}}
            />
  
        <div data-netlify-recaptcha="true"></div>
        <Button
            className="button"
            type="submit"
            variant="contained"
            style={{
              fontSize:'20px',
              padding: '15px 60px',
              border: '2px solid white',
              color: 'white',
              borderRadius: '15px',
              backgroundColor: 'transparent',
            }}
            >
            Submit
          </Button>
            </form>
      </div>
    </div>
  );
};

export default Contact;
