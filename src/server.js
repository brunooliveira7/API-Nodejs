import http from "node:http";
import { jsonBodyHandler } from "./middleware/jsonHandler.js";
import { routeHandler } from "./middleware/routeHandler.js";

const server = http.createServer(async (request, response) => {
  //adicionando o middleware - monta o corpo da requisição
  await jsonBodyHandler(request, response);
  
  routeHandler(request, response);
});

server.listen(3333);
