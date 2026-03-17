const descontoService =  require("../service/descontoService")

describe("Teste o pedidoService", ()=>{
    test("Deve aplicar 10% de desconto para valores acima de 100", ()=>{
        expect(descontoService(200)).toBe(180)
    })
    
    test("Não deve aplicar desconto para valores menores que 100", ()=>{
        expect(descontoService(80)).toBe(80)
    })
})