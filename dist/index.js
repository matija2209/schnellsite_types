"use strict";
// Schnellsite Types
// This package contains all the shared types used across Schnellsite projects
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsTypes = exports.CommonTypes = exports.GoogleMapsTypes = exports.PageTypes = exports.SectionTypes = exports.ContentTypes = exports.SiteTypes = exports.FirebaseTypes = void 0;
// Re-export all types from their respective modules
__exportStar(require("./utils"), exports);
__exportStar(require("./common"), exports);
__exportStar(require("./firebase"), exports);
__exportStar(require("./site"), exports);
__exportStar(require("./content"), exports);
__exportStar(require("./pages"), exports);
__exportStar(require("./google-maps"), exports);
__exportStar(require("./sections"), exports);
// Named exports with namespaces for better organization
// Firebase types
const FirebaseTypes = __importStar(require("./firebase"));
exports.FirebaseTypes = FirebaseTypes;
// Site types
const SiteTypes = __importStar(require("./site"));
exports.SiteTypes = SiteTypes;
// Content types
const ContentTypes = __importStar(require("./content"));
exports.ContentTypes = ContentTypes;
// Section types
const SectionTypes = __importStar(require("./sections"));
exports.SectionTypes = SectionTypes;
// Page types
const PageTypes = __importStar(require("./pages"));
exports.PageTypes = PageTypes;
// Google Maps types
const GoogleMapsTypes = __importStar(require("./google-maps"));
exports.GoogleMapsTypes = GoogleMapsTypes;
// Common types
const CommonTypes = __importStar(require("./common"));
exports.CommonTypes = CommonTypes;
// Utils types
const UtilsTypes = __importStar(require("./utils"));
exports.UtilsTypes = UtilsTypes;
