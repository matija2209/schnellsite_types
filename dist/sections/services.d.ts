import { CTA } from '../common/cta';
import { Service } from '../content/services';
import { SectionBase } from './base';
import { ServicesSectionTemplate } from './types';
export interface ServicesSection extends SectionBase {
    services: Service[];
    includeServices: boolean;
    title: string;
    subtitle: string;
    cta: CTA;
    type: "services";
    sectionTemplate?: ServicesSectionTemplate;
}
