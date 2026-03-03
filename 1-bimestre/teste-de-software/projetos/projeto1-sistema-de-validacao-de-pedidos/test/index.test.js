const validarPedido = require('../index')

test('Pedido com total 0 deve retornar false', () => {
    const pedido = { cliente: 'everson', total: 0, itens: 0 }
    expect(validarPedido(pedido)).toBeFalsy()
})

test('Pedido sem cliente deve retornar false', () => {
    const pedido = { total: 12, itens: ['Produto 1'] }
    expect(validarPedido(pedido)).toBeFalsy()
})

test('Pedido sem itens deve retornar false', () => {
    const pedido = { cliente: 'everson', total: 123 }
    expect(validarPedido(pedido)).toBeFalsy()
})

test('Pedido válido, deve retornar true', () => {
    const pedido = { cliente: 'everson', total: 1711, itens: ['Produto 1'] }
    expect(validarPedido(pedido)).toBeTruthy()
})