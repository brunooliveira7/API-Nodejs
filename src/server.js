import http from "node:http";

const server = http.createServer((request, response) => {
  const { method } = request;
  
  return response.writeHead(404).end("Método usado: " + method)
});

server.listen(3333);
