const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   const logTime = `${Date.now()} : ${req.url} New req received \n`;

   const url = req.url; 

   fs.appendFile('log.txt', logTime, (err, data) => {

      console.log("Log updated");
   })

   // res.end("Hello from server"); 
   switch(url) {
      case '/' :
         res.end("Home Page");
         break; 

      case '/about':
         res.end("About Page");
         break; 
      case '/contact':
         res.end("Contact Page");
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
