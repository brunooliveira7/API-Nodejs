import http from "node:http";

const server = http.createServer((request, response) => {
  const { method } = request;
  
  return response.end("Método: " + method)
});

server.listen(3333);
