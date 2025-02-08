export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(200).end("Listagem de produtos  realizada!");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
];
