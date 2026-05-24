export interface ProjectLink {
  type: 'live' | 'github' | 'demo' | 'documentation';
  url: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links: ProjectLink[];
  startDate: string;
  endDate: string;
  projectType: 'Group Project' | 'Solo Project' | 'Academic Year';
  role?: string;
  thumbnail?: string;
}