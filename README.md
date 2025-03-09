# @schnellsite/types

This package contains TypeScript type definitions used across Schnellsite projects.

## Installation

```bash
npm install @schnellsite/types
```

## Usage

```typescript
import { SiteData, Section, Template } from "@schnellsite/types";

// Now you can use these types in your code
const template: Template = "car_service";
```

## Available Types

This package includes types for:

- Site data structure
- Section types and templates
- Content repositories
- UI components
- Form definitions
- And more

## Structure

The types are organized into domain-specific modules:

- `firebase/` - Firebase-related types
- `site/` - Core site structure types
- `content/` - Content repository types
- `sections/` - Section-related types
- `pages/` - Page-related types
- `common/` - Shared types like Image, CTA
- `utils/` - Utility types

This organization makes it easier to find and use the types you need.

## Development

To build the package:

```bash
npm run build
```

## Documentation

For detailed information about changes and development history, see the [Development Log](./docs/DEVLOG.md).

## Publishing

To publish a new version:

1. Update the version in package.json
2. Run `npm run build`
3. Run `npm publish`
