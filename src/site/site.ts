import { Image } from '../common/image';

export interface Logo {
  text?: string; // If the logo includes or is based on text
  image: Image; // Path or file for the logo image
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