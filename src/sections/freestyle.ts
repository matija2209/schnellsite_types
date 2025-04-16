import { FreestyleSectionTemplate } from '@schnellsite/template-system';
import {  FreestyleElement } from '../common/blocks';
import { SectionBase } from './base';


export interface FreestyleSection extends SectionBase {
  title?: string;
  subtitle?: string;
  name?: string; // Friendly name for identifying the section
  blocks?: FreestyleElement[];
  type: "freestyle";
  sectionTemplate?: FreestyleSectionTemplate;
} 


// Interface for a freestyle section
// export interface FreestyleBlockSection {
//   name?: string;
//   excludeSection?: boolean;
//   title?: string;
//   subtitle?: string;
//   htmlId?: string;
//   sectionClasses?: string;
//   headingClasses?: string;
//   contentClasses?: string;
//   customStyle?: string;
//   blocks: FreestyleElement[];
// }
