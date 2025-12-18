/**
 * Skill and certification related types
 * Types for managing skills, categories, and certifications
 */

import { Category } from './common.types';

export interface Skill {
  id?: string;
  name: string;
  category: Category;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
}

export interface SkillsByCategory {
  [key: string]: string[];
}

export interface Certification {
  id?: string;
  title: string;
  issuer?: string;
  date?: string;
  credentialUrl?: string;
}

export interface SkillSet {
  skills: Skill[];
  certifications: Certification[];
}
