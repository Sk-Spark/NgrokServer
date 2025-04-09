# Ngrok-like Server

This project is a custom Ngrok-like server built with Node.js and TypeScript. It acts as a reverse proxy server, forwarding requests to a target URL specified in the `x-target-url` header.

## Project Structure

```
NgrokServer/
├── dist/               # Compiled JavaScript files (generated after build)
├── src/                # Source TypeScript files
│   └── server.ts       # Main server implementation
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd NgrokServer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Build and Run

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

### Usage

Send HTTP requests to the server with the `x-target-url` header specifying the target URL to proxy requests to. For example:

```bash
curl -H "x-target-url: http://example.com" http://localhost:3000
```

### Deployment

This project can be deployed to Azure Web Apps or any other Node.js hosting platform. Ensure the `PORT` environment variable is set appropriately for the hosting environment.

## Testing

### Local Testing

1. **Start a Local Test Server**:
   Create a simple HTTP server on `http://localhost:8000/` to act as the target for testing. You can use the following Node.js code:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end('Hello from localhost:8000!');
   });

   server.listen(8000, () => {
     console.log('Test server is running on http://localhost:8000/');
   });
   ```

   Save this code to a file (e.g., `test-server.js`) and run it using:
   ```bash
   node test-server.js
   ```

2. **Start the Ngrok-like Server**:
   Run the following command to start your Ngrok-like server:
   ```bash
   npm start
   ```

3. **Send a Test Request**:
   Use a tool like `curl` or Postman to send a request to your Ngrok-like server. Include the `x-target-url` header with the value `http://localhost:8000/`.

   Example using `curl`:
   ```bash
   curl -H "x-target-url: http://localhost:8000/" http://localhost:3000
   ```

4. **Verify the Response**:
   - If everything is set up correctly, you should see the response from the test server:
     ```
     Hello from localhost:8000!
     ```
   - If there are any issues, check the logs of your Ngrok-like server for error messages.

## License

This project is licensed under the MIT License.
