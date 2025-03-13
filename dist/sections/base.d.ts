import { ExtraBlock } from '../common/blocks';
import { TSection } from './types';
export interface SectionBase {
    id: string;
    type: TSection;
    extraBlocks?: ExtraBlock[];
    excludeSection?: boolean;
    sectionClasses?: string;
    contentClasses?: string;
    headingClasses?: string;
    subtitleClasses?: string;
}
//# sourceMappingURL=base.d.ts.map