/**
 * Common types used across the portfolio
 * Shared interfaces and types for multiple features
 */

export type Category = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'IoT';

export type LanguageLevel = 
  | 'A1 - Elementary' 
  | 'A2 - Elementary' 
  | 'B1 - Intermediate' 
  | 'B2 - Professional' 
  | 'C1 - Advanced' 
  | 'C2 - Fluent';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface Language {
  name: string;
  level: LanguageLevel;
}

export interface NavSection {
  id: string;
  label: string;
}
