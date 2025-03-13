import { SectionBase } from './base';
import { ContactSectionTemplate } from './types';
type BaseVisibility = NonNullable<SectionBase['visibility']>;
export interface ContactVisibilityExtension {
    transparentFormCard?: boolean;
    hideFormTitle?: boolean;
    hideFormSubtitle?: boolean;
}
export type ContactVisibility = BaseVisibility & ContactVisibilityExtension;
export interface ContactSection extends Omit<SectionBase, 'visibility'> {
    title?: string;
    subtitle?: string;
    includeEmail?: boolean;
    includePhone?: boolean;
    includeAddress?: boolean;
    includeForm?: boolean;
    includeMap?: boolean;
    includeOpeningTimes?: boolean;
    includeEmergencyOpeningTimes?: boolean;
    formId?: string;
    sectionTemplate?: ContactSectionTemplate;
    type: "contact";
    visibility?: ContactVisibility;
}
export {};
//# sourceMappingURL=contact.d.ts.map