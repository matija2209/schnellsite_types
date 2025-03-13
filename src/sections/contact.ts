import { SectionBase } from './base';
import { ContactSectionTemplate } from './types';

// First, extract the visibility type from SectionBase
type BaseVisibility = NonNullable<SectionBase['visibility']>;

// Define the additional visibility options for contact section
export interface ContactVisibilityExtension {
  transparentFormCard?: boolean;
  hideFormTitle?: boolean;
  hideFormSubtitle?: boolean;
}

// Create a merged type that combines both base and contact-specific visibility options
export type ContactVisibility = BaseVisibility & ContactVisibilityExtension;

// Then modify your ContactSection interface
export interface ContactSection extends Omit<SectionBase, 'visibility'> {
  title?: string;
  subtitle?: string;
  includeEmail?: boolean;
  includePhone?: boolean; // Take contact phone if there other default one.
  includeAddress?: boolean;
  includeForm?: boolean;
  includeMap?: boolean;
  includeOpeningTimes?: boolean;
  includeEmergencyOpeningTimes?: boolean;
  formId?: string;
  sectionTemplate?: ContactSectionTemplate;
  type: "contact";
  visibility?: ContactVisibility; // Use the merged type here
}