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

## Development

To build the package:

```bash
npm run build
```

## Publishing

To publish a new version:

1. Update the version in package.json
2. Run `npm run build`
3. Run `npm publish`
