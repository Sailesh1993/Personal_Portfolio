// src/data/experience.ts
import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'prologic-junior-dev',
    role: 'Junior Software Developer',
    company: 'Prologic Solutions',
    location: 'Kathmandu, Nepal (Remote)',
    startDate: '2024-02',
    endDate: '2025-02',
    period: 'Feb 2024 - Feb 2025',
    isCurrent: false,
    points: [
      'Developed scalable full-stack applications leveraging React, Node.js, and automated CI/CD deployment channels.',
      'Managed complete automated software testing matrices, debugged critical production workflows, and authored engineering system documentation.'
    ],
    technologies: ['React.js', 'Node.js', 'CI/CD', 'Automated Testing', 'Technical Documentation']
  },
  {
    id: 'integrify-trainee',
    role: 'Full-Stack Software Development Trainee',
    company: 'Integrify Oy',
    location: 'Helsinki, Finland',
    startDate: '2023-04',
    endDate: '2023-12',
    period: 'Apr 2023 - Dec 2023',
    isCurrent: false,
    points: [
      'Built full-stack e-commerce domain architectures using TypeScript, C#, ASP.NET Core, and Entity Framework Core.',
      'Maintained robust data persistence layers via PostgreSQL and designed cloud deployment pipelines using Azure CI/CD services.'
    ],
    technologies: ['TypeScript', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Azure CI/CD']
  },
  {
    id: 'prologic-it-specialist',
    role: 'IT Specialist',
    company: 'Prologic Solutions',
    location: 'Kathmandu, Nepal',
    startDate: '2018-03',
    endDate: '2019-12',
    period: 'Mar 2018 - Dec 2019',
    isCurrent: false,
    points: [
      'Evaluated corporate network topologies, configured complex storage area networks (SAN), and performed low-level network administration.'
    ],
    technologies: ['Network Topologies', 'Storage Area Networks (SAN)', 'Network Administration']
  },
  {
    id: 'janakalyan-telecom',
    role: 'Telecommunications Specialist',
    company: 'Janakalyan Construction Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    startDate: '2014-09',
    endDate: '2017-12',
    period: 'Sep 2014 - Dec 2017',
    isCurrent: false,
    points: [
      'Engineered off-site hardware configuration and physical line-provisioning interfaces for remote telecommunication link networks.'
    ],
    technologies: ['Hardware Configuration', 'Line Provisioning', 'Telecommunication Links']
  }
];