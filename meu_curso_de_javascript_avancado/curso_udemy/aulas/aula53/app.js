function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('leo')

console.log(funcao)