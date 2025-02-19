
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  
 
  if (parsedUrl.pathname === '/greet') {
   
    const name = parsedUrl.query.name;

    
    if (name) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello, ${name}!`);
    } else {
     
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Enter name');
    }
  } else {
    
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});


server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
