// return 
// retona um valor
// Termina função

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