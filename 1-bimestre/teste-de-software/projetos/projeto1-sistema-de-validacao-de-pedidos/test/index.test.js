const validarPedido = require('../index')

test('Deve validar um pedido com todos os campos preenchidos corretamente', () => {
    const pedido = {
        valorTotal: 100,
        itens: ['Item 1', 'Item 2'],
        cliente: 'João',
    }
    expect(validarPedido(pedido)).toBe(true)
})

test('Deve invalidar um pedido sem cliente', () => {
    const pedido = {
        valorTotal: 100,
        itens: ['Item 1', 'Item 2'],
    }
    expect(validarPedido(pedido)).toBe(false)
})

test('Deve invalidar um pedido sem itens', () => {
    const pedido = {
        valorTotal: 100,
        cliente: 'João',
    }
    expect(validarPedido(pedido)).toBe(false)
})

test('Deve invalidar um pedido com valor total zero', () => {
    const pedido = {
        valorTotal: 0,
        itens: ['Item 1', 'Item 2'],
        cliente: 'João',
    }
    expect(validarPedido(pedido)).toBe(false)
})