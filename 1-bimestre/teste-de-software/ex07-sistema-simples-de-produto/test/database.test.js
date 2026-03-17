const {adicionarProdutos, listarProdutos,limparBanco } = require("../database/database")

beforeEach(()=>{
    limparBanco()
})

test("Deve adicionar um produto", () => {
    adicionarProdutos({ produtos: "Farinha" })

    const produtos = listarProdutos()

    expect(produtos.length).toBe(1)
})

test("Banco deve começar vazio", ()=>{
    const produtos = listarProdutos()

    expect(produtos.length).toBe(0)
})