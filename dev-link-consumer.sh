#!/bin/bash

# Script for consuming projects to link to local @schnellsite/types

# Path to the local package
TYPES_PATH="/Users/ziberna/Documents/Projects/schnellsite/types"

# Remove the package if installed
echo "Removing installed package..."
npm uninstall @schnellsite/types

# Ensure the directory structure exists
mkdir -p node_modules/@schnellsite

# Link the local package
echo "Linking to local package at $TYPES_PATH..."
npm link @schnellsite/types

# Verify the link was created properly
if [ -L "node_modules/@schnellsite/types" ]; then
  echo "Successfully linked @schnellsite/types"
  
  # Check if tsconfig.json exists
  if [ -f "tsconfig.json" ]; then
    echo ""
    echo "IMPORTANT: Make sure your tsconfig.json includes the following:"
    echo '{
  "compilerOptions": {
    "paths": {
      "@schnellsite/types": ["./node_modules/@schnellsite/types"]
    },
    "preserveSymlinks": true
  }
}'
  else
    echo "WARNING: No tsconfig.json found. Please create one with the proper configuration."
  fi
else
  echo "Failed to create symlink. Creating manual symlink..."
  ln -sf "$TYPES_PATH" node_modules/@schnellsite/types
  
  if [ -L "node_modules/@schnellsite/types" ]; then
    echo "Manual symlink created successfully."
  else
    echo "ERROR: Failed to create symlink. Please check the paths and permissions."
    exit 1
  fi
fi

echo ""
echo "Development link setup complete. You should now be able to import from @schnellsite/types"
echo "Example: import { FirebaseTypes } from '@schnellsite/types';" 