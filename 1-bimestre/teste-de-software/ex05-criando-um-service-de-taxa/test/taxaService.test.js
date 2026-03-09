const calcularTaxa = require('../services/taxaService')

describe("Teste o taxaService", ()=>{
    test("aplicar 5% acima de 500", ()=>{
        expect(calcularTaxa(600)).toBe(630)
    })
    test("Não aplicar taxa para valores até 500", ()=>{
        expect(calcularTaxa(300)).toBe(300)
    })
})