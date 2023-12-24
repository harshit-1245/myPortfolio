import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './Home.css';
import dog from '../../image/dog.json';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import cvFile from "../../image/resume.jpg"

const Home = () => {
  const [isCoder, setIsCoder] = useState(true);
  const navigate=useNavigate()

  const toggleCoder = () => {
    setIsCoder(!isCoder);
  };

  const handleDownload=()=>{
    window.open(cvFile)
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="left-column">
          <h1 className="main-heading">
            Welcome to My Portfolio
            {' '}
            <span className='typewriter'>
              <Typewriter
                words={['Coder', 'Developer']}
                loop={true}
                cursor={true}
                cursorStyle={'_'}
               
                typeSpeed={70}
                deleteSpeed={50}
                onLoopDone={() => toggleCoder()}
              />
            </span>
          </h1>
          <p className="subtext">
            Discover my projects and skills. Let's create something amazing together!
          </p>
          <div className="button-container">
            <button className="primary-button" onClick={handleDownload}>Download CV</button>
            <button className="secondary-button" onClick={()=>navigate('/contact')}>Hire me</button>
          </div>
        </div>
        <div className="right-column">
          <Player
            autoplay
            speed={1}
            loop
            src={dog}
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
