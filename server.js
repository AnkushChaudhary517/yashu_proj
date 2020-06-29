// JavaScript source code
console.log("start");
const http = require('http');
console.log("got http");
const app = require('./app');
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);


