// Construtor objeto

const pessoa1 = new Object()

pessoa1.nome = 'Leonardo';
pessoa1.sobrenome = 'Henrique';
pessoa1.falarNome = function() {
   console.log(`${this.nome} está falando seu nome.`) 
} 

// pessoa1.falarNome()


function criaPessoa(nome, sobrenome) {
   return {
      nome,
      sobrenome,
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`
      }
   }
 }

// const p1 = criaPessoa('Leonardo', 'Henrique');
// console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   }
// {} <- this
const p1 = new Pessoa('Leonardo', 'Henrique');

// Travando o objeto
Object.freeze(p1)

// Não é possivel alterações
p1.nome = 'Lucas'
console.log(p1)