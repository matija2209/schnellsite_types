import { FaqSectionTemplate } from '@schnellsite/template-system';
import { FaqItem } from '../content';
import { SectionBase } from './base';
export interface FaqSection extends SectionBase {
    title?: string;
    subtitle?: string;
    name?: string;
    items?: FaqItem[];
    type: "faq";
    sectionTemplate?: FaqSectionTemplate;
}
//# sourceMappingURL=faq.d.ts.map