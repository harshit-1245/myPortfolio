import React, { useEffect, useState } from 'react'
import './Child.scss'
import {FaHtml5} from "react-icons/fa";


const Child = ({icon,skill,percentage}) => {
const [style,setStyle]=useState();

useEffect(()=>{
  setTimeout(()=>{
    const newStyle={
      opacity:1, //by default it set to the pixel,defined bydefault
      width:`${percentage}`,    
    }
    console.log(newStyle)
    setStyle(newStyle);
  },1000);
},[percentage])

  return (
    <div className='child'>
      <div className="content">
        <div className="skill-left">
          {icon}
        </div>
        <div className="skill-right">
          <h1>{skill}</h1>
          <div className="skill-bar">
            <div className="progress" style={style}>
              <span>{percentage}</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Child
