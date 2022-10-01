const pessoa =  {
    nome: 'Leonardo', 
    sobrenome: 'Henrique',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 42
    }
};


const {nome, sobrenome, idade, endereco: e} = pessoa;

console.log(nome, e)