function descontoService (valor){
    if(valor >= 100){
        valor * 1.10
    }
    return valor
}

module.exports = descontoService 