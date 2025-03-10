import { Image } from '../common/image';
import { SectionBase } from './base';
import { GastroMenuSectionTemplate, ServiceMenuSectionTemplate } from './types';
export interface GastroMenuSection extends SectionBase {
    title: string;
    image?: Image;
    subtitle: string;
    includeGroups: boolean;
    includeItems: boolean;
    includeNotes: boolean;
    type: "menu";
    sectionTemplate?: GastroMenuSectionTemplate;
}
export interface ServiceMenuSection extends SectionBase {
    title: string;
    subtitle: string;
    image?: Image;
    includeGroups: boolean;
    includeItems: boolean;
    includeNotes: boolean;
    type: "menu-service";
    sectionTemplate?: ServiceMenuSectionTemplate;
}
//# sourceMappingURL=menu.d.ts.map