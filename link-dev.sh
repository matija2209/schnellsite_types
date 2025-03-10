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
echo ""
echo "IMPORTANT: In your consuming project, add the following to tsconfig.json:"
echo '{
  "compilerOptions": {
    "paths": {
      "@schnellsite/types": ["./node_modules/@schnellsite/types"]
    },
    "preserveSymlinks": true
  }
}' 