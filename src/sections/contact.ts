import { SectionBase } from './base';
import { ContactSectionTemplate } from './types';

export interface ContactSection extends SectionBase {
  title: string;
  subtitle?: string;
  includeEmail: boolean;
  includePhone: boolean; // Take contact phone if there other default one.
  includeAddress: boolean;
  includeForm: boolean;
  includeMap: boolean;
  includeOpeningTimes: boolean;
  includeEmergencyOpeningTimes: boolean;
  formId: string;
  sectionTemplate?: ContactSectionTemplate;
  type: "contact";
} 