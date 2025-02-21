import React from 'react'
import "./Services.css"
import html from "../../assets/html-logo.png";

import css from "../../assets/css3-logo.png"

import javascript from "../../assets/javascript-logo.png"

import react from "../../assets/react-logo.png"

import bootstrap from "../../assets/bootstrap-logo.png"



import redux from "../../assets/redux-logo.png"

import tailwind from "../../assets/tailwind-logo.png"


export default function Services() {
  return (
    <div id='services' className='Services'>
    <div className=' Services-title '>
        <h1>My Services</h1>
    </div>
    <div  className='Services-description'>
    <div  data-aos="flip-left"  className='Services-container'>
    <h3>01</h3>
    <h2>HTML</h2>
      <img src={html} />
     
      <p>HTML is the most basic building block of the Web. It defines the meaning and structure of web content.</p>
    </div>
    <div  data-aos="flip-left"  className='Services-container'>
    <h3>02</h3>
    <h2>CSS</h2>
      <img src= {css}/>
      
      <p>Cascading Style Sheets is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents.</p>
    </div>
    <div  data-aos="flip-left"  className='Services-container'>
    <h3>03</h3>
    <h2>javascript</h2>
      <img src={javascript} />
      
      <p>JavaScript is a versatile and dynamic scripting language that powers interactive and responsive web applications.</p>
    </div>
    <div  data-aos="flip-left" className='Services-container'>
    <h3>04</h3>
    <h2>React</h2>
      <img src={react} />
     
      <p>A JavaScript library for building user interfaces.</p>
      </div>
      <div  data-aos="flip-left"  className='Services-container'>
      <h3>05</h3>
      <h2>Bootstrap</h2>
      <img src={bootstrap} />
     
      <p>Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.</p>
  </div>
      <div  data-aos="flip-left"  className='Services-container'>
      <h3>06</h3>
      <h2>REDUX</h2>
      <img src={redux} />
     
      <p>A JS library for predictable and maintainable global state management.</p>
      </div>
      <div  data-aos="flip-left" className='Services-container'>
      <h3>07</h3>
      <h2>Tailwind</h2>
      <img src={tailwind} />
     
      <p>Tailwind is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</p>
      </div>
  
    

    </div>
    </div>
  )
}
