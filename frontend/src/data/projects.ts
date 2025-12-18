import type { Project } from '../models/portfolio';

export const projects: Project[] = [
  {
    id: 'visa-process-simulator',
    title: 'Immigration Visa Process Simulator',
    summary:
      'Discrete-Event Simulation system that models end-to-end immigration visa workflows with real-time metrics and database-backed results.',
    description:
      'Built in Java with JavaFX and JPA to simulate visa processing across multiple departments, track performance metrics like queue lengths and waiting times, and persist results to MariaDB. The system follows MVC architecture and supports configurable scenarios for analyzing bottlenecks and optimizing throughput.',
    techStack: ['java', 'javafx', 'other'],
    role: 'team',
    highlights: [
      'Implemented multi-department simulation (Application Entry, Document Verification, Biometrics, Decision, etc.) with independent queues and probabilistic routing.',
      'Designed ServicePoint logic to capture queue lengths, utilization, and processing times for each stage of the process.',
      'Integrated JPA ORM with MariaDB to store simulation runs, configurations, and performance metrics for later analysis.',
      'Collaborated in a 4-member agile team using GitHub feature branches, code reviews, and merge workflows.',
      'Created JavaFX visualizations for real-time monitoring of queues and identification of bottlenecks.',
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Sailesh1993/Project_visa_process_simulator',
      },
      {
        type: 'docs',
        url: 'https://github.com/Sailesh1993/Project_visa_process_simulator', // update if you have separate docs
      },
    ],
    startDate: '2025-09',
    endDate: '2025-10',
  },
  {
    id: 'vaccine-quest-game',
    title: 'Vaccine Quest Game App',
    summary:
      'Text-based web game that simulates a resource-management challenge where players must gather resources to formulate a life-saving vaccine.',
    description:
      'A Python-based adventure game exposing a REST API built with Flask and backed by a MySQL/MariaDB database. The frontend uses HTML, CSS, and JavaScript to consume the API and provide an interactive, narrative-driven experience. Developed as a 4-member course project with emphasis on OOP, clean API design, and team collaboration.',
    techStack: ['other'],
    role: 'team',
    highlights: [
      'Applied object-oriented design in Python to model game entities, resources, and game logic.',
      'Built REST API endpoints using Flask and integrated a relational database (MySQL/MariaDB) to persist game state and player progress.',
      'Developed a browser-based UI with HTML, CSS, and JavaScript that interacts with the backend API to present game choices and outcomes.',
      'Used GitHub for version control and Trello for task management in a 4-member team.',
      'Focused on input validation and logic-heavy gameplay to emphasize resource optimization and decision-making.',
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/SaileshK1103/Vaccine-Quest',
      },
    ],
    startDate: '2024-09',
    endDate: '2024-12',
  },
  {
    id: 'ecommerce-management-app',
    title: 'E-commerce Management Web App (G-Shop)',
    summary:
      'Full-stack e-commerce management platform with clean architecture, admin tools, and robust CRUD APIs for users, products, and orders.',
    description:
      'A comprehensive full-stack project using ASP.NET Core, Entity Framework Core, PostgreSQL, React, and TypeScript. The application provides both customer-facing e-commerce functionality and an admin management interface, following clean architecture principles and REST conventions.',
    techStack: ['react', 'typescript', 'other'],
    role: 'team',
    highlights: [
      'Implemented backend services with ASP.NET Core and Entity Framework Core, modeling users, products, carts, and orders in PostgreSQL.',
      'Designed RESTful APIs with proper routing, validation, and layered architecture following clean architecture patterns.',
      'Built a React + TypeScript frontend for browsing products, managing carts, and handling user flows.',
      'Implemented CRUD operations for user and admin functionalities, including product and user management.',
      'Practiced conventions, testing, and documentation to make the API and architecture maintainable.',
    ],
    links: [
      {
        type: 'github',
        url: 'https://saileshe-ecom-webshop.netlify.app/',
      },
    ],
    startDate: '2023-08',
    endDate: '2023-09',
  },
  {
    id: 'ecommerce-frontend-swagger',
    title: 'E-commerce Frontend & Swagger Web API',
    summary:
      'Frontend e-commerce app consuming a documented REST API, featuring authentication, product browsing, cart management, and testing.',
    description:
      'A React-based e-commerce frontend that fetches products from a REST API, supports login/registration, search, filtering, and cart operations. The project uses Redux for global state management, Material-UI for UI components, and Jest for unit testing, with the backend documented via Swagger UI.',
    techStack: ['react', 'typescript', 'other'],
    role: 'team',
    highlights: [
      'Consumed a Swagger-documented REST API to fetch and display product lists and single product details.',
      'Implemented login and registration flows, search, category filtering, and cart add/remove operations.',
      'Built a cart page that calculates totals and shows detailed shopping summaries.',
      'Used Redux to manage global state such as user auth and cart items.',
      'Wrote unit tests with Jest to validate critical components and logic.',
    ],
    links: [
      {
        type: 'github',
        url: 'https://saileshecom-app.azurewebsites.net/swagger/index.html', // replace with actual
      },
    ],
    startDate: '2023-05',
    endDate: '2023-05',
  },
  {
    id: 'hrv-challenger-iot',
    title: 'HRV Challenger – IoT Stress & Recovery Monitor',
    summary:
      'IoT device for real-time HRV and stress monitoring using Raspberry Pi Pico, PPG sensor, and cloud integration.',
    description:
      'Embedded/IoT project that measures heart-rate variability (HRV) and stress using a PPG sensor and Raspberry Pi Pico, with data sent via MQTT and visualized in the cloud. Features a rotary encoder-based UI and OLED display for on-device feedback.',
    techStack: ['other'],
    role: 'team',
    highlights: [
      'Implemented signal filtering and peak detection to derive HRV and stress metrics from raw PPG signals.',
      'Used MicroPython on Raspberry Pi Pico with MQTT to stream data to Kubios Cloud.',
      'Built an OLED-based user interface and rotary encoder menu system for user interaction.',
      'Focused on real-time processing, data reliability, and embedded resource constraints.',
    ],
    links: [
      {
        type: 'github',
        url: 'https://gitlab.metropolia.fi/challenger/hrv_challenger',
      },
    ],
    startDate: '2025-01',
    endDate: '2024-05',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    summary:
      'Modern, type-safe personal portfolio built with React and TypeScript to showcase projects, skills, and experience.',
    description:
      'Ongoing portfolio project focused on clean architecture, strong typing, and clear presentation of academic and professional work. Uses domain models for projects and skills and is integrated with Git and GitHub for CI-friendly workflows.',
    techStack: ['react', 'typescript', 'other'],
    role: 'solo',
    highlights: [
      'Modeled portfolio data (projects, skills, profile, social links) using TypeScript domain types for safer and more maintainable UI development.',
      'Structured the codebase into models, data, and feature-based components for clarity and scalability.',
      'Configured Git and GitHub workflows, with plans for deployment (e.g., GitHub Pages or other hosting).',
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Sailesh1993/Personal_Portfolio',
      },
    ],
    startDate: '2025-12',
    endDate: 'ongoing',
  },
];
