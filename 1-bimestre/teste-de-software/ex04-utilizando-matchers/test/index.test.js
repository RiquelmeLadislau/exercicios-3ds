const test = require("node:test");

test("5 é maior que 3",() =>{
    expect(5).toBeGreaterThan(3)
})
test("Que o texto teste de software tenha a palavra software",()=>{
    const texto = "Teste de software"
    expect(text).toContain("software")
})
test("aprovado verdade",() =>{
    const aprovado = {aprovado:true}
    expect(aprovado).toEqual({aprovado:true})
})