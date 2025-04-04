import { TSection } from '@schnellsite/template-system';
import { ExtraBlock } from '../common/blocks';


export interface SectionBase {
  id: string;
  type: TSection;
  customStyles?: string;
  visibility?:{
    hideSectionTitle?: boolean;
    hideSectionSubtitle?: boolean;
  }
  extraBlocks?: ExtraBlock[]; // Optional array of ExtraBlock
  excludeSection?: boolean;
  sectionClasses?: string;
  contentClasses?: string;
  headingClasses?: string;
  subtitleClasses?: string;
} 