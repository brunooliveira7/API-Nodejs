import http from "node:http";
import { jsonBodyHandler } from "./middleware/jsonHandler.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  //adicionando o middleware - monta o corpo da requisição
  await jsonBodyHandler(request, response);

  if (method === "GET" && url === "/products") {
    return response.writeHead(200).end("Listagem de produtos  realizada!");
  }

  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end(JSON.stringify(request.body));
  }

  return response.writeHead(404).end("Rota não encontrada!");
});

server.listen(3333);
