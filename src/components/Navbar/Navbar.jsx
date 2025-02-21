import React,{useState} from 'react'
import "./Navbar.css";

import menubar from "../../assets/menubar.png";
import closemenu from "../../assets/close menu.png";
import Home from '../Home/Home';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='navbar' className='navbar'>
    <h1 id='name'  data-aos="fade-right">Portfolio</h1>
     <img className='nav-open' src={menubar}
      onClick={toggleMenu} />  
    <ul data-aos="zoom-in-left" className='nav-menu' style={{ left: isMenuOpen ? '0' : '-350px' }}>
    <img className='nav-close' src={closemenu}  onClick={toggleMenu} />
    <li><AnchorLink className='anchorlink'  href='#home'>Home</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#about'>About Me</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#services'>Services</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#projects'>Projects</AnchorLink></li>
    <li><AnchorLink className='anchorlink' offset={50} href='#contact'>Contact</AnchorLink></li>
    </ul>
    <div  data-aos="fade-left" className='nav-connect'><AnchorLink className='anchorlink' offset={50} href='#contact'>connect with me</AnchorLink> </div>
    </div>
  )
}
