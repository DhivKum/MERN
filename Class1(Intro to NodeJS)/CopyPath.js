const path = require("path")
const fs = require('fs');

const sourcePath = 'C:\Users\dhivy\OneDrive\Desktop\MERN\Class1(Intro to NodeJS)\my-directory\file.txt';

const destinationPath = 'C:\Users\dhivy\OneDrive\Desktop\MERN\Class1(Intro to NodeJS)\new-directory'

const baseName = path.basename(sourcePath);
console.log(baseName);

const newPath = path.join(destinationPath, baseName);
console.log(newPath);

 fs.copyFileSync(sourcePath, newPath)
console.log("copied successfully"); 