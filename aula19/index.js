// primitivos (imutáveis) - string, number, boolean, undefined, null 

// let a = 'A';
// let b = a; //Cópia
// a = 'Outra coisa';
// console.log(a, b)

// Referencia (mutável) - array, object, function;

let a = [1, 2, 3];
let b = a; // let b = [...a]; 
console.log(a, b)

a.push(4)

b.pop();

console.log(a, b)  