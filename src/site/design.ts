export type Template =
  | "car_service"
  | "wellness"
  | "accomodation"
  | "installation"
  | "restaurant"
  | "doctor"
  | "repair";

export interface Colors {
  primary: string;
  secondary: string;
  action: string;
  action2: string;
  primary_text: string;
  secondary_text: string;
}

export interface Design {
  template: Template; // 'car_services', 'wellness', etc.
  colors: Colors;
  typography: {
    headingFont: string;
    bodyFont: string;
    backupFont: string;
  };
} 