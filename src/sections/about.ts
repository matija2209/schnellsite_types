import { AboutSectionTemplate } from '@schnellsite/template-system';
import { CTA } from '../common/cta';
import { Image } from '../common/image';
import { SectionBase } from './base';


export interface AboutSection extends SectionBase {
  title?: string;
  subtitle?: string;
  text?: string;
  image?: Image;
  isInverted?: boolean;
  cta?: CTA;
  type: "about";
  sectionTemplate?: AboutSectionTemplate;
} 