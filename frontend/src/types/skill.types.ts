import { Category } from './common.types';

export interface SkillsByCategory {
  category: Category;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface SkillSet {
  categories: SkillsByCategory[];
  certifications: Certification[];
}