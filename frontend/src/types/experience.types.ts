export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent?: boolean;
  period: string;
  points: string[];
  technologies?: string[];
}