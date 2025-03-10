# @schnellsite/types

This package contains TypeScript type definitions used across Schnellsite projects.

## Installation

```bash
npm install @schnellsite/types
```

## Usage

### Recommended Import Patterns

You can import types in several ways:

#### 1. Using Namespaced Imports (Recommended)

```typescript
import { FirebaseTypes, SiteTypes } from "@schnellsite/types";

// Use types with their namespace
const status: FirebaseTypes.SiteBuildStatus = "pending";
const template: SiteTypes.Template = "car_service";
```

#### 2. Direct Imports

```typescript
import { SiteBuildStatus, Template } from "@schnellsite/types";

// Use types directly
const status: SiteBuildStatus = "pending";
const template: Template = "car_service";
```

#### 3. Specific Path Imports (Supported for Backward Compatibility)

For backward compatibility, you can also import directly from specific paths:

```typescript
// This style is supported for backward compatibility
import { SiteBuildStatus } from "@schnellsite/types/firebase/document";
import { Template } from "@schnellsite/types/site/design";
```

While this approach is supported for backward compatibility, we recommend migrating to the namespaced imports for better maintainability.

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

- `firebase/` - Firebase-related types (accessible via `FirebaseTypes`)
- `site/` - Core site structure types (accessible via `SiteTypes`)
- `content/` - Content repository types (accessible via `ContentTypes`)
- `sections/` - Section-related types (accessible via `SectionTypes`)
- `pages/` - Page-related types (accessible via `PageTypes`)
- `common/` - Shared types like Image, CTA (accessible via `CommonTypes`)
- `utils/` - Utility types (accessible via `UtilsTypes`)

This organization makes it easier to find and use the types you need.

## Development

To build the package:

```bash
npm run build
```

For development with watch mode:

```bash
npm run dev
```

### Local Development with Symlinks

When developing locally and using this package in other projects via symlinks, follow these best practices:

1. **Use the Provided Script**: Create a file called `link-dev.sh` in your project root:

```bash
#!/bin/bash

# Script for linking @schnellsite/types for local development

# Build the package first
echo "Building @schnellsite/types..."
npm run build

# Create npm link
echo "Creating npm link..."
npm link

echo "Package linked successfully. In your consuming project, run:"
echo "npm link @schnellsite/types"
```

2. **In Consuming Projects**: Use the following approach:

```bash
# Remove the package if installed
npm uninstall @schnellsite/types

# Link the local package
npm link @schnellsite/types

# Verify the link was created properly
if [ -L "node_modules/@schnellsite/types" ]; then
  echo "Successfully linked @schnellsite/types"
else
  echo "Failed to create symlink"
fi
```

3. **TypeScript Configuration**: In consuming projects, add the following to your tsconfig.json:

```json
{
  "compilerOptions": {
    "paths": {
      "@schnellsite/types": ["./node_modules/@schnellsite/types"]
    },
    "preserveSymlinks": true
  }
}
```

This ensures TypeScript resolves the package correctly and prevents imports from nested paths.

## Deployment

When deploying applications that use this package, there are two main approaches:

### 1. Publishing to npm (Recommended)

The most reliable way to use this package in production is to publish it to npm:

```bash
# Update version in package.json
npm run build
npm publish
```

Then in your consuming projects, install it normally:

```bash
npm install @schnellsite/types
```

### 2. Installing from GitHub

If you prefer to install directly from GitHub:

1. Make sure all changes are committed and pushed to the repository
2. In your consuming project, install the package from GitHub:

```bash
npm install git+https://github.com/matija2209/schnellsite_types.git
```

#### For Vercel Deployments

If your GitHub repository is private and you're deploying to Vercel:

1. Create a GitHub Personal Access Token with `repo` scope
2. Add it as an environment variable in your Vercel project settings:
   - Go to your project on Vercel
   - Navigate to Settings > Environment Variables
   - Add a new variable named `GITHUB_TOKEN` with your token as the value
   - Make sure it's available in all environments (Production, Preview, Development)

3. Update your build script to use the token:

```json
{
  "scripts": {
    "build": "GITHUB_URL_PREFIX=\"https://username:${GITHUB_TOKEN}@github.com/username\" npm install && next build"
  }
}
```

This ensures that during the build process, Vercel can access your private repositories.

## Documentation

For detailed information about changes and development history, see the [Development Log](./docs/DEVLOG.md).

## Publishing

To publish a new version:

1. Update the version in package.json
2. Run `npm run build`
3. Run `npm publish`
