import { Template } from '../site/design';
export interface UserDocument {
    role: "admin" | "user" | "superadmin";
    userSites: string[];
    language: string;
    createdAt: any;
}
export interface BannerSettings {
    message: string;
    startDate: any;
    endDate: any;
    siteId: string;
    id: string;
    createdAt: any;
    isActive: boolean;
    backgroundColor?: string;
}
export type SiteBuildStatus = "pending" | "failed" | "finished" | "processing";
export interface SiteRequestViaPlacesAPI {
    createdAt: any;
    placeId: string;
    template: Template;
    status: SiteBuildStatus;
    displayName?: string;
}
export interface SiteBuildRequest {
    id: string;
    site: string;
    status: SiteBuildStatus;
    uid: string;
    createdAt: any;
}
export interface ScreenshotRequest {
    site: string;
    status: SiteBuildStatus;
    imageUrl?: string;
    url: string;
    id: string;
    createdAt: any;
}
