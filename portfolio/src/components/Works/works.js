import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.png'
import Portfolio4 from '../../assets/portfolio4.png'
import Portfolio5 from '../../assets/portfolio5.png'

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest 
        details and making sure that my work is pixel perfect. I am excited to bring my skills 
            and experience to help businesses achieve their goals and create a strong 
            online presence.</span>
        <div className='worksImgs'>
            <a href='https://saileshcountryapp.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={Portfolio1} alt="" className='worksImg' /></a>
            <a href='https://sailesh-product-list-app.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={Portfolio2} alt="" className='worksImg' /></a>
            <a href='https://sailesh-ecommerce-project-integrify.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={Portfolio3} alt="" className='worksImg' /></a>
            <a href='https://saileshecom-app.azurewebsites.net/swagger/index.html' target="_blank" rel="noopener noreferrer"><img src={Portfolio4} alt="" className='worksImg' /></a>
            <a href='https://saileshe-ecom-webshop.netlify.app' target="_blank" rel="noopener noreferrer"><img src={Portfolio5} alt="" className='worksImg' /></a>
        </div>
    </section>
  )
}

export default works