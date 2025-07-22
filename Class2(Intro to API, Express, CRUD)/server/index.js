const http = require('http');
const fs = require('fs');
const urlPack = require('url');

const server = http.createServer((req, res) => {
   const logTime = `${Date.now()} : ${req.url} New req received \n`;

   const url = req.url; 

   const parsedUrl = urlPack.parse(url, true);
   console.log("Parsed url" , parsedUrl);

   fs.appendFile('log.txt', logTime, (err, data) => {

      console.log("Log updated");
   })

   // res.end("Hello from server"); 
   switch(parsedUrl.pathname) {
      case '/' :
         res.end("Home Page");
         break; 

      case '/about':
         res.end("About Page");
         break; 
      case '/contact':
         // res.end("Contact Page");
         const userName = parsedUrl.query.name;
         res.end(`Hello ${userName}`)
         break; 
      default :
         res.end("404 error");
         break; 
   }

}); 

const port = 8081;

server.listen(port, () => {
     console.log(`Server started at ${port}`);
});
