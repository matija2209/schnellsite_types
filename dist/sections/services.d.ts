import { ServicesSectionTemplate } from '@schnellsite/template-system';
import { CTA } from '../common/cta';
import { Service } from '../content/services';
import { SectionBase } from './base';
type BaseVisibility = NonNullable<SectionBase['visibility']>;
export interface ServicesVisibilityExtension {
    hideServiceTitles?: boolean;
    hideServiceDescriptions?: boolean;
    hideServiceIcons?: boolean;
    hideServiceCTAs?: boolean;
    collapseEmptyServices?: boolean;
}
export type ServicesVisibility = BaseVisibility & ServicesVisibilityExtension;
export interface ServicesSection extends Omit<SectionBase, 'visibility'> {
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
    visibility?: ServicesVisibility;
}
export {};
//# sourceMappingURL=services.d.ts.map