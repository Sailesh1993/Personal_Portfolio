/**
 * Education related types
 * Types for managing education history and qualifications
 */

export interface EducationFocus {
    id?: string;
    topic: string;
  }
  
  export interface Education {
    id: string;
    degree: string;
    school: string;
    location: string;
    country?: string;
    startDate: string;
    endDate: string;
    period: string;
    focusAreas: EducationFocus[] | string[];
    gpa?: number;
    description?: string;
    achievements?: string[];
    isCurrent?: boolean;
  }
  
  export interface EducationData {
    education: Education[];
    total: number;
  }
  