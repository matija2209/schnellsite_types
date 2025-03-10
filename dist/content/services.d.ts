import { CTA } from '../common/cta';
import { Image } from '../common/image';
import { ContentAddon } from './menu';
export interface ServiceRepository {
    services: Service[];
    notes: ContentAddon[];
}
export interface Service {
    id: string;
    name: string;
    description?: string;
    list?: {
        text: string;
    }[];
    image?: Image;
    icon?: Image;
    price?: string;
    includePrice?: boolean;
    cta?: CTA;
}
//# sourceMappingURL=services.d.ts.map