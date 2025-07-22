const fs = require('fs');

// https://github.com/mrinal1224/Coolest-September-Batch

//Asynchronous Operations
//Read a file
const data = fs.readFileSync("f1.txt", "utf-8");
console.log("This is F1 ---> " , data); 

//Write a  file
fs.writeFileSync("f2.txt", "This is the updated file");
console.log("File written Successfully!")

//Update or append a file
fs.appendFileSync('f2.txt', ' in NodeJS');
console.log("Appended file successfully")

//Delete a file
// fs.unlinkSync('f2.txt');
// console.log("File deleted successfully!")

//Rename a file
// fs.renameSync('f2.txt', 'newFile.txt');
// console.log("Rename a file successfully")

//FS module for directories
//Create a dir
fs.mkdirSync("my-directory");
console.log("Directory created successfully");

//Remove a directory
// fs.rmSync("my-directory", { recursive : true, force : true});
// console.log("Dir deleted successfully!")

//Check whether the file exists or not
const doesExist = fs.existsSync('f4.txt');
console.log(doesExist)