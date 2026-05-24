// src/data/config.ts
import { NavSection, Profile } from '../types';

export const navItems: NavSection[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

export const profileData: Profile = {
  name: 'Sailesh Karki',
  title: 'Systems & Full Stack Software Engineer',
  location: 'Helsinki, Finland',
  summary: 'Multi-disciplinary and research-driven systems engineer with over 4 years of technical and academic development experience spanning ICT, electronics, and simulation modeling. Highly adept at evaluating complex workflows, identifying systemic bottlenecks, and engineering clean, scalable distributed software architectures.',
  contact: {
    github: 'https://github.com/Sailesh1993',
    linkedin: 'https://linkedin.com/in/sailesh-karki',
    email: 'karki.saileshnep@gmail.com',
    phone: '+358 402518836'
  }
};