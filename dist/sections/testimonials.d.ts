import { TestimonialsSectionTemplate } from '@schnellsite/template-system';
import { Testimonial } from '../content/testimonials';
import { SectionBase } from './base';
type BaseVisibility = NonNullable<SectionBase['visibility']>;
export interface TestimonialsVisibilityExtension {
    transparentTestimonialCards?: boolean;
}
export interface TestimonialsDesignExtension {
    testimonialsShown?: number;
}
export type TestimonialsVisibility = BaseVisibility & TestimonialsVisibilityExtension;
export interface TestimonialsSection extends SectionBase {
    testimonials?: Testimonial[];
    includeTestimonials?: boolean;
    title?: string;
    design?: {};
    subtitle?: string;
    type: "testimonials";
    sectionTemplate?: TestimonialsSectionTemplate;
    visibility?: TestimonialsVisibility;
}
export {};
//# sourceMappingURL=testimonials.d.ts.map