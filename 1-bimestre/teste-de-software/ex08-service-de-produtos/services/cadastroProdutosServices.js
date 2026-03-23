const { salvarProduto } = require('../database/database');

function cadastrar(produto) {
  if (!produto.nome || produto.nome.trim() === "") {
    return false;
  }

  salvarProduto(produto)
  return true
}

module.exports = {
  cadastrar
}