import React from 'react'
import './Projects.css'
import goku from "../../image/goku.png"
import {project} from "../Project/Projects/Project"

const Project = () => {
  return (
    <section id='projects'>
        {project.map((item,index)=>(
            <div className="projects-container" key={index}>
            <h2 className='section-heading'>Projects-{item.project}</h2>
            <div className="all-items">
              <div className="item">
                <div className="left">
                  <div className="img">
                    <img src={item.imageSrc} alt="" />
                  </div>
                </div>
                <div className="right">
                  <h2 className="project title">{item.title}</h2>
                  <h3 className='project-sub-title'>This is just for testing</h3>
                  <p className='project-desc'>{item.desc}</p>
                  <div className="buttons">
                    <a href="#" className='primary-btn'>Know more</a>
                    <a href="#" className='primary-btn outline'><span>Source code</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        

       
        </section>
  )
}

export default Project
