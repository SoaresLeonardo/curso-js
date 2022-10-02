// const nomes = ['Leonardo', 'Henrique', 'Soares']

// for(let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

// console.log("$$$$")

// for(let i in nomes) {
//     console.log(nomes[i]);
// }

// console.log("$$$$")


// for(let valor of nomes) {
//     console.log(valor);
// }


const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Henrique'
}
 

for(let i in pessoa) {
    console.log(i);
}


// For clássico => Geralmente com interáveis (array, strings)
// For in => Retorna o índice ou chave (string, array ou objetos)
// For of => Retorna o valor em si (interáveis, array oustring)