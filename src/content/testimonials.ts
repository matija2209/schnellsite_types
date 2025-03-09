export interface Testimonial {
  id: string;
  name: string;
  text: string;
  date: string; // Let's do Firebase acceptable format seconds, nanoseconds.
  rating?: number; // Optional, in case you want to include ratings
  customClasses?: string;
} 