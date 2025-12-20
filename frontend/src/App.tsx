import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/layout/Navbar';
import ProjectList from './components/projects/ProjectList';


const App: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 bg-slate-950 min-h-screen">
      <Hero />
      <ProjectList />
    </main>
  </>
);

export default App;
