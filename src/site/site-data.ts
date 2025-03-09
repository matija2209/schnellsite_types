import { ContentRepository } from '../content/repository';
import { Section } from '../sections';
import { CustomPage } from '../pages/custom-page';
import { Design } from './design';
import { GeneralInformation } from './general';
import { Hosting } from './hosting';
import { Layout } from './layout';
import { Site } from './site';

// These will be properly imported once those files are created
export interface SiteData {
  id: string;
  general: GeneralInformation;
  site: Site;
  design: Design;
  layout: Layout;
  content: ContentRepository;
  sections: Section[];
  pages?: CustomPage[]; // This is added later not on creation
  ownerId: string;
  createdBy: string;
  hosting: Hosting;
} 