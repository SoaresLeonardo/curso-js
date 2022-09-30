function primeirafuncao() {
    console.log('Hello world!');
}

primeirafuncao()

function dizerNome(nome) {
    console.log('O nome é ' + nome);
}

var nomeBancoDeDados = 'Leo'
dizerNome('Leo')
dizerNome(nomeBancoDeDados)


function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm)

//console.log(soma(5,9))


function multiplicacao(x, y) {
    var multi = x * y;
    return multi;
}

console.log(multiplicacao(2, 9))

function nomeEsobrenome(nome, sobrenome) {
    var nomeEsobre = nome + ' ' + sobrenome;
    return nomeEsobre
}



// for(var i = 0;  i < 10; i++) {
//     console.log('testando')
// }


function form(nome, sobrenome, idade, sexo, profissao) {
    var formulario = nome + ' ' + sobrenome + ' ' + idade + ' ' + sexo + ' ' + profissao ;
    return formulario
    
}



