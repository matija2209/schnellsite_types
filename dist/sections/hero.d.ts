import { HeroSectionTemplate } from '@schnellsite/template-system';
import { CTA } from '../common/cta';
import { Image } from '../common/image';
import { SectionBase } from './base';
export interface HeroSection extends SectionBase {
    title?: string;
    subtitle?: string;
    cta?: CTA;
    image?: Image;
    type: "hero";
    sectionTemplate?: HeroSectionTemplate;
}
//# sourceMappingURL=hero.d.ts.map