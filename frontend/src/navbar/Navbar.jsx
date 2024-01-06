import React, { useState } from 'react';
import {Link,useNavigate } from 'react-router-dom';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Slide from '../components/slide/Slide';
import profile from "../image/profile.png"

const Navbar = () => {
  const [animationStyle, setAnimationStyle] = useState({});
  const [open,setOpen]=useState(false)
  const navigate=useNavigate()


 

  return (
    <>
    <header className="header">
      <div className="header-content">
        <div className="left">
          <a href="#">Portfolio</a>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
               <Link to="/">
               Home
               </Link>
                </li>
                <li>
               <Link to="/about">
              About Me
               </Link>
                </li>
                <li>
               <Link to="/skills">
              Skill
               </Link>
                </li>
                <li>
               <Link to="/project">
              Project
               </Link>
                </li>
                <li>
               <Link to="/contact">
              Contact
               </Link>
                </li>
              
            </ul>
            
          </nav>
        </div>
        <div className="hamburger">
  
           
     
            <GiHamburgerMenu onClick={() => setOpen(true)} />
        
        </div>
        
      </div>
    </header>
   {open && <Slide setOpen={setOpen}/>}
   </>
  );
};

export default Navbar;
