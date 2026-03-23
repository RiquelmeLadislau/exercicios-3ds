const { cadastrarTarefa } = require("../services/tarefaService")
const { tarefas, limpar, listarTarefas } = require("../database/tarefaDatabase")

describe('Cadastro de Tarefas', () => {

    beforeEach(() => {
        limpar()
    })

    test('Tarefa cadastrada', () => {
        const resultado = cadastrarTarefa({ nome: 'Estudar' })

        expect(resultado).toBe(true);
        expect(tarefas.length).toBe(1)
    })

    test('Tarefa sem nome', () => {
        const resultado = cadastrarTarefa({ nome: '' })

        expect(resultado).toBe(false);
        expect(tarefas.length).toBe(0)
    })

    test('Deve retornar tarefas cadastradas', () => {
        cadastrarTarefa({ nome: "Estudar Jest" })
        cadastrarTarefa({ nome: "Fazer exercício" })

        const resultado = listarTarefas()

        expect(resultado.length).toBe(2)
        expect(resultado).toEqual([
            { nome: "Estudar Jest" },
            { nome: "Fazer exercício" }
        ]);
    })
})