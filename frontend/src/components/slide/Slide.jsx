import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';
import click  from "../../image/click.json"
import './Slide.scss'
import {AiOutlineClose} from 'react-icons/ai';

const Slide = ({setOpen}) => {
  return (
     <div className="all-links">
      <div className="opac-layer"></div>
        <div className="links-content">
         <div className="links-header">
            <span className="heading">Menu</span>
            <span className="close-btn"><AiOutlineClose onClick={()=>setOpen(false)}/>
               <span className='text' onClick={()=>setOpen(false)}>close</span>
            </span>
         </div>
         <div className="all-Navbar">
         <div className="player">
         <Player 
            autoplay
            speed={1}
            loop
            src={click}
            style={{ height: "150px", width: "200px" }}
          />
          </div>
            <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
            <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
            <Link to="/skills" onClick={()=>setOpen(false)}>Skill</Link>
            <Link to="/project" onClick={()=>setOpen(false)}>Project</Link>
            <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
         </div>
        </div>
      
     </div>
        
         
  )
}

export default Slide
