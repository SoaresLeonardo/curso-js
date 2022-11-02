//  Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

// console.log(total)



// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Leonardo', idade: 15},
    {nome: 'Pedro', idade: 64},
    {nome: 'Joao', idade: 32},
    {nome: 'Maria', idade: 122},
    {nome: 'Jose', idade: 54}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0)

console.log(maisVelha)

