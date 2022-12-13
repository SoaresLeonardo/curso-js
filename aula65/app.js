//  Filter, map, reduce

// Retorne os números maiores que 10
//             0   1  2   3  4  5  6...
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//                                     // Metodo
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice)
//     return valor > 10
//  });

// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujon o nome termina com a

const pessoas = [
  { nome: "Leonardo", idade: 15 },
  { nome: "Pedro", idade: 64 },
  { nome: "Joao", idade: 32 },
  { nome: "Maria", idade: 12 },
  { nome: "Jose", idade: 54 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComIdadeAvancada = pessoas.filter((obj) => obj.idade > 50);
const nomeTerminaA = pessoas.filter(function (obj) {
  // termina com -> ('?')
  return obj.nome.toLowerCase().endsWith("a");
});

console.log(pessoasComNomeGrande);

console.log(pessoasComIdadeAvancada);

console.log(nomeTerminaA);
