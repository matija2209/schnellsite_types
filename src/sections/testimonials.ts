import { TestimonialsSectionTemplate } from '@schnellsite/template-system/dist/types/templates';
import { Testimonial } from '../content/testimonials';
import { SectionBase } from './base';



// First, let's extract the visibility type from SectionBase to reuse it
type BaseVisibility = NonNullable<SectionBase['visibility']>;

// Now define the additional visibility options for services
export interface TestimonialsVisibilityExtension {
  transparentTestimonialCards?:boolean
}

export interface TestimonialsDesignExtension {
  testimonialsShown?: number;

}

// Create a merged type that includes both base and service-specific visibility options
export type TestimonialsVisibility = BaseVisibility & TestimonialsVisibilityExtension;


export interface TestimonialsSection extends SectionBase {
  testimonials?: Testimonial[];
  includeTestimonials?: boolean;
  title?: string;
  design?:{}
  subtitle?: string;
  type: "testimonials";
  sectionTemplate?: TestimonialsSectionTemplate;
  visibility?: TestimonialsVisibility;
} 