import { CTA } from '../common/cta';
export interface NavigationLink {
    text: string;
    href: string;
    id?: string;
}
export interface NavbarSettings {
    isTransparent: boolean;
    logoSize: "small" | "medium" | "large";
    links: NavigationLink[];
    cta: CTA;
}
export interface FooterSettings {
    logoSize: "small" | "medium" | "large";
}
export interface Layout {
    navbar: NavbarSettings;
    footer: FooterSettings;
}
//# sourceMappingURL=layout.d.ts.map