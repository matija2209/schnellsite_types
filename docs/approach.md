
# TypeScript Package Structure Best Practices

This document outlines the package structure and export patterns used in the `@schnellsite/types` package, which represents a set of best practices for TypeScript package development.

## Package Structure Overview

```
@schnellsite/types/
├── src/                  # Source TypeScript files
│   ├── common/           # Domain-specific directories
│   │   ├── image.ts      # Individual type files
│   │   ├── cta.ts
│   │   ├── blocks.ts
│   │   └── index.ts      # Barrel file that re-exports types
│   ├── firebase/
│   │   └── index.ts
│   ├── site/
│   │   └── index.ts
│   └── index.ts          # Main entry point with namespaced exports
├── dist/                 # Compiled JavaScript and declaration files
│   ├── common/
│   │   └── ...
│   └── index.js
├── firebase/             # Re-export directories for nested imports
│   ├── document/
│   │   ├── index.js      # Re-exports from dist
│   │   └── index.d.ts
│   └── index.js
├── scripts/              # Build and utility scripts
│   └── create-nested-exports.js
├── package.json          # Package configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Design Patterns

### 1. Source in `src/` Directory

Keeping all source code in a dedicated `src/` directory is a TypeScript best practice that:

- Separates source code from compiled output
- Keeps the root directory clean
- Makes it clear what files should be edited directly
- Follows the convention used by most TypeScript projects

```
src/
├── common/
├── firebase/
├── site/
└── index.ts
```

### 2. Barrel Files (index.ts)

Each directory contains an `index.ts` file that re-exports all types from that directory:

```typescript
// src/common/index.ts
export * from './image';
export * from './cta';
export * from './blocks';
```

Benefits:
- Simplifies imports (import from directory instead of individual files)
- Creates a clean hierarchy where each level only knows about the level below
- Allows internal refactoring without affecting external code
- Provides clear control over what gets exposed from each module

### 3. Main Entry Point with Namespaced Exports

The main `index.ts` file both re-exports everything and creates namespaced exports:

```typescript
// src/index.ts
// Direct re-exports
export * from './utils';
export * from './common';
export * from './firebase';
// ...more exports

// Namespaced exports
import * as FirebaseTypes from './firebase';
export { FirebaseTypes };

import * as SiteTypes from './site';
export { SiteTypes };
// ...more namespaced exports
```

This allows users to import in two ways:
- Direct: `import { SiteBuildStatus } from '@schnellsite/types'`
- Namespaced: `import { FirebaseTypes } from '@schnellsite/types'`

### 4. Compiled Output in `dist/`

TypeScript compiles the source files into JavaScript and declaration files in the `dist/` directory:

```
dist/
├── common/
│   ├── image.js
│   ├── image.d.ts
│   └── ...
├── firebase/
│   └── ...
└── index.js
```

This is configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "declaration": true,
    // ...other options
  }
}
```

### 5. Re-export Layer for Nested Imports

A unique aspect of this package is the re-export layer that enables nested imports:

```
firebase/
├── document/
│   ├── index.js      // Re-exports from dist/firebase/document
│   └── index.d.ts
└── index.js          // Re-exports from dist/firebase
```

These files simply re-export from the `dist/` directory:

```javascript
// firebase/document/index.js
module.exports = require('../../dist/firebase/document');
```

```typescript
// firebase/document/index.d.ts
export * from '../../dist/firebase/document';
```

This allows users to import directly from nested paths:
```typescript
import { UserDocument } from '@schnellsite/types/firebase/document';
```

### 6. Automated Build Process

The package uses a `postbuild` script to automatically create the re-export layer:

```json
{
  "scripts": {
    "build": "tsc",
    "postbuild": "node scripts/create-nested-exports.js"
  }
}
```

The script creates the necessary directory structure and re-export files after TypeScript compilation.

## Import Patterns for Consumers

This package structure supports three import patterns:

### 1. Namespaced Imports (Recommended)

```typescript
import { FirebaseTypes, SiteTypes } from '@schnellsite/types';

// Use types with their namespace
const status: FirebaseTypes.SiteBuildStatus = 'pending';
const template: SiteTypes.Template = 'car_service';
```

### 2. Direct Imports

```typescript
import { SiteBuildStatus, Template } from '@schnellsite/types';

// Use types directly
const status: SiteBuildStatus = 'pending';
const template: Template = 'car_service';
```

### 3. Nested Path Imports (for Backward Compatibility)

```typescript
import { SiteBuildStatus } from '@schnellsite/types/firebase/document';
import { Template } from '@schnellsite/types/site/design';
```

## Benefits of This Approach

1. **Clean Source Organization**: Source code is organized in a modular, maintainable way
2. **Flexible Imports**: Supports multiple import patterns for different use cases
3. **Backward Compatibility**: Maintains compatibility with existing code
4. **Forward-Looking API**: Encourages use of namespaced imports for better organization
5. **Maintainability**: Each part of the package has a clear responsibility
6. **Scalability**: Can easily add new modules without changing the overall structure

## Conclusion

This package structure represents a sophisticated approach to TypeScript package development that balances:
- TypeScript best practices
- Practical backward compatibility
- Clean API design
- Maintainability and scalability

While it's more complex than a minimal TypeScript package, the additional complexity serves a purpose: providing a flexible, user-friendly API while maintaining a clean, organized codebase.
```Now let's commit this file to your repository:Exit code: 0

Command output:

```
➜  types git:(master) git add docs/approach.md && git commit -m "Add package structure documentation to approach.md"
[master 5c5c5c5] Add package structure documentation to approach.md
 1 file changed, 219 insertions(+)
 create mode 100644 docs/approach.md
➜  types git:(master)