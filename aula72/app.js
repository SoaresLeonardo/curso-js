function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    configurable: true, // configuravel
    // value: estoque, // Valor
    // writable: true, // Pode alterar
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 21, 5);
p1.estoque = 600;
console.log(p1.estoque);
