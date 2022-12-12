// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(function (obj) {
  return obj * 2;
});

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do obj
// Adicione uma chave id em cada obj

const pessoas = [
  { nome: "Leonardo", idade: 15 },
  { nome: "Pedro", idade: 64 },
  { nome: "Joao", idade: 32 },
  { nome: "Maria", idade: 12 },
  { nome: "Jose", idade: 54 },
];

const pessoa = pessoas.map(function (obj) {
  return obj.nome;
});

// console.log(pessoa)

const removeNome = pessoas.map(function (obj) {
  delete obj.nome;
  return obj;
});

console.log(removeNome);

// const nomes = pessoas.map(function(obj) {
//     return obj.nome;
// });

// const idades = pessoas.map(function(obj) {
//     // delete obj.nome;
//     return obj;
// })

// const comIds = pessoas.map(function(obj, indice) {
//     obj.id = indice
//     return obj;
// })

// console.log(comIds)
