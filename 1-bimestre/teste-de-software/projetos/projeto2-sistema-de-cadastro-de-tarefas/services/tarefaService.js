const { salvarTarefa } = require("../database/tarefaDatabase");

function cadastrarTarefa(descricao){
    if (!descricao.nome || descricao.nome.trim() === "") {
    return false
  }
  salvarTarefa(descricao)
    return true
}
module.exports = {
    cadastrarTarefa
}