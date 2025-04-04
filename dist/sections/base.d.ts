import { TSection } from '@schnellsite/template-system';
import { ExtraBlock } from '../common/blocks';
export interface SectionBase {
    id: string;
    type: TSection;
    customStyles?: string;
    visibility?: {
        hideSectionTitle?: boolean;
        hideSectionSubtitle?: boolean;
    };
    extraBlocks?: ExtraBlock[];
    excludeSection?: boolean;
    sectionClasses?: string;
    contentClasses?: string;
    headingClasses?: string;
    subtitleClasses?: string;
}
//# sourceMappingURL=base.d.ts.map