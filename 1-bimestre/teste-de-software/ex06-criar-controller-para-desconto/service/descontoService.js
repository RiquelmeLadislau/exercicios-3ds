function descontoService (valor){
    if(valor > 100){
        const desconto = valor * 0.1
        return desconto -(- valor)
        
    }
    return valor
}

module.exports = descontoService 