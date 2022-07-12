const http = require('http');

// callback server


// It will run every request. 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is my first page!!!!</title></head>');
    res.write('<body> Hello this is from Node.js Server! </body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);

// Event loop
// Process.exit() will stop the event loop