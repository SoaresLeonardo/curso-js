const nome = 'Leonardo';
const sobrenome = 'Henrique';
const idade = '15';
const peso = '73';
const altura = '1.79';
let imc; // peso / (altura * altura)
let anoNascimento; // ano de nascimento
imc = peso / (altura * altura)
anoNascimento = 2022 - idade
console.log(nome, sobrenome, 'tem', idade, 'pesa', peso, 'kg');
console.log(`tem ${altura} de altura e seu IMC é ${imc}`); //'tem', altura, 'e seu IMC é', imc
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.');

// + ' ' + || , , , 