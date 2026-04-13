const login = require("../src/index.js")

describe("Teste da função login",() => {
    test("Test: Deve retornar true para login válido",()=>{
        expect(login("admin","123")).toBe(true)
    })
    test("Test: Deve retornar false para senha incorreta",()=>{
        expect(login("admin",1234)).toBe(false)
    })
    test("Test: Deve retornar false para usuário incorreto",()=>{
        expect(login("Everson",123)).toBe(false)
    })
    test("Test: Deve retornar false quando dados não forem informados",()=>{
        expect(login()).toBe(false)
    })
})