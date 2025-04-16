import { FreestyleSectionTemplate } from '@schnellsite/template-system';
import { FreestyleElement } from '../common/blocks';
import { SectionBase } from './base';
export interface FreestyleSection extends SectionBase {
    title?: string;
    subtitle?: string;
    name?: string;
    blocks?: FreestyleElement[];
    type: "freestyle";
    sectionTemplate?: FreestyleSectionTemplate;
}
//# sourceMappingURL=freestyle.d.ts.map