import { GallerySectionTemplate } from '@schnellsite/template-system';
import { Image } from '../common/image';
import { SectionBase } from './base';
export interface GallerySection extends SectionBase {
    title?: string;
    images?: Image[];
    type: "gallery";
    sectionTemplate?: GallerySectionTemplate;
}
//# sourceMappingURL=gallery.d.ts.map