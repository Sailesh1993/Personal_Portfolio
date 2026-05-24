// src/data/projects.ts
import { Project } from '../types';
import immigrationVisaThumb from '../assets/projects/immigration-visa-simulator.png';
import vaccineGame from '../assets/projects/vaccine-game.jpeg';
import ecomFullStack from '../assets/projects/ecom-full-stack-app.png';
import swaggerUI from '../assets/projects/swagger-ui-ap.png';

export const projectsData: Project[] = [
  {
    id: 'cems-enterprise',
    title: 'Campus Event Management System (CEMS)',
    summary: 'Multi-module enterprise backend system with stateless JWT authentication and containerized Jenkins deployment pipelines.',
    description: 'Architected a robust enterprise backend computing system leveraging Java Spring Boot for business logic and JavaFX for administration interfaces. Implemented secure stateless authentication using JSON Web Tokens (JWT) along with encrypted role-based access control filters. Managed automated containerization deployments using Docker and engineered local CI/CD pipelines via Jenkins.',
    technologies: ['Java', 'Spring Boot', 'JavaFX', 'JWT', 'Docker', 'Jenkins', 'CI/CD'],
    role: 'Backend Architect',
    projectType: 'Group Project',
    highlights: [
      'Architected a multi-module enterprise backend computing system leveraging Java Spring Boot and JavaFX.',
      'Implemented secure stateless authentication using JSON Web Tokens (JWT) and encrypted role-based access control filters.',
      'Managed automated containerization deployments using Docker and engineered local CI/CD pipelines via Jenkins.'
    ],
    links: [{ type: 'github', url: 'https://github.com/SaileshK1103/CEMS' }],
    startDate: '2026-01',
    endDate: '2026-05'
  },
  {
    id: 'urban-go',
    title: 'UrbanGo: Smart City Companion',
    summary: 'Full-stack smart transit web system featuring live HSL API integration and Gemini Large Language Model (LLM) route optimizations.',
    description: 'Coordinated sprint backlogs as Scrum Master to deploy a scalable full-stack web system integrating live HSL public transport APIs. Integrated the Gemini Large Language Model (LLM) into the application pipeline to calculate real-time, context-aware routing suggestions based on passenger conditions.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Gemini LLM', 'AI API', 'HSL Transit API', 'Agile/Scrum'],
    role: 'Scrum Master / Full-Stack Developer',
    projectType: 'Group Project',
    highlights: [
      'Coordinated sprint backlogs as Scrum Master to deploy a scalable full-stack web system integrating live HSL public transport APIs.',
      'Integrated the Gemini Large Language Model (LLM) to calculate real-time, context-aware routing suggestions.'
    ],
    links: [{ type: 'github', url: 'https://github.com/SaileshK1103/urban-go' }],
    startDate: '2025-10',
    endDate: '2025-12'
  },
  {
    id: 'visa-process-simulator',
    title: 'Immigration Visa Process Simulator',
    summary: 'Discrete-Event Simulation system that models end-to-end immigration workflows with real-time bottleneck analysis and metrics.',
    description: 'Designed and coded a high-fidelity Discrete-Event Simulation using strict Object-Oriented Programming (OOP) and Model-View-Controller (MVC) architectural design patterns. Modeled complex, non-linear multi-stage human workflows utilizing mathematical and statistical distributions to accurately calculate, expose, and eliminate systemic bottlenecks. Utilized JPA (Hibernate) for robust relational data persistence to MariaDB and achieved high test coverage by scripting comprehensive unit test suites via JUnit5.',
    technologies: ['Java', 'JavaFX', 'JPA', 'Hibernate', 'MariaDB', 'JUnit5', 'OOP/MVC'],
    role: 'Core Simulation Engineer',
    projectType: 'Group Project',
    highlights: [
      'Designed and coded a high-fidelity Discrete-Event Simulation using strict Object-Oriented Programming (OOP) and Model-View-Controller (MVC) architectural design patterns.',
      'Modeled complex, non-linear multi-stage human workflows utilizing mathematical and statistical distributions to accurately calculate, expose, and eliminate systemic bottlenecks.',
      'Utilized JPA (Hibernate) for robust relational data persistence and achieved high test coverage by scripting comprehensive unit test suites via JUnit5.'
    ],
    links: [{ type: 'github', url: 'https://github.com/SaileshK1103/Project_visa_process_simulator' }],
    startDate: '2025-08',
    endDate: '2025-10',
    thumbnail: immigrationVisaThumb
  },
  {
    id: 'vaccine-quest-game',
    title: 'Vaccine Quest Game App',
    summary: 'Interactive resource-management web application driven by a Python Flask REST API and modular state routing.',
    description: 'Metropolia UAS initial full-stack project, building an interactive web application built on Python, Flask, HTML5, CSS3, and JavaScript. Designed modular state routing algorithms and managed persistent application sessions safely. Followed object-oriented programming principles to structure database state flows in MySQL/MariaDB.',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'MariaDB'],
    role: 'Full-Stack Contributor',
    projectType: 'Group Project',
    highlights: [
      'Metropolia UAS initial full-stack project, building an interactive web application built on Python, Flask, HTML5, CSS3, and JavaScript.',
      'Designed modular state routing algorithms and managed persistent application sessions safely.'
    ],
    links: [{ type: 'github', url: 'https://github.com/SaileshK1103/Vaccine-Quest/tree/main' }],
    startDate: '2024-08',
    endDate: '2025-01',
    thumbnail: vaccineGame
  },
  {
    id: 'ecommerce-management-app',
    title: 'Enterprise E-Commerce Management System',
    summary: 'Full-stack platform built with clean architecture conventions, secure CRUD operations, and Azure CI/CD streams.',
    description: 'Engineered an enterprise-scale full-stack application leveraging C#, ASP.NET Core Web API, and PostgreSQL. Built dynamic, strongly-typed front-end modules with React, Redux, and TypeScript; set up robust Azure cloud CI/CD delivery pipelines.',
    technologies: ['React', 'TypeScript', 'Redux', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Azure CI/CD'],
    role: 'Full-Stack Architecture Intern',
    projectType: 'Solo Project',
    highlights: [
      'Engineered an enterprise-scale full-stack application leveraging C#, ASP.NET Core Web API, and PostgreSQL.',
      'Built dynamic, strongly-typed front-end modules with React, Redux, and TypeScript; set up robust Azure cloud CI/CD delivery pipelines.'
    ],
    links: [{ type: 'github', url: 'https://saileshe-ecom-webshop.netlify.app/' }],
    startDate: '2023-05',
    endDate: '2023-09',
    thumbnail: ecomFullStack
  },
  {
    id: 'ecommerce-swagger-ui-api',
    title: 'E-commerce Frontend & Swagger Web API',
    summary: 'React shopping UI fetching authenticated data streams via Redux global states from Swagger documented REST APIs.',
    description: 'A React-based e-commerce frontend that fetches products from a REST API, supports login/registration, search, filtering, and cart operations. The project uses Redux for global state management, Material-UI for UI components, and Jest for unit testing, with the backend documented via Swagger UI.',
    technologies: ['React', 'TypeScript', 'Redux', 'Material-UI', 'Jest', 'Swagger UI'],
    role: 'Frontend Engineer',
    projectType: 'Solo Project',
    highlights: [
      'Consumed a Swagger-documented REST API to fetch and display product lists and single product details.',
      'Used Redux to manage global state such as user auth and cart items.',
      'Wrote unit tests with Jest to validate critical components and logic.'
    ],
    links: [{ type: 'github', url: 'https://saileshecom-app.azurewebsites.net/swagger/index.html' }],
    startDate: '2023-05',
    endDate: '2023-05',
    thumbnail: swaggerUI
  }
];