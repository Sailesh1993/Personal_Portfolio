export type TechTag = 
  | 'react'
  | 'node'
  | 'express'
  | 'mongodb'
  | 'typescript'
  | 'java'
  | 'javafx'
  | 'docker'
  | 'other';

export interface ProjectLink {
  type: 'github' | 'live' | 'demo' | 'docs';
  url: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  techStack: TechTag[];
  role: 'solo' | 'team';
  highlights: string[];
  links: ProjectLink[];
  startDate?: string;
  endDate?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'other';
}

export interface SocialLink {
  id: string;
  label: 'GitHub' | 'LinkedIn' | 'Email' | 'Other';
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  location?: string;
  bio: string;
}
