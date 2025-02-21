import React from 'react'
import "./Contact.css"
import gmailLogo from "../../assets/gmail logo.png";
import callLogo from "../../assets/call logo.png";
import location from "../../assets/location logo.png";

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5aa94339-23d5-4d81-863a-0947ce2935de");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message);
        }
      };
    
  return (
    <div id='contact' className='contact'>
    <div className='contact-title'>
        <h1>Get in touch</h1>
    </div>
    <div className=' contact-section'>
        <div className='contact-left'>
            <h1>Let's Talk</h1>
            <p>I'm currently available to work as intern and willing to learn new technology. I will be an asset  to your organization.</p>
        
        <div className='contact-details'>
            <div className='contact-detail'>
                <img  src={gmailLogo}/><p>mansichourasia098@gmail.com</p>
            </div>
            <div className='contact-detail'>
                <img src={callLogo}/><p>7999233123</p>
            </div>
            <div className='contact-detail'>
                <img src={location}/><p>Indore</p>
            </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter your Name'/>
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter your Email'/>
            <label htmlFor=''>Write your messages here</label>
            <textarea name='message' rows="8" placeholder='Enter yourmessage here...'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
    </div>

    </div>
  )
}
