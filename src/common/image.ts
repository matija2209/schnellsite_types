export interface Image {
  file?: File; // Optional, for images uploaded and stored locally
  url?: string; // Optional, for externally hosted images
  alt: string; // Alt text for the image, important for accessibility and SEO
  filename?: string;
  id?: string;
}

export interface ImageDetail {
  url: string;
  path: string;
  id: string;
  alt?: string;
  customClasses?: string;
} 