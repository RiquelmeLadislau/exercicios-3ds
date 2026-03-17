let produtos = []

function adicionarProdutos(produto){
    produtos.push(produto)
}
function listarProdutos() {
    return produtos
}
function limparBanco(){
    produtos = []
}

module.exports = {
    adicionarProdutos,
    listarProdutos,
    limparBanco
}