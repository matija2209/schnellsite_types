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
    menuRestaurant?: MenuRepository;
    menuService?: MenuRepository;
    services?: ServiceRepository;
    faq?: FAQRepository;
    images: Image[];
    openingTimes: OpeningHours;
    emergencyOpeningTimes?: OpeningHours;
    openingTimesCustom?: {
        active: boolean;
        message: string;
    };
}
