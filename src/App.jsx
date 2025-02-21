import React,{useEffect} from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


import Aos from 'aos';
import "aos/dist/aos.css";
export default function App() {

  useEffect(()=>{
    Aos.init({ duration: 1000 });
    
  },[])


  return (

    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
      
    </div>
  )
}
