const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      status: 'healthy',
      version: 'v1.0.0',
      service: 'kk-payments'
    }));
  } else {
    res.writeHead(200);
    res.end('KijaniKiosk Payments Running');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
