// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }


function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}

const p1 = new Pessoa('leo', 'henrique')
console.log(p1)