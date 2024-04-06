const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('ZZZ Greetings from server app2 \n');
});

server.listen(3002, '0.0.0.0', () => {
    console.log('Server running at http://127.0.0.1:3002/ as http://localhost/app2');
});
