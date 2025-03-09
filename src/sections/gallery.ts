import { Image } from '../common/image';
import { SectionBase } from './base';
import { GallerySectionTemplate } from './types';

export interface GallerySection extends SectionBase {
  title: string;
  images: Image[];
  type: "gallery";
  sectionTemplate?: GallerySectionTemplate;
} 