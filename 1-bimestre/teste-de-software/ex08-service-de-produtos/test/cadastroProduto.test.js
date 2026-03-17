const { cadastrar } = require('../services/cadastroProdutosServices')
const { database, limpar } = require('../database/database')

describe('Cadastro de Produtos', () => {

  beforeEach(() => {
    limpar()
  })

  test('Produto cadastrado', () => {
    const resultado = cadastrar({ nome: 'Nintendo Switch' })

    expect(resultado).toBe(true);
    expect(database.produtos.length).toBe(1)
  })

  test('Produto sem nome', () => {
    const resultado = cadastrar({ nome: '' })

    expect(resultado).toBe(false);
    expect(database.produtos.length).toBe(0)
  })
})