import React from 'react';
import './About.css';
import goku from '../../image/goku.png';
import { Link } from 'react-router-dom';
import cvFile from "../../image/resume.jpg"

const About = () => {

const handleDownload=()=>{
  window.open(cvFile);
}



  return (
    <div className="about-container">
      <div className="about-contents">
        <div className="image-section">
          <img src={goku} alt="Goku" className="profile-image" />
        </div>
        <div className="info-section">
          <h1>About Me</h1>
          <h2>Professional Web Developer</h2>
          <p>
          I hold a Bachelor's degree in Computer Science and am currently on an exciting journey, expanding my skills in full-stack development. My foundation in computer science includes proficiency in essential algorithms and data structures. While my focus is not on advanced data structures and algorithms, I possess a solid understanding of the basics.
          </p>

          <div className="personal-info">
            <div>
              <span>Name:</span>
              <span>Harshit Singh</span>
            </div>
            <div>
              <span>Age:</span>
              <span>20</span>
            </div>
            <div>
              <span>Email:</span>
              <span>harshitsingh50621@gmail.com</span>
            </div>
            <div>
              <span>Address:</span>
              <span><Link to="/contact">click here</Link></span>
            </div>
          </div>
          <div className="button">
            <button className="download-button" onClick={handleDownload}>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
