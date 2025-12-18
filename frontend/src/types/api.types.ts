/**
 * API and data fetching related types
 * Types for managing API responses and data states
 */

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
    timestamp?: string;
  }
  
  export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
  }
  
  export interface PortfolioData {
    personalInfo?: {
      name: string;
      title: string;
      location: string;
      bio?: string;
    };
    skills?: any;
    projects?: any;
    experience?: any;
    education?: any;
    lastUpdated?: string;
  }
  
  export type FetchStatus = 'idle' | 'loading' | 'success' | 'error';
  
  export interface FetchState<T> {
    data: T | null;
    status: FetchStatus;
    error: string | null;
  }
  