/*
    *Aritméticos
    * + Adição / Concatenação
    * ** potenciação
    * % Resto divisão
    * - / *
    * 
    * ()
// */
// const num1 = 5;
// // const num1 = '5';
// const num2 = 2;
// const num3 =  10;
// console.log(num1 + num2);
// console.log(num1 / num2);
// console.log(num1 - num2);

// console.log((num1 + num2) * num3);
// O sinal de multiplicação tem a precedencia maior que o + o que acaba que o JavaScript não faz a operação na ordem correta sendo assim necessario a adição de () entre num1 + num2 para que a operação seja feita primeiro para depois ser execultada a multiplicação.    

let contador = 1;

// contador++; // 2
// contador++; // 3
// contador++; // 4
// contador++; // 5
// contador++; // 6    
console.log(++contador);

// -- contador
// ++ contador

// Colocar o ++ na frente faz com o que o acrecento de mais um valor seja somado e exibido na tela no mesmo instante.

//NaN - not a  number
// conversão-- usar o parseInt faz com o que converta a string em número e trasforma o número em um number inteiro
// parseFloat - pode ser usado em conversão de string para número podendo preservar as casas decimais de um number
// Number -- também pode ser usado em conversão de string para número
const num1 = 5;
const num2 = 10;
const num3 = 2;

console.log((num1 + num2) * num3);