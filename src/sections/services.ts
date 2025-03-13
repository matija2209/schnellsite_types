import { CTA } from '../common/cta';
import { Service } from '../content/services';
import { SectionBase } from './base';
import { ServicesSectionTemplate } from './types';

// First, let's extract the visibility type from SectionBase to reuse it
type BaseVisibility = NonNullable<SectionBase['visibility']>;

// Now define the additional visibility options for services
export interface ServicesVisibilityExtension {
  hideServiceTitles?: boolean;
  hideServiceDescriptions?: boolean;
  hideServiceIcons?: boolean;
  hideServiceCTAs?: boolean;
  collapseEmptyServices?: boolean;
}

// Create a merged type that includes both base and service-specific visibility options
export type ServicesVisibility = BaseVisibility & ServicesVisibilityExtension;

// Then modify your ServicesSection interface
export interface ServicesSection extends Omit<SectionBase, 'visibility'> {
  services?: Service[]; // yes if includeServices
  includeServices?: boolean;
  title?: string;
  subtitle?: string;
  cta?: CTA;
  type: "services";
  sectionTemplate?: ServicesSectionTemplate;
  design?: {
    transparentCards?: boolean;
    gridColumns?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4";
  }
  visibility?: ServicesVisibility; // Use the merged type here
}