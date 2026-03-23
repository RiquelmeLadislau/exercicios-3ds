const { cadastrarTarefa, totalTarefas } = require("../services/tarefaService")
const { limpar } = require("../database/tarefaDatabase")

describe('Sistema de Tarefas', () => {

    beforeEach(() => {
        limpar()
    })

    test('Deve cadastrar tarefa com sucesso', () => {
        const resultado = cadastrarTarefa("Estudar Node")

        expect(resultado).toBe(true)
        expect(totalTarefas()).toBe(1)
    })

    test('Não deve cadastrar tarefa sem descrição', () => {
        const resultado = cadastrarTarefa("")

        expect(resultado).toBe(false)
        expect(totalTarefas()).toBe(0)
    })

    test('Deve retornar total de tarefas', () => {
        cadastrarTarefa("Tarefa 1")
        cadastrarTarefa("Tarefa 2")

        const total = totalTarefas()

        expect(total).toBe(2)
    })

})