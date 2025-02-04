import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Resposta do back end!");
});

server.listen(3333);
