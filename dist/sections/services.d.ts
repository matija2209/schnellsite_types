import { CTA } from '../common/cta';
import { Service } from '../content/services';
import { SectionBase } from './base';
import { ServicesSectionTemplate } from './types';
export interface ServicesSection extends SectionBase {
    services?: Service[];
    includeServices?: boolean;
    title?: string;
    subtitle?: string;
    cta?: CTA;
    type: "services";
    sectionTemplate?: ServicesSectionTemplate;
    design?: {
        transparentCards?: boolean;
        gridColumns?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4";
    };
}
//# sourceMappingURL=services.d.ts.map