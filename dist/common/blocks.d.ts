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
export interface FreestyleBlock {
    id: string;
    element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span" | "img";
    content: string;
    customClasses: string;
    children: FreestyleBlock[];
}
//# sourceMappingURL=blocks.d.ts.map