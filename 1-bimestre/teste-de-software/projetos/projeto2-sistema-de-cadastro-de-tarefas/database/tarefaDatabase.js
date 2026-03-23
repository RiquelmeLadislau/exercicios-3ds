const tarefas = []

function salvarTarefa(tarefa){
    tarefas.push(tarefa)
}
function listarTarefas(){
    return tarefas
}
function limpar(){
    return tarefas.length = 0
}
module.exports = {
    tarefas,
    salvarTarefa,
    listarTarefas,
    limpar
}