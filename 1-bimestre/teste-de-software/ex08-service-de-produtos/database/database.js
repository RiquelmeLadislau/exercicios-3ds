const database = {
  produtos: []
};

function salvarProduto(produto) {
  database.produtos.push(produto);
}

function limpar() {
  database.produtos = [];
}

module.exports = {
  database,
  salvarProduto,
  limpar
};