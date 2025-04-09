import http from 'http';
import httpProxy from 'http-proxy';

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server
const server = http.createServer((req, res) => {
  const target = req.headers['x-target-url'] as string | undefined; // Expecting the target URL in a custom header

  if (target) {
    proxy.web(req, res, { target }, (err) => {
      console.error('Proxy error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Proxy error');
    });
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Missing x-target-url header');
  }
});

const PORT = process.env.PORT || 3880;
server.listen(PORT, () => {
  console.log(`Ngrok-like server is running on port ${PORT}`);
});
