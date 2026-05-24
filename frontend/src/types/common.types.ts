export type Category = 
  | 'Programming Languages' 
  | 'Frameworks & Architecture' 
  | 'DevOps, Cloud & Systems' 
  | 'Data Engineering & Analysis' 
  | 'Testing & Quality Assurance' 
  | 'Specialized System Software & Hardware';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface NavSection {
  id: string;
  label: string;
  href: string;
}