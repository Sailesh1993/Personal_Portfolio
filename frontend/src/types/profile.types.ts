import { SocialLinks } from './common.types';

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  contact: SocialLinks;
}