/*
Escreva uma função chamada ePaisagem que
recebe dois argumentos, largura e altura
de uma imagem(number);
Retorne true se a imagem estiver no modo paisagem.

*/

// function ePaisagem(largura, altura) {
//     if(largura > altura) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(ePaisagem(1980, 1990))

// Modo mais simplificado:

const ePaisagem = (largura, altura) => (largura > altura ? true : false);

console.log(ePaisagem(1980, 1960));
