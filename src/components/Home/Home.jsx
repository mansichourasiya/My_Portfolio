import React from 'react'
import "./Home.css"
import resume from '../../assets/mansi.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import download from '../../assets/download logo.png'
import image from '../../assets/main_img.jpeg'

export default function Home() {
  return (
    <div id='home' className='home'>
    <img  data-aos="zoom-in" src={image}/>
    <h1><div  data-aos="fade-right" id='name'>I'm Mansi Chourasiya,</div> frontend developer</h1>
    <p>Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software.</p>
    <p>I have a keen interest in user experience and design, and I am always seeking ways to improve and enhance my skills.</p>
   

    <div className="home-action">
    <div className='home-connect'><AnchorLink className='anchorlink' offset={50} href='#contact'>connect with me</AnchorLink></div>
   <a className='home-resume' href={resume} target='_blank'>My resume</a>
   
  
   

    </div>
    </div>
  )
}

