/**
 * This script cleans up the dist directory and all re-exported folders
 * before building the package.
 */

const fs = require('fs');
const path = require('path');

// Directories to clean up
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

console.log('Starting cleanup...');

// Delete each directory
directories.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  
  if (fs.existsSync(dirPath)) {
    console.log(`Removing directory: ${dir}`);
    
    // Recursive function to delete directory contents
    const deleteDir = (dirPath) => {
      if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file) => {
          const curPath = path.join(dirPath, file);
          if (fs.lstatSync(curPath).isDirectory()) {
            // Recursive call for directories
            deleteDir(curPath);
          } else {
            // Delete file
            fs.unlinkSync(curPath);
          }
        });
        
        // Delete the empty directory
        fs.rmdirSync(dirPath);
      }
    };
    
    try {
      deleteDir(dirPath);
      console.log(`Successfully removed ${dir}`);
    } catch (err) {
      console.error(`Error removing ${dir}: ${err.message}`);
    }
  } else {
    console.log(`Directory ${dir} does not exist, skipping.`);
  }
});

// Clean dist directory but preserve its structure
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  console.log('Cleaning dist directory...');
  
  // Function to clean directory contents but preserve structure
  const cleanDir = (dirPath) => {
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach((file) => {
        const curPath = path.join(dirPath, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          // Recursive call for directories
          cleanDir(curPath);
        } else {
          // Delete file
          fs.unlinkSync(curPath);
        }
      });
    }
  };
  
  try {
    cleanDir(distDir);
    console.log('Successfully cleaned dist directory');
  } catch (err) {
    console.error(`Error cleaning dist directory: ${err.message}`);
  }
} else {
  console.log('Creating dist directory...');
  fs.mkdirSync(distDir, { recursive: true });
}

console.log('Cleanup completed.'); 