# Personal Portfolio

A high-performance, responsive single-page web application designed to act as an interactive professional résumé and project showcase. The architecture leverages modern client-side technologies to deliver fast load times, explicit type safety, and fluid layout scaling across desktop and mobile viewports.

🚀 **Live Demo:** [https://Sailesh1993.github.io/Personal_Portfolio](https://Sailesh1993.github.io/Personal_Portfolio)

---

## 🏗️ Technical Architecture & Implementation

### 1. Core Framework & Tooling
* **React:** Utilizes a component-driven architecture to modularize UI elements (Navbar, Hero Section, Project Cards, Contact Form), ensuring highly reusable code and isolated state management.
* **TypeScript:** Implements total type safety across data fields, navigation markers, and layout components, significantly reducing runtime execution errors.
* **Vite:** Replaces traditional bundlers to provide instantaneous Hot Module Replacement (HMR) during local development and highly optimized asset chunking during production compilation.

### 2. Styling & Layout Mechanics
* **Tailwind CSS:** Employs utility-first classes to manage layout constraints, custom theme tokens, and clean transitions.
* **Flexbox & Grid Systems:** Explicitly constructed to handle fluid dynamic responsiveness, shifting from multiple columns on wide displays down to streamlined blocks on mobile viewports.

### 3. Third-Party API Integrations
* **EmailJS:** Integrated into the "Contact Me" module, enabling secure, client-side email transmission directly from form inputs without requiring a dedicated backend server infrastructure.
* **React Scroll:** Manages smooth scrolling viewport behaviors across single-page navigation link components, improving overall user interactivity.

---

## 🌟 Key Functional Features

* **Interactive Project Catalog:** Dynamically displays software engineering projects featuring asset links, source code paths, and specific tech badges.
* **Responsive Timeline:** Tracks employment and academic progression through an adaptive vertical layout.
* **Document Delivery:** Houses operational paths to asset documents (such as printable PDF résumés) utilizing stable relative paths within the built client bundles.
* **Automated CD Pipeline:** Features a continuous deployment workflow powered by `gh-pages`, compiling static code straight into independent distribution branches in seconds.

---

## 🛠️ Tech Stack Overview

* **Frontend:** React, TypeScript, Vite
* **Styling:** Tailwind CSS, PostCSS, Autoprefixer
* **Integrations:** EmailJS (Contact Form)
* **Deployment:** GitHub Pages

---

## 📦 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sailesh1993/Personal_Portfolio.git](https://github.com/Sailesh1993/Personal_Portfolio.git)