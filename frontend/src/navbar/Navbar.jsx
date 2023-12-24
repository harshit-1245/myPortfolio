import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Slide from '../components/slide/Slide';
import profile from "../image/profile.png"

const Navbar = () => {
  const [animationStyle, setAnimationStyle] = useState({});
  const [open,setOpen]=useState(false)
  const navigate=useNavigate()

  const handleAnimation = (e) => {
    const offset = e.target.offsetLeft;
    setAnimationStyle({ width: `${e.target.offsetWidth}px`, left: `${offset}px` });
  };
 

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
                <NavLink
                  className="links"
                  to="/"
                  onClick={(e) => handleAnimation(e)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/about"
                  onClick={(e) => handleAnimation(e)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/skills"
                  onClick={(e) => handleAnimation(e)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/project"
                  onClick={(e) => handleAnimation(e)}
                >
                  project
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/contact"
                  onClick={(e) => handleAnimation(e)}
                >
                  Contact
                </NavLink>
                </li>
               <li> <NavLink className="links" to='/admin'
                onClick={(e)=>handleAnimation(e)}>
                  Admin
                </NavLink>
                </li>
              
            </ul>
            <div className="animation" style={animationStyle}></div>
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
