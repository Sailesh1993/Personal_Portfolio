import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

import Client1 from '../../assets/client1.webp'
import Client2 from '../../assets/client2.png'
import Client3 from '../../assets/client3.png'
import Client4 from '../../assets/client4.jpeg'
import Github from '../../assets/github.png'
import Linkidin from '../../assets/linkidin.png'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m5rwlyv', 'template_ckdvwj9', form.current, 'I-q1JutJdZG5-IUwe')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientsDesc'>
                I have had opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes.
            </p>
            <div className='clientImgs'>
                <a href='https://www.integrify.io/' target="_blank" rel="noopener noreferrer"><img src={Client1} alt='' className='clientImg'/></a>
                <a href='https://swappie.com/fi-en/?changeLang' target="_blank" rel="noopener noreferrer"><img src={Client2} alt='' className='clientImg'/></a>
                <a href='https://www.unilevernepal.com/' target="_blank" rel="noopener noreferrer"><img src={Client3} alt='' className='clientImg'/></a>
                <a href='https://prologicnepal.com/' target="_blank" rel="noopener noreferrer"><img src={Client4} alt='' className='clientImg'/></a>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                    <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                    <button type='submit' className='submitBtn' value='Send'>Submit</button>
                </form>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/sailesh-karki' target="_blank" rel="noopener noreferrer"><img src={Linkidin} alt='Linkidin' className='link'/></a>
                    <a href='https://github.com/Sailesh1993' target="_blank" rel="noopener noreferrer"><img src={Github} alt='Github' className='link'/></a>
                </div>
            </div>
        </div>
    </section>
  ) 
}

export default Contact