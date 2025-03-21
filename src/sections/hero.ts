import { CTA } from '../common/cta';
import { Image } from '../common/image';
import { SectionBase } from './base';
import { HeroSectionTemplate } from './types';

export interface HeroSection extends SectionBase {
  title?: string;
  subtitle?: string;
  cta?: CTA;
  image?: Image; // Assuming image URL or path
  type: "hero";
  sectionTemplate?: HeroSectionTemplate;
} 