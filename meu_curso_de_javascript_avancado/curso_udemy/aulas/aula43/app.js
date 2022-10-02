// escreva uma função que recebe um numerp e retorna o seguinte: 

// o numero é divisivel por 3 = fizz é divisivel por 5 = Buzz
// o numero é divisivel por 3 e 5=  FizBuzz
// o numero nao é divisivel por 3 e 5 retorna o numero normal

function FizzBuzz(numero) {
    if(typeof numero === 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz'
    if(numero % 5 === 0) return 'Buzz'
    return numero;
}

for(let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}