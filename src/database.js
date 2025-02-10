import fs from "fs/promises";
//caminho do arquivo db.json
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  database = {};

  constructor() {
    this.persist();
  }

  persist() {
    //transforma o objeto database em JSON e salva no arquivo db.json
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  //método/função para inserir dados no banco de dados
  insert(table, data) {
    //verifica se a tabela existe no banco de dados
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      //se a tabela não existir, cria a tabela e insere os dados
      this.database[table] = [data];
    }

    this.persist();
  }

  //selecionar dados do banco de dados
  select(table) {
    return this.database[table];
  }
}
