/**
 * This script creates the necessary directory structure and re-export files
 * to support both recommended import patterns and direct imports from nested paths.
 */

const fs = require('fs');
const path = require('path');

// Directories to process
const directories = [
  'firebase',
  'site',
  'content',
  'sections',
  'pages',
  'common',
  'utils',
  'google-maps'
];

// Create the directory structure in the dist folder
directories.forEach(dir => {
  // Create the directory in the root of the package
  const rootDir = path.join(__dirname, '..', dir);
  if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir, { recursive: true });
  }

  // Create an index.js file that re-exports from dist
  const indexContent = `// Re-export from dist
module.exports = require('./dist/${dir}');
`;
  fs.writeFileSync(path.join(rootDir, 'index.js'), indexContent);

  // Create an index.d.ts file that re-exports types
  const dtsContent = `// Re-export types from dist
export * from './dist/${dir}';
`;
  fs.writeFileSync(path.join(rootDir, 'index.d.ts'), dtsContent);

  // Process individual files in each directory
  const distDir = path.join(__dirname, '..', 'dist', dir);
  if (fs.existsSync(distDir)) {
    const files = fs.readdirSync(distDir)
      .filter(file => file !== 'index.js' && file !== 'index.d.ts' && (file.endsWith('.js') || file.endsWith('.d.ts')));
    
    // Get unique base names (without extensions)
    const baseNames = [...new Set(files.map(file => path.basename(file, path.extname(file))))];
    
    // Create re-export files for each individual file
    baseNames.forEach(baseName => {
      // Skip index files
      if (baseName === 'index') return;
      
      const fileDir = path.join(rootDir, baseName);
      
      // Create directory for the file if it doesn't exist
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
      }
      
      // Create JS re-export
      const jsContent = `// Re-export from dist
module.exports = require('../../dist/${dir}/${baseName}');
`;
      fs.writeFileSync(path.join(fileDir, 'index.js'), jsContent);
      
      // Create TS declaration re-export
      const dtsContent = `// Re-export types from dist
export * from '../../dist/${dir}/${baseName}';
`;
      fs.writeFileSync(path.join(fileDir, 'index.d.ts'), dtsContent);
    });
  }
});

console.log('Created nested exports for backward compatibility.'); 