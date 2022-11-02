/*
Object.values
Object.estries
Object.assing(des, any)
Object.getOwnPropertyDescription(e. 'prop)
... (spread)
*/

/* Já vimos
Object.keyes(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties (define várias propiedades)
Object.defineProperty (define uma propiedade)

*/

const produto = {nome: 'caneca', preco: 1.8}

const outraCoisa = {
    ...produto,
    

}

outraCoisa.nome = 'Outro nome'

console.log(produto)
console.log(outraCoisa)

