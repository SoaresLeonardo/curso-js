function soma(a, b) {
    const soma = a+ b;
    return soma; 
}

function Criamultiplicador(multiplicador) {
    return function(n)  {
        return  n * multiplicador
    }
}

const duplicar = Criamultiplicador(2)

console.log(duplicar(2))

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}


function falaFrase(comeco) {
    function falaResto(resto) {
        return resto
    }
    return falaResto;
}

function falaFrase(comeco) {
    function falaResto(resto) {
        return resto
    }
    return falaResto;
}