// Test importing the package
const types = require('./dist');
console.log('Main package import:', types);

const firebase = require('./firebase');
console.log('Firebase import:', firebase);

const document = require('./firebase/document');
console.log('Firebase document import:', document); 