/**
 * Project related types
 * Types for portfolio projects, descriptions, and links
 */

export interface ProjectHighlight {
    id?: string;
    text: string;
    priority?: 'high' | 'medium' | 'low';
  }
  
  export interface ProjectLink {
    type: 'live' | 'github' | 'demo' | 'documentation';
    url: string;
    label?: string;
  }
  
  export interface ProjectImage {
    id?: string;
    url: string;
    alt: string;
    caption?: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    highlights: ProjectHighlight[] | string[];
    links?: ProjectLink[];
    images?: ProjectImage[];
    startDate?: string;
    endDate?: string;
    featured?: boolean;
    status?: 'active' | 'completed' | 'archived';
  }
  
  export interface ProjectDetail extends Project {
    fullDetails?: string;
    challenges?: string[];
    lessons?: string[];
    metrics?: Record<string, string | number>;
  }
  
  export interface ProjectsData {
    projects: Project[];
    total: number;
    featured: Project[];
  }
  