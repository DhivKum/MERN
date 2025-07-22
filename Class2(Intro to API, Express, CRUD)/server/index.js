const http = require('http');

const server = http.createServer((req, res) => {
   res.end("Hello from server"); 

}); 

const port = 8081;

server.listen(port, () => {
     console.log(`Server started at ${port}`);
});
