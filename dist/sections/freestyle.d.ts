import { FreestyleBlock } from '../common/blocks';
import { SectionBase } from './base';
import { FreestyleSectionTemplate } from './types';
export interface FreestyleSection extends SectionBase {
    title?: string;
    subtitle?: string;
    name?: string;
    blocks?: FreestyleBlock[];
    type: "freestyle";
    sectionTemplate?: FreestyleSectionTemplate;
}
//# sourceMappingURL=freestyle.d.ts.map