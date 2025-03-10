import { Template } from '../site/design';
export interface Location {
    lat: number;
    lng: number;
}
export interface LatLng {
    latitude: number;
    longitude: number;
}
export interface SearchInterface {
    includedTypes: string[];
    languageCode: string;
    location: Location;
    circle: Location;
    maxResultCount: number;
    query: string[];
    radius: number;
}
export interface PlaceTableSubmit {
    selectedPlaceIds: string[];
    template: Template;
}
//# sourceMappingURL=location.d.ts.map