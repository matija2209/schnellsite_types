import { Image } from './image';
import { CTA } from './cta';
export declare enum BlockType {
    Image = "image",
    Video = "video",
    Text = "text",
    CTA = "cta"
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
export interface BaseFreestyleElement {
    id: string;
    element: string;
    content: string;
    customClasses?: string;
    customStyle?: string;
    label?: string;
    children?: FreestyleElement[];
}
export interface HTMLFreestyleElement extends BaseFreestyleElement {
    element: 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'header' | 'ul' | 'ol' | 'li';
}
export interface LinkFreestyleElement extends BaseFreestyleElement {
    element: 'a';
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    rel?: string;
}
export interface ImageFreestyleElement extends BaseFreestyleElement {
    element: 'img';
    content: string;
    label?: string;
}
export interface IconFreestyleElement extends BaseFreestyleElement {
    element: 'icon';
    icon: string;
    size?: number;
    color?: string;
}
export interface RawHTMLFreestyleElement extends BaseFreestyleElement {
    element: 'html';
    content: string;
}
export type FreestyleElement = HTMLFreestyleElement | LinkFreestyleElement | ImageFreestyleElement | IconFreestyleElement | RawHTMLFreestyleElement;
//# sourceMappingURL=blocks.d.ts.map