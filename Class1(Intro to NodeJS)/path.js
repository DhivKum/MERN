const path = require('path');

//Getting the Basename
const basename = path.basename('f1.txt');
console.log(basename);

//Getting the extension name
const extname = path.extname('f1.txt');
console.log(extname);

//Getting the current dir name
console.log(__dirname)

//Getting the file name
console.log(__filename);