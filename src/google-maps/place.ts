import { LatLng } from './location';

export interface LocalizedText {
  text: string;
  languageCode: string;
}

export interface AddressComponent {
  longText: string;
  shortText: string;
  types: string[];
  languageCode: string;
}

export interface AccessibilityOptions {
  wheelchairAccessibleParking: boolean;
  wheelchairAccessibleEntrance: boolean;
  wheelchairAccessibleRestroom: boolean;
  wheelchairAccessibleSeating: boolean;
}

export interface SubDestination {
  name: string;
  id: string;
}

export interface ParkingOptions {
  freeParkingLot: boolean;
  paidParkingLot: boolean;
  freeStreetParking: boolean;
  paidStreetParking: boolean;
  valetParking: boolean;
  freeGarageParking: boolean;
  paidGarageParking: boolean;
}

export interface PaymentOptions {
  acceptsCreditCards: boolean;
  acceptsDebitCards: boolean;
  acceptsCashOnly: boolean;
  acceptsNfc: boolean;
}

export type PriceLevel =
  | "PRICE_LEVEL_UNSPECIFIED"
  | "PRICE_LEVEL_FREE"
  | "PRICE_LEVEL_INEXPENSIVE"
  | "PRICE_LEVEL_MODERATE"
  | "PRICE_LEVEL_EXPENSIVE"
  | "PRICE_LEVEL_VERY_EXPENSIVE";

export type BusinessStatus =
  | "BUSINESS_STATUS_UNSPECIFIED"
  | "OPERATIONAL"
  | "CLOSED_TEMPORARILY"
  | "CLOSED_PERMANENTLY";

export interface Photo {
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions: AuthorAttribution[];
}

export interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface Point {
  // Define Point interface as needed
}

export interface Period {
  open: Point;
  close: Point;
}

export type SecondaryHoursType =
  | "SECONDARY_HOURS_TYPE_UNSPECIFIED"
  | "DRIVE_THROUGH"
  | "HAPPY_HOUR"
  | "DELIVERY"
  | "TAKEOUT"
  | "KITCHEN"
  | "BREAKFAST"
  | "LUNCH"
  | "DINNER"
  | "BRUNCH"
  | "PICKUP"
  | "ACCESS"
  | "SENIOR_HOURS"
  | "ONLINE_SERVICE_HOURS";

export interface SpecialDay {
  date: Date;
}

export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface GoogleOpeningHours {
  periods: Period[];
  weekdayDescriptions: string[];
  secondaryHoursType: SecondaryHoursType;
  specialDays: SpecialDay[];
  openNow: boolean;
}

export interface Review {
  name: string;
  relativePublishTimeDescription: string;
  text: LocalizedText;
  originalText: LocalizedText;
  rating: number;
  authorAttribution: AuthorAttribution;
  publishTime: string;
}

export interface GooglePlaceV2 {
  name: string;
  id: string;
  displayName: LocalizedText;
  types: string[];
  primaryType: string;
  primaryTypeDisplayName: LocalizedText;
  nationalPhoneNumber: string;
  internationalPhoneNumber: string;
  formattedAddress: string;
  shortFormattedAddress: string;
  addressComponents: AddressComponent[];
  plusCode: any;
  location: LatLng;
  viewport: any;
  rating: number;
  googleMapsUri: string;
  websiteUri: string;
  reviews: Review[];
  regularOpeningHours: GoogleOpeningHours;
  photos: Photo[];
  adrFormatAddress: string;
  businessStatus: BusinessStatus;
  priceLevel: PriceLevel;
  attributions: AuthorAttribution[];
  iconMaskBaseUri: string;
  iconBackgroundColor: string;
  currentOpeningHours: GoogleOpeningHours;
  currentSecondaryOpeningHours: GoogleOpeningHours[];
  regularSecondaryOpeningHours: GoogleOpeningHours[];
  editorialSummary: LocalizedText;
  paymentOptions: PaymentOptions;
  parkingOptions: ParkingOptions;
  subDestinations: SubDestination[];
  fuelOptions: any;
  evChargeOptions: any;
  utcOffsetMinutes: number;
  userRatingCount: number;
  takeout: boolean;
  delivery: boolean;
  dineIn: boolean;
  curbsidePickup: boolean;
  reservable: boolean;
  servesBreakfast: boolean;
  servesLunch: boolean;
  servesDinner: boolean;
  servesBeer: boolean;
  servesWine: boolean;
  servesBrunch: boolean;
  servesVegetarianFood: boolean;
  outdoorSeating: boolean;
  liveMusic: boolean;
  menuForChildren: boolean;
  servesCocktails: boolean;
  servesDessert: boolean;
  servesCoffee: boolean;
  goodForChildren: boolean;
  allowsDogs: boolean;
  restroom: boolean;
  goodForGroups: boolean;
  goodForWatchingSports: boolean;
  accessibilityOptions: AccessibilityOptions;
} 