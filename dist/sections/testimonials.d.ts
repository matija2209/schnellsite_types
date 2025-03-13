import { Testimonial } from '../content/testimonials';
import { SectionBase } from './base';
import { TestimonialsSectionTemplate } from './types';
export interface TestimonialsSection extends SectionBase {
    testimonials?: Testimonial[];
    includeTestimonials?: boolean;
    title?: string;
    subtitle?: string;
    type: "testimonials";
    sectionTemplate?: TestimonialsSectionTemplate;
}
//# sourceMappingURL=testimonials.d.ts.map