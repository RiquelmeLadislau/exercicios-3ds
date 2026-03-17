const { aplicarDesconto } = require('../controller/descontoController');

describe('descontoController', () => {
  test('Deve retornar valor com desconto', () => {
    const req = {
      body: { valor: 200 }
    };

    const res = {
      json: jest.fn()
    };

    aplicarDesconto(req, res);

    expect(res.json).toHaveBeenCalledWith({ valorFinal: 180 });
  });

  test('Deve retornar valor sem desconto', () => {
    const req = {
      body: { valor: 50 }
    };

    const res = {
      json: jest.fn()
    };

    aplicarDesconto(req, res);

    expect(res.json).toHaveBeenCalledWith({ valorFinal: 50 });
  });
});