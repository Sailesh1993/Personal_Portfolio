/**
 * Work experience related types
 * Types for managing work experience and employment history
 */

export interface ExperiencePoint {
    id?: string;
    text: string;
  }
  
  export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string | null;
    isCurrent?: boolean;
    period: string;
    description?: string;
    points: ExperiencePoint[] | string[];
    technologies?: string[];
    achievements?: string[];
  }
  
  export interface ExperienceData {
    experiences: Experience[];
    total: number;
  }
  
  export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  