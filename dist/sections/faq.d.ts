import { FaqItem } from '../content';
import { SectionBase } from './base';
import { FaqSectionTemplate } from './types';
export interface FaqSection extends SectionBase {
    title?: string;
    subtitle?: string;
    name?: string;
    items: FaqItem[];
    type: "faq";
    sectionTemplate?: FaqSectionTemplate;
}
//# sourceMappingURL=faq.d.ts.map