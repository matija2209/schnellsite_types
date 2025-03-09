import { CTA } from '../common/cta';
import { Image } from '../common/image';
import { ContentAddon } from './menu';

export interface ServiceRepository {
  services: Service[];
  notes: ContentAddon[]; // Represents additional information or disclaimers about the menu or specific items
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  list?: { text: string }[];
  image?: Image;
  icon?: Image;
  price?: string; // Consider specifying the format (e.g., numeric, string with currency symbol)
  includePrice?: boolean;
  cta?: CTA;
} 