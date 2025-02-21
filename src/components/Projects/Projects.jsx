import React, { useState } from 'react'
import "./Projects.css";
// import portfolio_img from "../../assets/portfolio img.jpeg";
import edusity_pic from "../../assets/edusity_pic.png"
import technogiq_img from "../../assets/technogiq img.png";

export default function Projects() {
  
  let [project,setproject] = useState([
    {
      "project_img": edusity_pic,
      "project_title":"Edusity(Education website)",
      "project_description":"Edusity is an online learning platform where students can learn from the best teachers and can get the best education. It is a platform where students can learn from the best teachers and can get the best education. It is a platform where students can learn from the best teachers and can get the best education.",
      "project_link":"https://edusity-opal-pi.vercel.app/",
      "project_github":"https://github.com/mansichourasiya/Edusity",

    },
    {
      "project_img":technogiq_img,
      "project_title":"Technogiq IT Solutions",
      "project_description":"Technogiq IT Solutions is a leading IT company in Surat, Gujarat, India. It is a platform where students can learn from the best teachers and can get the best education. It is a platform where students can learn from the best teachers and can get the best education. It is a platform where students can learn from the best teachers and can get the best education.",
      "project_link":"https://techweb-red.vercel.app/",
      "project_github":"https://github.com/mansichourasiya/techweb"

    } 
  ])
  return (
    <div id='projects' className='myprojects'>
    <div className='myprojects-title'>
    <h1>My Latest Projects</h1>
    
    </div> 
    <div className='myprojects-container'>
    {project.map((e)=>{
      return (
        <div className='project-container'>
        <img src={e.project_img} alt={project.project_title}/>
        <h3>{e.project_title}</h3>
        <p>{e.project_description}</p>
     
        <a href={e.project_link} target="_blank" >Visit Site</a>

        <a href={e.project_github}>View Github</a>
        </div>
      )
    })}

    </div>
    </div>
  )
}
