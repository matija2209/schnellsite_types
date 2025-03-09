import { Image } from '../common/image';
import { FAQRepository } from './faq';
import { Form } from './forms';
import { MenuRepository } from './menu';
import { OpeningHours } from './opening-times';
import { ServiceRepository } from './services';
import { Testimonial } from './testimonials';

export interface ContentRepository {
  forms: Form[];
  testimonials: Testimonial[];
  menuRestaurant?: MenuRepository; // Add this for menu-related content only if restaurant
  menuService?: MenuRepository;
  services?: ServiceRepository; // Adding services array
  faq?: FAQRepository;
  images: Image[];
  openingTimes: OpeningHours; // Adjusted to use your preferred structure
  emergencyOpeningTimes?: OpeningHours; // Optional for emergency hours
  openingTimesCustom?: {
    active: boolean;
    message: string;
  };
} 