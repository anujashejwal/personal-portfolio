import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../Navbar/Navbar';
import { Typography, Button, TextField, InputProps } from '@mui/material';
import './Contact.css';
import { makeStyles } from '@mui/styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // You can submit this data to a server or perform other actions here
  };


  return (
    <div className="contactpage">
      {/* <Navbar /> */}
      
      <div className="contact-container">
        <Typography variant="h4" className="contact-head">
          Get in Touch
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* <TextField
            fullWidth
            variant="standard"
            className="textfield"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{className: 'textfield__label'}}
            style={{width:'70%'}}
          /> */}
          <div className='names-input'>
          <input
            type="text"
            className="form-input"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{width:'34%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px',marginRight:'30px'}}
            />
            <input
            type="text"
            className="form-input"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{width:'34%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px'}}
            />
        </div>
          <input
            type='text'
            className="form-input"
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{width:'70%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px',marginBottom:'30px'}}

          />
          <textarea 
            rows={4} 
            cols={50} 
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            name="message"
            className='textarea'
            style={{width:'70%',color:'#898787',border:'1px solid #282828',backgroundColor:'#282828',borderRadius:'5px',padding:'20px',fontSize:'20px',marginBottom:'30px'}}
            />
  
        </form>
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
      </div>
    </div>
  );
};

export default Contact;
