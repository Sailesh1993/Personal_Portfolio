// src/data/education.ts
import { Education } from '../types';

export const educationData: Education[] = [
  {
    id: 'metropolia-ict',
    degree: 'Bachelor of Engineering in Information and Communication Technology (ICT)',
    school: 'Metropolia University of Applied Sciences',
    location: 'Helsinki, Finland',
    startDate: '2024-08',
    endDate: 'Present',
    period: 'Aug 2024 - Present',
    isCurrent: true,
    gpa: '4.2/5', // Outstanding academic standing [cite: 77]
    ectsCompleted: 138, // Explicitly showcases your progression [cite: 77]
    focusAreas: [
      'Software Engineering Projects I & II',
      'Advanced Web Development',
      'Data Structures and Algorithms',
      'Object-Oriented Programming & Design Patterns',
      'Machine Learning & AI Fundamentals',
      'Description and Modeling Techniques'
    ], // Extracted cleanly from your coursework [cite: 78]
    achievements: [
      'Maintained a high GPA of 4.2/5 while completing 138 ECTS credits ahead of schedule[cite: 77].',
      'Successfully collaborated on advanced full-stack systems and integrated cutting-edge LLM features into course project architectures[cite: 104, 105].'
    ]
  },
  {
    id: 'jamk-logistics',
    degree: 'Bachelor of Engineering in International Logistics',
    school: 'JAMK University of Applied Sciences',
    location: 'Jyväskylä, Finland',
    startDate: '2019-08',
    endDate: '2021-12',
    period: 'Aug 2019 - Dec 2021',
    gpa: '3.35/5.00', // [cite: 88]
    focusAreas: [
      'Global Supply Chain Management',
      'ERP Systems & Simulation',
      'Production Technology',
      'Purchasing Management'
    ], // [cite: 89]
    thesis: {
      title: 'Supply Chain Management of Unilever Nepal Ltd',
      description: 'Focused on the mathematical and spatial optimization of raw material warehouse flows and vehicle capacity configurations.', // [cite: 90, 91]
    },
    achievements: [
      'Engineered warehouse optimization strategies applied directly to raw material flows[cite: 91].',
      'Utilized simulation techniques to analyze industrial capacity configurations[cite: 89, 91].'
    ]
  },
  {
    id: 'purbanchal-electronics',
    degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
    school: 'Purbanchal University',
    location: 'Kathmandu, Nepal',
    startDate: '2009-08',
    endDate: '2014-08',
    period: 'Aug 2009 - Aug 2014',
    focusAreas: [
      'C-Programming & Object-Oriented Programming (OOP)',
      'Microprocessors & Embedded Systems',
      'Web Programming Techniques',
      'Signal & Systems & Digital Signal Processing (DSP)',
      'Telecommunication & Communication Engineering'
    ], // [cite: 94, 127]
    thesis: {
      title: 'Microcontroller-Based Automatic Meter Reading',
      description: 'Designed and built an automated embedded hardware system for remote telemetry data acquisition and processing.', // [cite: 96]
    },
    achievements: [
      'Successfully designed and fabricated a functional microcontroller hardware prototype for remote utility telemetry telemetry processing[cite: 96, 119].'
    ]
  }
];