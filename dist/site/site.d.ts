import { Image } from '../common/image';
export interface Logo {
    text?: string;
    image: Image;
    isImage: boolean;
}
export interface Seo {
    title: string;
    description: string;
    image?: Image;
}
export interface Site {
    logo: Logo;
    favicon: Image;
    seo: Seo;
}
