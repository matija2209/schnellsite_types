import { GastroMenuSectionTemplate, ServiceMenuSectionTemplate } from '@schnellsite/template-system';
import { Image } from '../common/image';
import { SectionBase } from './base';

export interface GastroMenuSection extends SectionBase {
  title?: string;
  image?: Image; // Assuming image URL or path
  subtitle?: string;
  includeGroups?: boolean;
  includeItems?: boolean;
  includeNotes?: boolean;
  type: "menu";
  sectionTemplate?: GastroMenuSectionTemplate;
}

export interface ServiceMenuSection extends SectionBase {
  title?: string;
  subtitle?: string;
  image?: Image; // Assuming image URL or path
  includeGroups?: boolean;
  includeItems?: boolean;
  includeNotes?: boolean;
  type: "menu-service";
  sectionTemplate?: ServiceMenuSectionTemplate;
} 