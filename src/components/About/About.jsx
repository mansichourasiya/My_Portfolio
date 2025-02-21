import React from 'react'
import "./About.css";
import profile from "../../assets/profile.jpg";


export default function About() {

  return (
    <div id='about' className='about'>
    <div className='about-title'>
        <h1>About Me</h1>
        <img src=""/>
    </div>
    <div className='about-section'>
        <div className='about-left'>
            <img  data-aos="fade-right" src={profile}/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
            <p>Hi there! I'm Mansi, an enthusiastic frontend developer with a flair for design and a passion for coding. As I embark on my journey in web development, I'm committed to creating stunning, user-friendly, and responsive websites. My goal is to blend creativity with technical skills to build digital experiences that are both visually appealing and highly functional. I'm excited to explore new challenges and continuously grow in this dynamic field.</p>
                <p>I am passionate about building user-friendly and intuitive web applications. My background in computer science and a strong foundation in HTML, CSS, and JavaScript have enabled me to develop proficient front-end skills.</p>
                <p>I completed my Graduation in Bachelor's of science with 56%.</p>
               
              
            </div>
           
           <div className="about-skills">
            <div className='about-skill'><p>HTML</p><hr style={{width:"80%"}}/></div>
            <div className='about-skill'><p>CSS</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>React js</p><hr style={{width:"60%"}}/></div>
            <div className='about-skill'><p>Javascript</p><hr style={{width:"70%"}}/></div>
          
           </div>
           </div>
            </div>
        
         </div>
  )
}