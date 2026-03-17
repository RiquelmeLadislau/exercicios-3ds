const calcularDesconto = require('../service/descontoService');

function aplicarDesconto(req, res) {
  const { valor } = req.body;

  const valorFinal = calcularDesconto(valor);

  return res.json({ valorFinal });
}

module.exports = { aplicarDesconto };