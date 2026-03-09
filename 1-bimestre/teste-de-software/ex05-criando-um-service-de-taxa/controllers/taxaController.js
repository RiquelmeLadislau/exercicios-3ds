const calcularTaxa = require('../src/taxaService')

function aplicarTaxa(req, res) {
    const { valor } = req.body

    const valorFinal = calcularTaxa(valor)

    return res.json({ valorFinal })
}

module.exports = aplicarTaxa