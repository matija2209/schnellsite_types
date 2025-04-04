
export * from './base';
export * from './hero';
export * from './about';
export * from './services';
export * from './gallery';
export * from './testimonials';
export * from './contact';
export * from './menu';
export * from './freestyle';
export * from './faq';


import { HeroSection } from './hero';
import { AboutSection } from './about';
import { ServicesSection } from './services';
import { GallerySection } from './gallery';
import { TestimonialsSection } from './testimonials';
import { ContactSection } from './contact';
import { GastroMenuSection, ServiceMenuSection } from './menu';
import { FreestyleSection } from './freestyle';
import { FaqSection } from './faq';


export type Section =
  | HeroSection
  | AboutSection
  | ServicesSection
  | GallerySection
  | TestimonialsSection
  | ContactSection
  | GastroMenuSection
  | ServiceMenuSection
  | FreestyleSection
  | FaqSection;