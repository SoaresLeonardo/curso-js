// Escreva uma função que receba 2 números e retorne o maior deles;

// function recebeNumero(num1, num2) {
//     if(num1 >  num2) {
//         console.log('O número 1 é maior que o número 2!')
//     } else if(num2 > num1) {
//         console.log('O número 2 é maior que o número 1!')
//     } else {
//         console.log('Os 2 números são iguais!')
//     }
// }

// recebeNumero(4, 4)

// Um jeito mais simples:

const recebeNum = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(recebeNum(2, 5));
