import { ExtraBlock } from '../common/blocks';
import { Seo } from '../site/site';

export type CustomPageType = "basic" | "offers";

export interface PageDetails {
  client?: string;
  pageType: CustomPageType;
}

export interface CustomPage {
  id: string;
  seo: Seo;
  slug: string;
  content?: string; // Tailwind CSS
  blocks?: ExtraBlock[];
  details: PageDetails;
} 