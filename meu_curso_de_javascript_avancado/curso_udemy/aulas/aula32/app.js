// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [primeiroNumero, segundoNumero, ... resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto)


//  ... rest, spread;

                     // 0          1           2
                // 0  1  2    0  1  2    0  1  2
// const numeros = [ [1, 2, 3], [3, 5, 1], [2, 3, 4] ]

// console.log(numeros[0][1])


let a = 'A';
let b = 'B';
let c = 'C';

//Atribuição via desestructuração

const letras = ['B', 'C', 'A'];
[a, b, c] = letras

console.log(a, b, c)