// Schnellsite Types
// This package contains all the shared types used across Schnellsite projects

// Export all types from the main types file
export * from "./firebase";
export * from "./opening-times";
export * from "./google-maps";

export type WithId<T> = T & { documentId: string };

export interface SiteData {
  id: string;
  general: GeneralInformation;
  site: Site;
  design: Design;
  layout: Layout;
  content: ContentRepository;
  sections: Section[];
  pages?: CustomPage[]; // This is added later not on creation
  ownerId: string;
  createdBy: string;
  hosting: Hosting;
}

// Top Level Interfaces

export interface Design {
  template: Template; // 'car_services', 'wellness', etc.
  colors: Colors;
  typography: {
    headingFont: string;
    bodyFont: string;
    backupFont: string;
  };
}

export interface Site {
  logo: Logo;
  favicon: Image;
  seo: Seo;
}

export interface Colors {
  primary: string;
  secondary: string;
  action: string;
  action2: string;
  primary_text: string;
  secondary_text: string;
}

export interface GeneralInformation {
  contactEmail: string;
  companyName: string;
  replyToEmail: string;
  phoneNumber: string;
  contactPhoneNumber?: string;
  address: string;
  googlePlaceId?: string;
}

// LAYOUT
export interface Layout {
  navbar: NavbarSettings;
  footer: FooterSettings;
}

// Page
export interface CustomPage {
  id: string;
  seo: Seo;
  slug: string;
  content?: string; // Tailwind CSS
  blocks?: ExtraBlock[];
  details: PageDetails;
}

// Page Details
export interface PageDetails {
  client?: string;
  pageType: CustomPageType;
}

export type CustomPageType = "basic" | "offers";

export interface NavbarSettings {
  isTransparent: boolean;
  logoSize: "small" | "medium" | "large";
  links: NavigationLink[];
  cta: CTA;
}

export interface NavigationLink {
  text: string;
  href: string;
  id?: string;
}

export interface FooterSettings {
  logoSize: "small" | "medium" | "large"; // Assuming similar setting needed for footer
}

export type Template =
  | "car_service"
  | "wellness"
  | "accomodation"
  | "installation"
  | "restaurant"
  | "doctor"
  | "repair";

export interface Logo {
  text?: string; // If the logo includes or is based on text
  image: Image; // Path or file for the logo image
  isImage: boolean;
}

export interface Seo {
  title: string;
  description: string;
  image?: Image;
}

// CONTENT
// General Content Repository within Site Configuration
export interface ContentRepository {
  forms: Form[];
  testimonials: Testimonial[];
  menuRestaurant?: MenuRepository; // Add this for menu-related content only if restaurant
  menuService?: MenuRepository;
  services?: ServiceRepository; // Adding services array
  faq?: FAQRepository;
  images: Image[];
  openingTimes: OpeningHours; // Adjusted to use your preferred structure
  emergencyOpeningTimes?: OpeningHours; // Optional for emergency hours
  openingTimesCustom?: {
    active: boolean;
    message: string;
  };
}

export type OpeningTimes = "openingTimes" | "emergencyOpeningTimes";

export interface Banner {
  message: string;
  startDate: any;
  endDate: any;
  siteId: string;
  id: string;
  createdAt: any;
  isActive: boolean;
}

// Form Related Interfaces
export interface Form {
  id: string;
  label: string; // To identify it easier
  replyToEmail: string;
  title: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  name: string;
  placeholder: string;
  type: FormFieldType;
  required?: boolean;
}

// Enum for Form Field Types for better validation of input types
export enum FormFieldType {
  Text = "text",
  Email = "email",
  TextArea = "textarea",
  Checkbox = "checkbox",
  Radio = "radio",
  Select = "select",
}

// Testimonial Interface
export interface Testimonial {
  id: string;
  name: string;
  text: string;
  date: string; // Let's do Firebase acceptable format seconds, nanoseconds.
  rating?: number; // Optional, in case you want to include ratings
  customClasses?: string;
}

export interface MenuRepository {
  groups: MenuGroup[];
  items: MenuItem[];
  addons: ContentAddon[];
}

// Represents a category or grouping of menu items
export interface MenuGroup {
  id: string;
  name: string;
}

// Represents a specific item on the menu
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image?: Image;
  groupId?: string; // Associates this item with a MenuGroup
}

export interface ServiceRepository {
  services: Service[];
  notes: ContentAddon[]; // Represents additional information or disclaimers about the menu or specific items
}

export interface FAQRepository {
  items: FaqItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  isActive: boolean;
  answer: string;
  order: number;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  list?: { text: string }[];
  image?: Image;
  icon?: Image;
  price?: string; // Consider specifying the format (e.g., numeric, string with currency symbol)
  includePrice?: boolean;
  cta?: CTA;
}

export interface OpeningHours {
  monday?: DailyOperationHours;
  tuesday?: DailyOperationHours;
  wednesday?: DailyOperationHours;
  thursday?: DailyOperationHours;
  friday?: DailyOperationHours;
  saturday?: DailyOperationHours;
  sunday?: DailyOperationHours;
}

export interface DailyOperationHours {
  periods: OpeningPeriod[];
  isClosed?: boolean;
  isOpen24?: boolean;
}

export interface OpeningPeriod {
  open: string;
  close: string;
}

export interface ContentAddon {
  id: string;
  name: string;
  description?: string;
}

export interface Image {
  file?: File; // Optional, for images uploaded and stored locally
  url?: string; // Optional, for externally hosted images
  alt: string; // Alt text for the image, important for accessibility and SEO
  filename?: string;
  id?: string;
}

export interface CTA {
  text: string;
  link: string;
  blockType: "cta";
  customClasses?: string;
}

export type TSection =
  | "hero"
  | "about"
  | "services"
  | "gallery"
  | "testimonials"
  | "contact"
  | "menu"
  | "menu-service"
  | "freestyle";

// SECTIONS
export interface SectionBase {
  id: string;
  type: TSection;
  extraBlocks?: ExtraBlock[]; // Optional array of ExtraBlock
  excludeSection: boolean;
  sectionClasses?: string;
  contentClasses?: string;
  headingClasses?: string;
  subtitleClasses?: string;
}

export interface HeroSection extends SectionBase {
  title: string;
  subtitle: string;
  cta: CTA;
  image: Image; // Assuming image URL or path
  type: "hero";
  sectionTemplate?: HeroSectionTemplate;
}

export type HeroSectionTemplate = "default" | "emergency";

export interface ServicesSection extends SectionBase {
  services: Service[]; // yes if includeServices
  includeServices: boolean;
  title: string;
  subtitle: string;
  cta: CTA;
  type: "services";
  sectionTemplate?: ServicesSectionTemplate;
}

export type ServicesSectionTemplate =
  | "default"
  | "grid"
  | "carousel"
  | "featured"
  | "icon-grid";

export interface GallerySection extends SectionBase {
  title: string;
  images: Image[];
  type: "gallery";
  sectionTemplate?: GallerySectionTemplate;
}

export type GallerySectionTemplate =
  | "default"
  | "masonry"
  | "carousel"
  | "grid"
  | "fullscreen";

export interface AboutSection extends SectionBase {
  title: string;
  subtitle: string;
  text: string;
  image: Image;
  isInverted?: boolean;
  cta?: CTA;
  type: "about";
  sectionTemplate?: AboutSectionTemplate;
}

export type AboutSectionTemplate =
  | "default"
  | "side-by-side"
  | "timeline"
  | "team"
  | "story";

export interface TestimonialsSection extends SectionBase {
  testimonials: Testimonial[];
  includeTestimonials: boolean;
  title: string;
  subtitle: string;
  type: "testimonials";
  sectionTemplate?: TestimonialsSectionTemplate;
}

export type TestimonialsSectionTemplate =
  | "default"
  | "carousel"
  | "grid"
  | "quotes"
  | "cards";

export interface ContactSection extends SectionBase {
  title: string;
  includeEmail: boolean;
  includePhone: boolean; // Take contact phone if there other default one.
  includeAddress: boolean;
  includeForm: boolean;
  includeMap: boolean;
  includeOpeningTimes: boolean;
  includeEmergencyOpeningTimes: boolean;
  formId: string;
  type: "contact";
  sectionTemplate?: ContactSectionTemplate;
}

export type ContactSectionTemplate =
  | "default"
  | "minimal"
  | "split"
  | "map-focused"
  | "form-focused";

export interface GastroMenuSection extends SectionBase {
  title: string;
  image?: Image; // Assuming image URL or path
  subtitle: string;
  includeGroups: boolean;
  includeItems: boolean;
  includeNotes: boolean;
  type: "menu";
  sectionTemplate?: GastroMenuSectionTemplate;
}

export type GastroMenuSectionTemplate =
  | "default"
  | "elegant"
  | "cards"
  | "tabs"
  | "categorized";

export interface ServiceMenuSection extends SectionBase {
  title: string;
  subtitle: string;
  image?: Image; // Assuming image URL or path
  includeGroups: boolean;
  includeItems: boolean;
  includeNotes: boolean;
  type: "menu-service";
  sectionTemplate?: ServiceMenuSectionTemplate;
}

export type ServiceMenuSectionTemplate =
  | "default"
  | "pricing-table"
  | "cards"
  | "comparison"
  | "featured";


export interface FreestyleSection extends SectionBase {
  title?: string;
  subtitle?: string;
  name?: string; // Friendly name for identifying the section
  blocks: FreestyleBlock[];
  type: "freestyle";
  sectionTemplate?: FreestyleSectionTemplate;
}

export type FreestyleSectionTemplate =
  | "default"
  | "grid"
  | "flex"
  | "responsive";

export interface FreestyleBlock {
  id: string;
  element:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "div"
    | "span"
    | "img";
  content: string;
  customClasses: string;
  children: FreestyleBlock[];
}

export type Section =
  | HeroSection
  | TestimonialsSection
  | AboutSection
  | ServicesSection
  | GallerySection
  | ContactSection
  | GastroMenuSection
  | ServiceMenuSection
  | FreestyleSection;

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

export interface ImageDetail {
  url: string;
  path: string;
  id: string;
  alt?: string;
  customClasses?: string;
}

export interface UserDocument {
  role: "admin" | "user" | "superadmin";
  userSites: string[];
  language: string;
  createdAt: any;
}

export interface Location {
  lat: number;
  lng: number;
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

export interface Hosting {
  siteId: string;
  siteName: string;
  siteUrl?: string;
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
  site: string; // name of the site
  status: SiteBuildStatus;
  imageUrl?: string;
  url: string;
  id: string;
  createdAt: any;
}

export type CollectionName =
  | "gmb"
  | "banners"
  | "users"
  | "site_build_requests"
  | "new_site_requests"
  | "screenshoot_requests"
  | "site_deletion_requests";
