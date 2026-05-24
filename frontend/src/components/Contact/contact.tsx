// src/components/Contact/contact.tsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

import Client1 from '../../assets/client1.webp';
import Client2 from '../../assets/client2.png';
import Client3 from '../../assets/client3.png';
import Client4 from '../../assets/client4.jpeg';
import Github from '../../assets/github.png';
import Linkidin from '../../assets/linkidin.png';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    emailjs.sendForm('service_m5rwlyv', 'template_ckdvwj9', form.current, 'SECRETKEY')
      .then((result) => {
        console.log(result.text);
        (e.target as HTMLFormElement).reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contactPage' className="bg-slate-950 py-20 border-t border-slate-900">
      <div id='clients' className="mx-auto max-w-4xl px-4 text-center">
        <h1 className='contactPageTitle text-3xl font-bold text-slate-50 tracking-tight mb-2'>
          My Clients
        </h1>
        <p className='clientsDesc text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed'>
          I have had the opportunity to work with a diverse group of companies. 
          Some of the notable companies I have worked with include:
        </p>
        
        <div className='clientImgs flex flex-wrap items-center justify-center gap-8 mb-16'>
          <a href='https://www.integrify.io/' target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition"><img src={Client1} alt='Integrify' className='clientImg h-12 object-contain filter brightness-110'/></a>
          <a href='https://swappie.com/fi-en/?changeLang' target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition"><img src={Client2} alt='Swappie' className='clientImg h-12 object-contain filter brightness-110'/></a>
          <a href='https://www.unilevernepal.com/' target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition"><img src={Client3} alt='Unilever Nepal' className='clientImg h-12 object-contain filter brightness-110'/></a>
          <a href='https://prologicnepal.com/' target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition"><img src={Client4} alt='Prologic solutions' className='clientImg h-12 object-contain filter rounded-full w-12 h-12'/></a>
        </div>

        <div id='contact' className="max-w-xl mx-auto border border-slate-800 bg-slate-900/40 p-8 rounded-2xl shadow-xl">
          <h1 className='contactPageTitle text-2xl font-bold text-slate-50 mb-1'>Contact Me</h1>
          <span className='contactDesc text-sm text-slate-400 block mb-6'>Please fill out the form below to discuss any work opportunities.</span>
          
          <form className='contactForm flex flex-col gap-4 text-left' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition' placeholder='Your Name' name='your_name' required/>
            <input type='email' className='email w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition' placeholder='Your Email' name='your_email' required/>
            <textarea name='message' rows={5} placeholder='Your Message' className='msg w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition resize-none' required></textarea>
            
            {/* Bug Fix: Bright sky-500 background with bold dark slate text ensures it can't render blank/white */}
            <button type='submit' className='submitBtn mt-2 w-full bg-sky-500 text-slate-950 font-bold text-sm py-3 rounded-lg hover:bg-sky-400 active:scale-[0.98] transition-all shadow-md shadow-sky-500/10'>
              Submit Message
            </button>
          </form>

          <div className='links flex items-center justify-center gap-6 mt-8 pt-6 border-t border-slate-800/60'>
            <a href='https://www.linkedin.com/in/sailesh-karki' target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition"><img src={Linkidin} alt='LinkedIn' className='w-6 h-6 object-contain'/></a>
            <a href='https://github.com/Sailesh1993' target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition"><img src={Github} alt='GitHub' className='w-6 h-6 object-contain filter invert'/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;