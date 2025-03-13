import { SectionBase } from './base';
import { ContactSectionTemplate } from './types';
export interface ContactSection extends SectionBase {
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
}
//# sourceMappingURL=contact.d.ts.map