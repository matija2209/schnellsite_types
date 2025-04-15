import { Image } from './image';
import { CTA } from './cta';

export enum BlockType {
  Image = "image",
  Video = "video",
  Text = "text",
  CTA = "cta",
}

export interface BaseBlock {
  source?: string;
  text?: string;
  title?: string;
  id?: string;
  customClasses?: string;
}

export interface ImageBlock extends BaseBlock {
  blockType: BlockType.Image;
  image: Image;
  hasPreview?: boolean;
}

export interface VideoBlock extends BaseBlock {
  blockType: BlockType.Video;
  source: string;
}

export interface TextBlock extends BaseBlock {
  blockType: BlockType.Text;
  text: string;
  title?: string;
}

export type ExtraBlock = ImageBlock | VideoBlock | TextBlock | CTA;

// Base interface for common properties across all element types
export interface BaseFreestyleElement {
  id: string;
  element: string;
  content: string;
  customClasses?: string;
  customStyle?: string;
  label?: string;
  children?: FreestyleElement[];
}

// Interface for various HTML elements
export interface HTMLFreestyleElement extends BaseFreestyleElement {
  element: 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'header' | 'ul' | 'ol' | 'li';
}

// Interface for link elements
export interface LinkFreestyleElement extends BaseFreestyleElement {
  element: 'a';
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string
}

// Interface for image elements
export interface ImageFreestyleElement extends BaseFreestyleElement {
  element: 'img';
  content: string;  // Used as src
  label?: string;   // Used as alt text
}

// Interface for icon elements
export interface IconFreestyleElement extends BaseFreestyleElement {
  element: 'icon';
  icon: string;
  size?: number;
  color?: string;
}

// Interface for raw HTML elements
export interface RawHTMLFreestyleElement extends BaseFreestyleElement {
  element: 'html';
  content: string;  // Raw HTML content
}

// Union type for all possible element types
export type FreestyleElement = HTMLFreestyleElement | LinkFreestyleElement | ImageFreestyleElement | IconFreestyleElement | RawHTMLFreestyleElement;

// Interface for a freestyle section
export interface FreestyleBlockSection {
  name?: string;
  excludeSection?: boolean;
  title?: string;
  subtitle?: string;
  htmlId?: string;
  sectionClasses?: string;
  headingClasses?: string;
  contentClasses?: string;
  customStyle?: string;
  blocks: FreestyleElement[];
}

// Type for the main data structure (array of elements)
export type FreestyleComponentData = FreestyleElement[];

export interface FreestyleBlock extends BaseFreestyleElement {
  // This maintains backward compatibility with the original FreestyleBlock
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span" | "img" | "a" | "icon" | "html" | "header" | "ul" | "ol" | "li";
} 

export type Matija = {
  name: string;
  age: number;
  email: string;
}

