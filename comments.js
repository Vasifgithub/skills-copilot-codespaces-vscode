// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const file = path.join(__dirname, 'comments.html  ');
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Error: 404 - File Not Found');
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}   ).listen(3000, () => {                                                   
  console.log('Server is listening on port 3000');
});     