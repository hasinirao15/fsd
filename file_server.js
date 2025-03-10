const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) =>
     {
  if (req.method === 'GET' && req.url === '/index.html') 
    {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => 
        {
      if (err) 
        {  
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
      } 
      else 
      {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data); 
      }
    });
  } 
  else 
  {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});