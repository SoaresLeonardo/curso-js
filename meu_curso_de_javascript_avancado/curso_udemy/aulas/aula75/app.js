// const objA = {
//     chaveA: 'A'
// }

// // console.dir(objA)

// const objB= {
//     chaveB: 'B'
// }

// // __proto__: Object.prototype

// Object.setPrototypeOf(objB, objA)

// console.log(objB)

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p2 = {
  nome: "Caneca",
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p1 = new Produto("Camiseta", 50);
p1.aumento(100);
console.log(p1);
console.log(p2);
