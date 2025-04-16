export interface CTA {
  text: string;
  link: string;
  blockType: "cta";
  customClasses?: string;
  customStyles?: string;
  target?: "_blank" | "_self";
} 