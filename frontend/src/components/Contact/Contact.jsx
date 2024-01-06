import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import './Contact.css';


const Contact = () => {
 
  const form=useRef();
  const [message,setMessage]=useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });

  

  const handleChange = (e) => {
    const {name,value}=e.target;
    setUser({
      ...user,
      [name]:value,
    })
  };
  const sendEmail = async () => {
    try {
      const response = await axios.post(`https://portfolio-backend2-zhzf.onrender.com/contact/sendEmail`, {
        name: user.name,
        email: user.email,
        message: user.message,
      });

      if (response.status === 200) {
        setMessage('Email sent successfully');
      }
    } catch (error) {
      setMessage('Failed to send email');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://portfolio-backend2-zhzf.onrender.com/contact/user`, {
        name: user.name,
        email: user.email,
        message: user.message,
      });

      if (response.data.message === 'User already exists') {
        setMessage('Email is already registered');
      } else if (response.data.message === 'User created') {
        setMessage('Thank You');
        
      }
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`);
      } else {
        setMessage('Network error occurred');
      }
    }
  };
 
  

 

  return (
    <div className="contact-container">
      <h1 className="contact">Contact Me</h1>
      <form ref={form} id="contact-form" onSubmit={handleSubmit} action=''>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={user.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <p className='message'>{message}</p>
        <button className=".button" type="submit" onClick={()=>sendEmail()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
