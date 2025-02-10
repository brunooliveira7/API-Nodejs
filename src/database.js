export class Database {
  database = {};

  //método/função para inserir dados no banco de dados
  insert(table, data) {
    //verifica se a tabela existe no banco de dados
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      //se a tabela não existir, cria a tabela e insere os dados
      this.database[table] = [data];
    }
  }
  
  //selecionar dados do banco de dados
  select(table) {
    return this.database[table];
  }
}
