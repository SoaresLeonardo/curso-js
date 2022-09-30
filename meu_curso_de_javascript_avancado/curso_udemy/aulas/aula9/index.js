// O var caso ouver uma tentativa de declarar ela novamente o seu valor será alterado coisa que let não permitiria.

var nome = 'Leonardo';
var nome = 'Henrique';
variavelSemDeclaracao = 'Teste' // NÃO FAZER ISSO!!
console.log(nome);