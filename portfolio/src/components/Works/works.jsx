import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.png'
import Portfolio4 from '../../assets/portfolio4.png'
import Portfolio5 from '../../assets/portfolio5.png'
import Portfolio6 from '../../assets/portfolio6.png'

const Works = () => {
  const projects = [
    {
      title: "Countries App",
      image: Portfolio1,
      description: "Countries App fetches countries from a REST API and displays them in a table.",
      link: "https://saileshcountryapp.netlify.app/"
    },
    {
      title: "Breweries App",
      image: Portfolio2,
      description: "The breweries app fetches a list of products from a REST API and displays them in a table.",
      link: "https://sailesh-product-list-app.netlify.app"
    },
    {
      title: "Ecommerce App",
      image: Portfolio3,
      description: "An E-commerce app that fetches the list of products from a REST API and displays them in a card.",
      link: "https://sailesh-ecommerce-project-integrify.netlify.app/"
    },
    {
      title: "Ecommerce-Web App Backend",
      image: Portfolio4,
      description: "An E-commerce management app is a comprehensive Fullstack project involving TypeScript,Asp.NetCore, Entity Framework Core and PostgreSQL on the backend.",
      link: "https://saileshecom-app.azurewebsites.net/swagger/index.html"
    },
    {
      title: "Ecommerce-Web App Frontend",
      image: Portfolio5,
      description: "This project features CRUD operation for User functionalities, Admin functionalities, Clean architecture, Rest API, conventions and testing.",
      link: "https://saileshe-ecom-webshop.netlify.app"
    },
    {
      title: "Todo-List App",
      image: Portfolio6,
      description: "create to-do list, save for reference, edit and delete feature.",
      link: "https://sailesh1993.github.io/fs15_3-todo-app/"
    },

  ]
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest
        details and making sure that my work is pixel perfect. I am excited to bring my skills
        and experience to help businesses achieve their goals and create a strong
        online presence.</span>
      <div className='worksImgs'>
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className='project'>
            <div>
              <img src={project.image} alt={project.title} className='worksImg' />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="centeredButtonContainer">
          <a href= "https://github.com/Sailesh1993" className="centeredButton">See More</a>
        </div>
    </section>
  )
}

export default Works