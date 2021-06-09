// Using Event Emitter API
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome from server");
});

server.listen(5000);
