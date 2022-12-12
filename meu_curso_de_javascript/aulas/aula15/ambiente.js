let num = [5, 8, 2, 9, 3]
num.push(1) //a ordem influencia!
num.sort() //deixa em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if ( pos == -1){
    console.log('Não foi possivel encontrar o valor :(')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
