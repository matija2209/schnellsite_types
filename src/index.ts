// Schnellsite Types
// This package contains all the shared types used across Schnellsite projects

// Re-export all types from their respective modules
export * from './utils';
export * from './common';
export * from './firebase';
export * from './site';
export * from './content';
export * from './sections';
export * from './pages';
export * from './google-maps';

// Named exports with namespaces for better organization
// Firebase types
import * as FirebaseTypes from './firebase';
export { FirebaseTypes };

// Site types
import * as SiteTypes from './site';
export { SiteTypes };

// Content types
import * as ContentTypes from './content';
export { ContentTypes };

// Section types
import * as SectionTypes from './sections';
export { SectionTypes };

// Page types
import * as PageTypes from './pages';
export { PageTypes };

// Google Maps types
import * as GoogleMapsTypes from './google-maps';
export { GoogleMapsTypes };

// Common types
import * as CommonTypes from './common';
export { CommonTypes };

// Utils types
import * as UtilsTypes from './utils';
export { UtilsTypes }; 