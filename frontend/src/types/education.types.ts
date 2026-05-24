// src/types/education.types.ts

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  period: string;
  focusAreas: string[];
  gpa?: string;
  ectsCompleted?: number;
  isCurrent?: boolean;    
  achievements?: string[]; 
  thesis?: {
    title: string;
    description: string;
    url?: string;
  };
}

export interface EducationData {
  education: Education[];
  total: number;
}