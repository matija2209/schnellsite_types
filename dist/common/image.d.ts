export interface Image {
    file?: File;
    url?: string;
    alt: string;
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
