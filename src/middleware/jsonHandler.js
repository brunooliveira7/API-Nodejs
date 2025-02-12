export async function jsonBodyHandler(request, response) {
  //adicionar cada chunk(pedaços) de dados em um array
  const buffers = [];

  //recuperando os chunk de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    //concatenar os chunk e converter em string e converte a string em JSON.
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  //define o header da resposta como JSON
  response.setHeader("Content-type", "application/json");
}
