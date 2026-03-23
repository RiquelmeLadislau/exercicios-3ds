const tarefas = []

function salvarTarefa(tarefa) {
    tarefas.push(tarefa)
}

function contarTarefas() {
    return tarefas.length
}

function limpar() {
    tarefas.length = 0
}

module.exports = {
    salvarTarefa,
    contarTarefas,
    limpar
}